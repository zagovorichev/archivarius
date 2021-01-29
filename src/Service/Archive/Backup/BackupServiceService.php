<?php

declare(strict_types=1);

namespace App\Service\Archive\Backup;

use App\Contract\Service\Archive\BackupServiceInterface;
use App\Contract\Service\Helper\StringServiceInterface;
use App\Contract\Service\Helper\TmpFileStorageInterface;
use App\Contract\Service\Helper\ZipServiceInterface;
use App\Exception\BackupException;
use App\Exception\ZipperException;
use League\Flysystem\FileExistsException;
use League\Flysystem\FileNotFoundException;
use League\Flysystem\FilesystemInterface;

class BackupServiceService implements BackupServiceInterface
{
    public function __construct(
        private FilesystemInterface $archiveFilesystem,
        private FilesystemInterface $backupFilesystem,
        private TmpFileStorageInterface $tmpFileStorage,
        private ZipServiceInterface $zipper,
        private StringServiceInterface $stringService,
    ) { }

    private function generateNewBackupPath(): string
    {
        do {
            $uid = $this->stringService->uuid();
            $path = $uid.'.zip';
        } while ($this->backupFilesystem->has($path));

        return $path;
    }

    /**
     * @param string $path
     * @return string
     * @throws BackupException
     */
    private function moveBackup(string $path): string
    {
        $backupPath = $this->generateNewBackupPath();
        $fStream = $this->tmpFileStorage->openStream($path);
        try {
            $this->backupFilesystem->writeStream($backupPath, $fStream);
        } catch (FileExistsException $e) {
            throw new BackupException('Backup already exists');
        }
        $this->tmpFileStorage->closeStream($fStream);
        $this->tmpFileStorage->remove($path);
        return $backupPath;
    }

    /**
     * Returns path to the backup file
     * @param array $archiveIds
     * @return string
     * @throws BackupException
     */
    public function create(array $archiveIds): string
    {
        $tmpArchivePath = $this->tmpFileStorage->create();
        try {
            $tmpZipArchive = $this->zipper->initialize($tmpArchivePath);
        } catch (ZipperException $e) {
            throw new BackupException('Zip can not be created');
        }

        $filesTmp = [];
        foreach ($archiveIds as $archiveId) {
            if (!$this->archiveFilesystem->has($archiveId)) {
                throw new BackupException(sprintf('File "%s" not found', $archiveId));
            }

            foreach ($this->archiveFilesystem->listContents($archiveId, true) as $file) {
                if ($file['type'] !== 'file') {
                    continue;
                }
                $tmpFilePath = $this->tmpFileStorage->create();
                try {
                    $fStream = $this->archiveFilesystem->readStream($file['path']);
                } catch (FileNotFoundException $e) {
                    throw new BackupException('Can not read the file');
                }
                $this->tmpFileStorage->writeStream($tmpFilePath, $fStream);
                $tmpZipArchive->addFile($tmpFilePath, $file['path']);
                $filesTmp[] = $tmpFilePath; // we can't delete files before zip closed
            }
        }

        $tmpZipArchive->close();

        foreach ($filesTmp as $tmp) {
            $this->tmpFileStorage->remove($tmp);
        }

        // store backup file
        return $this->moveBackup($tmpArchivePath);
    }

    /**
     * @param string $path
     */
    public function remove(string $path): void
    {
        if ($this->backupFilesystem->has($path)) {
            try {
                $this->backupFilesystem->delete($path);
            } catch (FileNotFoundException $e) {}
        }
    }
}

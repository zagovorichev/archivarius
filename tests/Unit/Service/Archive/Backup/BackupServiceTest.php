<?php

declare(strict_types=1);

namespace App\Tests\Unit\Service\Archive\Backup;

use App\Contract\Service\Archive\BackupServiceInterface;
use App\Contract\Service\Helper\StringServiceInterface;
use App\Contract\Service\Helper\TmpFileStorageInterface;
use App\Contract\Service\Helper\ZipServiceInterface;
use App\Service\Archive\Backup\BackupServiceService;
use League\Flysystem\FilesystemInterface;
use PHPUnit\Framework\TestCase;
use ZipArchive;

class BackupServiceTest extends TestCase
{

    private BackupServiceInterface $backupService;
    private FilesystemInterface $backupFilesystem;
    private TmpFileStorageInterface $tmpFileStorage;
    private ZipServiceInterface $zipper;
    private FilesystemInterface $archiveFilesystem;
    private StringServiceInterface $stringService;

    protected function setUp(): void
    {
        parent::setUp();

        $this->archiveFilesystem = $this->createMock(FilesystemInterface::class);
        $this->backupFilesystem = $this->createMock(FilesystemInterface::class);
        $this->tmpFileStorage = $this->createMock(TmpFileStorageInterface::class);
        $this->zipper = $this->createMock(ZipServiceInterface::class);
        $this->stringService = $this->createMock(StringServiceInterface::class);

        $this->backupService = new BackupServiceService(
            $this->archiveFilesystem,
            $this->backupFilesystem,
            $this->tmpFileStorage,
            $this->zipper,
            $this->stringService
        );

    }

    public function testCreate(): void
    {
        $this->tmpFileStorage->method('create')->willReturn('mockedFilePath');

        $zipArchiveMock = $this->createMock(ZipArchive::class);
        $this->zipper->method('initialize')->willReturn($zipArchiveMock);

        $this->archiveFilesystem->method('has')->willReturn(true);

        $this->archiveFilesystem->method('listContents')->willReturn([
            [
                'type' => 'file',
                'path' => 'mockArchFilePath',
            ]
        ]);

        $this->stringService->method('uuid')->willReturn('uuid');

        self::assertSame('uuid.zip', $this->backupService->create(['1', '2']));
    }

    public function testRemove(): void
    {
        $this->backupFilesystem->expects(self::once())->method('has')->willReturn(true);
        $this->backupFilesystem->expects(self::once())->method('delete')->willReturn(null);

        $this->backupService->remove('test');
    }
}

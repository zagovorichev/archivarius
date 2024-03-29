<?php

declare(strict_types=1);

namespace App\Service\Archive\Storage\FileSystem;

use App\Contract\Entity\ArchiveRecordInterface;
use App\Contract\Repository\ArchiveRecordRepositoryInterface;
use App\Contract\Service\Helper\StringServiceInterface;
use App\Contract\Service\Helper\TmpFileStorageInterface;
use App\Entity\ArchiveRecord;
use App\Exception\ArchiveException;
use App\Exception\SettingsException;
use DateTime;
use DOMDocument;
use Exception;
use JetBrains\PhpStorm\ArrayShape;
use JetBrains\PhpStorm\Pure;
use League\Flysystem\DirectoryAttributes;
use League\Flysystem\Filesystem;
use League\Flysystem\FilesystemException;
use Symfony\Component\HttpFoundation\File\UploadedFile;

class ArchiveRecordRepository implements ArchiveRecordRepositoryInterface
{
    public function __construct(
        private Filesystem $archiveFilesystem,
        private StringServiceInterface $stringService,
        private TmpFileStorageInterface $tmpFileStorage,
    ) { }

    /**
     * @throws SettingsException
     */
    public function exists(string $id): bool
    {
        try {
            return $this->archiveFilesystem->fileExists($id);
        } catch (FilesystemException $e) {
            throw new SettingsException($e);
        }
    }

    /**
     * @throws SettingsException
     */
    public function delete(string $id): void
    {
        try {
            $this->archiveFilesystem->deleteDirectory($id);
        } catch (FilesystemException $e) {
            throw new SettingsException($e);
        }
    }

    /**
     * @param ArchiveRecordInterface $archiveRecord
     * @throws ArchiveException
     */
    public function save(ArchiveRecordInterface $archiveRecord): void
    {
        // set identifier if not provided
        if (!$archiveRecord->getId()) {
            $archiveRecord->setId($this->generateIdentifier());
        }

        try {
            if (!$this->directoryExists($archiveRecord->getId())) {
                $this->archiveFilesystem->createDirectory($archiveRecord->getId());
            }
        } catch (FilesystemException $e) {
            throw new ArchiveException(sprintf('Directory "%s" was not created. [Error]: %s', $archiveRecord->getId(), $e->getMessage()));
        }

        $this->saveManifest($archiveRecord);
    }

    /**
     * @throws ArchiveException
     */
    private function directoryExists($dirName): bool
    {
        try {
            $items = $this->archiveFilesystem->listContents('');
        } catch (FilesystemException $e) {
            throw new ArchiveException($e);
        }

        /** @var DirectoryAttributes $item */
        foreach ($items as $item) {
            if ($item->isDir() && $item->path() === $dirName) {
                return true;
            }
        }
        return false;
    }

    /**
     * @throws ArchiveException
     */
    private function generateIdentifier(): string
    {
        do {
            $id = $this->stringService->uuid();
        } while($this->directoryExists($id));

        return $id;
    }

    /**
     * @param ArchiveRecordInterface $archiveRecord
     * @return string
     */
    private function getAttachmentsPath(ArchiveRecordInterface $archiveRecord): string
    {
        return $archiveRecord->getId() . '/attachments';
    }

    /**
     * @param ArchiveRecordInterface $archiveRecord
     * @param string $extension
     * @return string
     * @throws ArchiveException
     */
    private function generateNewAttachmentPath(ArchiveRecordInterface $archiveRecord, string $extension): string
    {
        $dir = $this->getAttachmentsPath($archiveRecord);

        try {
            do {
                $uid = $this->stringService->uuid();
                $path = $dir . '/' . $uid . '.' . $extension;
            } while ($this->archiveFilesystem->fileExists($path));
        } catch (FilesystemException $e) {
            throw new ArchiveException($e);
        }

        return $path;
    }

    /**
     * @param ArchiveRecordInterface $archiveRecord
     * @param UploadedFile $uploadedFile
     * @return array
     * @throws ArchiveException
     */
    #[ArrayShape(['docPath' => "string", 'docOrigName' => "string", 'docTitle' => "string"])]
    public function addAttachment(ArchiveRecordInterface $archiveRecord, UploadedFile $uploadedFile): array
    {
        try {
            $this->archiveFilesystem->fileExists($this->getAttachmentsPath($archiveRecord));
            $this->archiveFilesystem->createDirectory($this->getAttachmentsPath($archiveRecord));
        } catch (FilesystemException) {
            throw new ArchiveException('File system error');
        }

        $fStream = $this->tmpFileStorage->openStream($uploadedFile->getPathname());

        try {
            $attachmentPath = $this->generateNewAttachmentPath(
                $archiveRecord,
                $uploadedFile->getClientOriginalExtension()
            );

            $this->archiveFilesystem->writeStream(
                $attachmentPath,
                $fStream
            );

            $this->tmpFileStorage->closeStream($fStream);

            $docInfo = [
                'docPath' => $attachmentPath,
                'docOrigName' => $uploadedFile->getClientOriginalName(),
                'docTitle' => $uploadedFile->getClientOriginalName(),
            ];

            $archiveRecord->setDocuments(
                array_merge($archiveRecord->getDocuments(), [$docInfo])
            );

            $this->save($archiveRecord);

            return $docInfo;
        } catch (FilesystemException $e) {
            $this->tmpFileStorage->closeStream($fStream);
            throw new ArchiveException($e->getMessage());
        }
    }

    /**
     * @param string $path
     * @return resource
     * @throws ArchiveException
     */
    public function getStream(string $path)
    {
        try {
            return $this->archiveFilesystem->readStream($path);
        } catch (FilesystemException) {
            throw new ArchiveException(sprintf('Attachment does not found: %s', $path));
        }
    }

    /**
     * @param string $path
     * @return string
     * @throws ArchiveException
     */
    public function getMimeType(string $path): string
    {
        try {
            return $this->archiveFilesystem->mimeType($path);
        } catch (FilesystemException) {
            throw new ArchiveException(sprintf('Attachment does not found: %s', $path));
        }
    }

    public function getDocInfo(ArchiveRecordInterface $archiveRecord, string $path): array
    {
        $attachments = $archiveRecord->getDocuments();

        $docKey = null;
        foreach ($attachments as $key => $attachment) {
            if ($attachment['docPath'] === $path) {
                $docKey = $key;
            }
        }

        if (is_null($docKey)) {
            // do nothing, attachment record not found
            return [];
        }

        return $attachments[$docKey];
    }

    /**
     * @param ArchiveRecordInterface $archiveRecord
     * @param array $docInfo
     * @return array
     * @throws ArchiveException
     */
    public function updateDocInfo(ArchiveRecordInterface $archiveRecord, array $docInfo): array
    {
        $attachments = $archiveRecord->getDocuments();

        $docKey = null;
        foreach ($attachments as $key => $attachment) {
            if (isset($attachment['docPath']) && $attachment['docPath'] === $docInfo['docPath']) {
                $docKey = $key;
                break;
            }
        }

        if (is_null($docKey)) {
            // do nothing, attachment record not found
            throw new ArchiveException('Attachment not found');
        }

        $attachments[$docKey] = $docInfo;
        // update list of documents
        $archiveRecord->setDocuments($attachments);
        $this->save($archiveRecord);
        return $docInfo;
    }

    /**
     * @param ArchiveRecordInterface $archiveRecord
     * @param string $path
     * @throws ArchiveException
     */
    public function deleteAttachment(ArchiveRecordInterface $archiveRecord, string $path): void
    {
        $attachments = $archiveRecord->getDocuments();

        $deleteKey = null;
        foreach ($attachments as $key => $attachment) {
            if ($attachment['docPath'] === $path) {
                $deleteKey = $key;
            }
        }

        if (!$deleteKey) {
            // do nothing, attachment record not found
            return;
        }

        // delete file
        try {
            $this->archiveFilesystem->delete($path);
        } catch (FilesystemException) {
            throw new ArchiveException(sprintf('Attached file not found: %s', $path));
        }

        // delete attachment
        unset($attachments[$deleteKey]);

        // update list of documents
        $archiveRecord->setDocuments($attachments);
        $this->save($archiveRecord);
    }

    /**
     * @param string $id
     * @return ArchiveRecordInterface
     * @throws ArchiveException
     */
    public function get(string $id): ArchiveRecordInterface
    {
        $archiveRecord = new ArchiveRecord($id);

        $dom = new DOMDocument('1.0', 'utf-8');
        $dom->loadXML($this->getManifest($id));

        $archiveRecord->setTitle($dom->getElementsByTagName('title')->item(0)->nodeValue);
        $archiveRecord->setDescription($dom->getElementsByTagName('description')->item(0)->nodeValue);

        $archiveRecord->setCreatedBy($dom->getElementsByTagName('createdBy')->item(0)->nodeValue);

        try {
            $archiveRecord->setCreatedAt(new DateTime($dom->getElementsByTagName('createdAt')->item(0)->nodeValue));
            $archiveRecord->setUpdatedAt(new DateTime($dom->getElementsByTagName('updatedAt')->item(0)->nodeValue));
        } catch (Exception $e) {
            throw new ArchiveException(sprintf('The date from the manifest can not be parsed, with message: %s', $e->getMessage()));
        }

        $archiveRecord->setFloatVal((float) $dom->getElementsByTagName('floatVal')->item(0)->nodeValue);

        $tags = [];
        $tagNodes = $dom->getElementsByTagName('tags')->item(0);
        if ($tagNodes) {
            foreach ($tagNodes->childNodes as $childNode) {
                if ($childNode->nodeName === 'tag') {
                    $tags[] = $childNode->nodeValue;
                }
            }
        }
        $archiveRecord->setTags($tags);

        $docs = [];
        $docsNode = $dom->getElementsByTagName('docs')->item(0);
        if ($docsNode) {
            foreach ($docsNode->childNodes as $childNode) {
                if ($childNode->nodeName === 'doc') {
                    $docInfo = [];
                    foreach ($childNode->childNodes as $docChildNode) {
                        switch ($docChildNode->nodeName) {
                            case 'docPath':
                                $docInfo['docPath'] = $docChildNode->nodeValue;
                                break;
                            case 'docOrigName':
                                $docInfo['docOrigName'] = $docChildNode->nodeValue;
                                break;
                            case 'docTitle':
                                $docInfo['docTitle'] = $docChildNode->nodeValue;
                                break;
                        }
                    }
                    $docs[] = $docInfo;
                }
            }
        }
        $archiveRecord->setDocuments($docs);

        return $archiveRecord;
    }

    /**
     * @throws SettingsException
     */
    public function getAllId(): array
    {
        $identifiers = [];
        try {
            $directoryListing = $this->archiveFilesystem->listContents('');
        } catch (FilesystemException $e) {
            throw new SettingsException($e);
        }
        foreach ($directoryListing as $item) {
            if ($item['type'] === 'dir') {
                $identifiers[] = $item['path'];
            }
        }
        return $identifiers;
    }

    private function getPathToManifest(string $archiveId): string
    {
        return $archiveId . '/manifest.xml';
    }

    /**
     * @param string $archiveId
     * @return string
     * @throws ArchiveException
     */
    private function getManifest(string $archiveId): string
    {
        $manPath = $this->getPathToManifest($archiveId);

        try {
            return $this->archiveFilesystem->read($manPath);
        } catch (FilesystemException) {
            throw new ArchiveException('Manifest file not found');
        }
    }

    /**
     * @param ArchiveRecordInterface $archiveRecord
     * @throws ArchiveException
     */
    private function saveManifest(ArchiveRecordInterface $archiveRecord): void
    {
        $manPath = $this->getPathToManifest($archiveRecord->getId());
        $creationDate = null;

        try {
            $fileExists = $this->archiveFilesystem->fileExists($manPath);
        } catch (FilesystemException $e) {
            throw new ArchiveException($e);
        }

        if ($fileExists) {
            // versions?
            // $vManPath = $manPath.'_'.microtime();
            // rename($manPath, $vManPath);

            $oldDom = new DOMDocument('1.0', 'utf-8');
            $oldDom->loadXML($this->getManifest($archiveRecord->getId()));

            $creationDate = $oldDom->getElementsByTagName('createdAt')->item(0)->nodeValue;

            try {
                $this->archiveFilesystem->delete($manPath);
            } catch (FilesystemException) {
                // do nothing
            }
        }

        $dom = new DOMDocument('1.0', 'utf-8');
        //turning off some errors
        libxml_use_internal_errors(true);

        $archiveEl = $dom->createElement('archive');
        $dom->appendChild($archiveEl);

        $idEl = $dom->createElement('id', $archiveRecord->getId());
        $titleEl = $dom->createElement('title', $archiveRecord->getTitle());
        $descriptionEl = $dom->createElement('description', $archiveRecord->getDescription());
        $floatEl = $dom->createElement('floatVal', (string) $archiveRecord->getFloatVal());

        $tagsEl = $dom->createElement('tags');
        foreach ($archiveRecord->getTags() as $tag) {
            $tagEl = $dom->createElement('tag', $tag);
            $tagsEl->appendChild($tagEl);
        }

        $docsEl = $dom->createElement('docs');
        foreach ($archiveRecord->getDocuments() as $document) {
            $docEl = $dom->createElement('doc');
            $docTitleEl = $dom->createElement('docTitle', $document['docTitle']);
            $docPathEl = $dom->createElement('docPath', $document['docPath']);
            $docOrigNameEl = $dom->createElement('docOrigName', $document['docOrigName']);

            $docEl->appendChild($docTitleEl);
            $docEl->appendChild($docPathEl);
            $docEl->appendChild($docOrigNameEl);

            $docsEl->appendChild($docEl);
        }

        $curDate = date('Y-m-d H:i:s');
        $creationDateEl = $dom->createElement('createdAt', $creationDate ?: $curDate);
        $updatedDateEl = $dom->createElement('updatedAt', $curDate);
        $createdByEl = $dom->createElement('createdBy', 'user');

        $archiveEl->appendChild($idEl);
        $archiveEl->appendChild($titleEl);
        $archiveEl->appendChild($descriptionEl);
        $archiveEl->appendChild($floatEl);
        $archiveEl->appendChild($tagsEl);
        $archiveEl->appendChild($docsEl);
        $archiveEl->appendChild($creationDateEl);
        $archiveEl->appendChild($updatedDateEl);
        $archiveEl->appendChild($createdByEl);

        if (!isset($manPath)) {
            throw new ArchiveException('Manifest path is not defined');
        }

        try {
            $this->archiveFilesystem->write($manPath, $dom->saveXML());
        } catch (FilesystemException $e) {
            throw new ArchiveException($e);
        }
    }

    /**
     * @param ArchiveRecordInterface $archiveRecord
     * @return array
     * @throws ArchiveException
     */
    public function getAttachments(ArchiveRecordInterface $archiveRecord): array
    {
        try {
            return $this->archiveFilesystem->listContents($this->getAttachmentsPath($archiveRecord))->toArray();
        } catch (FilesystemException $e) {
            throw new ArchiveException($e);
        }
    }
}

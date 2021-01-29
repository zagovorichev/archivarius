<?php

declare(strict_types=1);

namespace App\Contract\Repository;

use App\Contract\Entity\ArchiveRecordInterface;
use Symfony\Component\HttpFoundation\File\UploadedFile;

interface ArchiveRecordRepositoryInterface
{
    public function save(ArchiveRecordInterface $archiveRecord): void;

    public function exists(string $id): bool;

    public function delete(string $id): void;

    public function get(string $id): ArchiveRecordInterface;

    /**
     * Returns all documents from the archive
     * @return array of string with identifiers
     */
    public function getAllId(): array;

    /**
     * @param ArchiveRecordInterface $archiveRecord
     * @param UploadedFile $uploadedFile
     * @return array
     */
    public function addAttachment(ArchiveRecordInterface $archiveRecord, UploadedFile $uploadedFile): array;

    /**
     * @param ArchiveRecordInterface $archiveRecord
     * @return array
     */
    public function getAttachments(ArchiveRecordInterface $archiveRecord): array;

    /**
     * @param ArchiveRecordInterface $archiveRecord
     * @param string $path
     */
    public function deleteAttachment(ArchiveRecordInterface $archiveRecord, string $path): void;
}

<?php

declare(strict_types=1);

namespace App\Contract;

use App\Contract\Entity\ArchiveRecordInterface;

interface ArchiveStorageInterface
{
    public function getArchiveRecord(string $id): ?ArchiveRecordInterface;

    /**
     * @param ArchiveRecordInterface $archiveRecord
     * @return void as parameter provided AR will be changed
     */
    public function saveArchiveRecord(ArchiveRecordInterface $archiveRecord): void;

    public function deleteArchiveRecord(ArchiveRecordInterface $archiveRecord): void;
}

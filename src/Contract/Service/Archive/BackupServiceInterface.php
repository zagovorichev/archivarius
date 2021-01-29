<?php

declare(strict_types=1);

namespace App\Contract\Service\Archive;

use App\Exception\BackupException;

interface BackupServiceInterface
{
    /**
     * Create new backup file
     * @param array $archiveIds
     * @return string
     * @throws BackupException
     */
    public function create(array $archiveIds): string;

    /**
     * delete backup file
     * @param string $path
     */
    public function remove(string $path): void;
}

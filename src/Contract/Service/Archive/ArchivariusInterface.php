<?php

declare(strict_types=1);

namespace App\Contract\Service\Archive;

/**
 * Searching in the archive
 * Interface ArchivariusInterface
 * @package App\Contract\Service\Archive
 */
interface ArchivariusInterface
{
    public function search(
        array $tags = [],
        string $query = '',
        int $limit = 0,
        int $offset = 0
    ): array;

    public function count(
        array $tags = [],
        string $query = '',
    ): int;

    public function sumFloatVal(array $tags = [], string $query = ''): float;
}

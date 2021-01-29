<?php

declare(strict_types=1);

namespace App\Service\Archive\Archivarius;

use App\Contract\Entity\ArchiveRecordInterface;
use App\Contract\Repository\ArchiveRecordRepositoryInterface;
use App\Contract\Service\Archive\ArchivariusInterface;

class LazyArchivarius implements ArchivariusInterface
{
    public function __construct(private ArchiveRecordRepositoryInterface $archiveRepository) { }

    public function search(
        array $tags = [],
        string $query = '',
        int $limit = 0,
        int $offset = 0
    ): array {
        $found = [];
        $identifiers = $this->archiveRepository->getAllId();

        if ($offset || $limit) {
            $identifiers = array_slice($identifiers, $offset, $limit ?? null);
        }

        foreach ($identifiers as $identifier) {
            $activeRecord = $this->archiveRepository->get($identifier);
            if (count($tags) && !$this->hasOneOfTags($activeRecord, $tags)) {
                continue;
            }
            if (!empty($query) && !$this->hasSubstring($activeRecord, $query)) {
                continue;
            }
            $found[] = $activeRecord;
        }
        return $found;
    }

    private function hasSubstring(ArchiveRecordInterface $archiveRecord, string $query): bool
    {
        return empty($query) || mb_stripos($archiveRecord->getTitle(), $query) !== false
            || mb_stripos($archiveRecord->getDescription(), $query) !== false;
    }

    private function hasOneOfTags(ArchiveRecordInterface $archiveRecord, array $tags): bool
    {
        $intersect = array_intersect($archiveRecord->getTags(), $tags);
        return !count($tags) || (count($tags) && count($intersect));
    }

    public function count(array $tags = [], string $query = ''): int
    {
        return count($this->search($tags, $query));
    }

    public function sumFloatVal(array $tags = [], string $query = ''): float
    {
        $floatSum = 0;
        array_map(static function (ArchiveRecordInterface $v) use (&$floatSum) {
            $floatSum += $v->getFloatVal();
        }, $this->search($tags, $query));
        return $floatSum;
    }
}

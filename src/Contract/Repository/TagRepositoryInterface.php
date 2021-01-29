<?php

declare(strict_types=1);

namespace App\Contract\Repository;

use App\Entity\Tag;

interface TagRepositoryInterface
{
    public function search(): array;

    public function add(Tag $tag): void;

    public function remove(Tag $tag): void;

    public function get(string $title): Tag;
}

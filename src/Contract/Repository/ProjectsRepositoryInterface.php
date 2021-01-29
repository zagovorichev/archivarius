<?php

declare(strict_types=1);

namespace App\Contract\Repository;

use App\Contract\Entity\ProjectInterface;

interface ProjectsRepositoryInterface
{
    /**
     * @return array of ProjectInterface
     */
    public function getAllProjects(): array;

    public function getProject(string $id): ProjectInterface;

    public function exists(string $id): bool;

    public function delete(string $id): void;

    public function save(ProjectInterface $project): void;
}

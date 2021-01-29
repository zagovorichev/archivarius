<?php

declare(strict_types=1);

namespace App\Contract\Entity;

interface SettingsInterface
{
    public function isProjects(): bool;

    public function isUsers(): bool;

    public function setProjects(bool $state): void;

    public function setUsers(bool $state): void;
}

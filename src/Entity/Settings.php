<?php

declare(strict_types=1);

namespace App\Entity;

use App\Contract\Entity\SettingsInterface;

class Settings implements SettingsInterface
{

    public function __construct(
        private bool $projects = false,
        private bool $users = false,
    )
    {
    }

    public function isProjects(): bool
    {
        return $this->projects;
    }

    public function isUsers(): bool
    {
        return $this->users;
    }

    public function setProjects(bool $state): void
    {
        $this->projects = $state;
    }

    public function setUsers(bool $state): void
    {
        $this->users = $state;
    }
}

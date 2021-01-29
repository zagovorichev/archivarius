<?php

declare(strict_types=1);

namespace App\Contract\Repository;

use App\Contract\Entity\SettingsInterface;

interface SettingsRepositoryInterface
{
    public function save(SettingsInterface $settings): void;

    public function get(): SettingsInterface;
}

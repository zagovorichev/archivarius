<?php

declare(strict_types=1);

namespace App\Contract\Entity;

interface UserInterface
{
    public function getName(): string;

    public function setName(): void;

    public function getLogin(): string;

    public function setLogin(): void;

    public function setPassword(): string;
}

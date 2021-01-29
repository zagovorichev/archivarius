<?php

declare(strict_types=1);

namespace App\Contract\Entity;

use JsonSerializable;

interface TagInterface extends JsonSerializable
{
    public function setTitle(string $title): void;

    public function getTitle(): string;

    public function setColor(string $color): void;

    public function getColor(): string;
}

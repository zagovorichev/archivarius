<?php

declare(strict_types=1);

namespace App\Contract\Entity;

use App\Exception\ProjectException;
use JsonSerializable;

interface ProjectInterface extends JsonSerializable
{
    public function getId(): string;

    public function setId(string $id): void;

    public function getTitle(): string;

    public function setTitle(string $title): void;

    public function getIsDefault(): bool;

    public function setIsDefault(bool $val): void;

    public function getColor(): string;

    public function setColor(string $color): void;

    public function getType(): string;

    /**
     * @param string $type
     * @throws ProjectException
     */
    public function setType(string $type): void;

    public function getTags(): array;

    public function setTags(array $tags): void;
}

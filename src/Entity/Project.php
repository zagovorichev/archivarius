<?php

declare(strict_types=1);

namespace App\Entity;

use App\Contract\Entity\ProjectInterface;
use App\Exception\ProjectException;
use JetBrains\PhpStorm\ArrayShape;

class Project implements ProjectInterface
{
    private const TYPE_DOC = 'documents';
    private const TYPE_FINANCE = 'finance';

    private const TYPES = [self::TYPE_DOC, self::TYPE_FINANCE];

    public function __construct(
        private string $id = '',
        private string $title = '',
        private bool $default = false,
        private string $type = self::TYPE_FINANCE,
        private string $color = '#ffffff',
        private array $tags = [],
    )
    {
    }

    /**
     * @return string
     */
    public function getId(): string
    {
        return $this->id;
    }

    /**
     * @param string $id
     */
    public function setId(string $id): void
    {
        $this->id = $id;
    }

    /**
     * @return string
     */
    public function getTitle(): string
    {
        return $this->title;
    }

    /**
     * @param string $title
     */
    public function setTitle(string $title): void
    {
        $this->title = $title;
    }

    public function getIsDefault(): bool
    {
        return $this->default;
    }

    public function setIsDefault(bool $val): void
    {
        $this->default = $val;
    }

    public function getType(): string
    {
        return $this->type;
    }

    /**
     * @param string $type
     * @throws ProjectException
     */
    public function setType(string $type): void
    {
        if (!in_array($type, self::TYPES)) {
            throw new ProjectException(sprintf('Wrong project type, please use: %s', implode(', ', self::TYPES)));
        }
        $this->type = $type;
    }

    public function getColor(): string
    {
        return $this->color;
    }

    public function setColor(string $color): void
    {
        $this->color = $color;
    }

    public function getTags(): array
    {
        return $this->tags;
    }

    public function setTags(array $tags): void
    {
        $this->tags = $tags;
    }

    #[ArrayShape([
        'id' => "string",
        'title' => "string",
        'color' => "string",
        'type' => "string",
        'tags' => "array",
        'primary' => "int"
    ])] public function jsonSerialize(): array
    {
        return [
            'id' => $this->getId(),
            'title' => $this->getTitle(),
            'color' => $this->getColor(),
            'type' => $this->getType(),
            'tags' => $this->getTags(),
            'primary' => $this->getIsDefault() ? 1 : 0,
        ];
    }
}

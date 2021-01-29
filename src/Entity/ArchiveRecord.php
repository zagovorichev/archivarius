<?php

declare(strict_types=1);

namespace App\Entity;

use App\Contract\Entity\ArchiveRecordInterface;
use DateTime;
use JetBrains\PhpStorm\ArrayShape;

class ArchiveRecord implements ArchiveRecordInterface
{
    private DateTime $createdAt;
    private DateTime $updatedAt;

    public function __construct(
        private string $id = '',
        private string $title = '',
        private array $tags = [],
        private string $description = '',
        private array $documents = [],
        private int|float $floatVal = 0,
        private string $createdBy = '',
    )
    {
        $this->createdAt = new DateTime();
        $this->updatedAt = new DateTime();
    }

    public function getId(): ?string
    {
        return $this->id;
    }

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

    public function getTags(): array
    {
        return $this->tags;
    }

    public function setTags(array $tags): void
    {
        $this->tags = $tags;
    }

    public function getDescription(): string
    {
        return $this->description;
    }

    public function setDescription(string $desc): void
    {
        $this->description = $desc;
    }

    public function getDocuments(): array
    {
        return $this->documents;
    }

    public function setDocuments(array $docs): void
    {
        $this->documents = $docs;
    }

    public function getFloatVal(): float
    {
        return $this->floatVal;
    }

    public function setFloatVal(float $val): void
    {
        $this->floatVal = $val;
    }

    /**
     * @return DateTime
     */
    public function getCreatedAt(): DateTime
    {
        return $this->createdAt;
    }

    /**
     * @return DateTime
     */
    public function getUpdatedAt(): DateTime
    {
        return $this->updatedAt;
    }

    /**
     * @return string
     */
    public function getCreatedBy(): string
    {
        return $this->createdBy;
    }

    /**
     * @param string $createdBy
     */
    public function setCreatedBy(string $createdBy): void
    {
        $this->createdBy = $createdBy;
    }

    /**
     * @param DateTime $createdAt
     */
    public function setCreatedAt(DateTime $createdAt): void
    {
        $this->createdAt = $createdAt;
    }

    /**
     * @param DateTime $updatedAt
     */
    public function setUpdatedAt(DateTime $updatedAt): void
    {
        $this->updatedAt = $updatedAt;
    }

    #[ArrayShape([
        'id' => "null|string",
        'title' => "string",
        'documents' => "array",
        'description' => "string",
        'tags' => "array",
        'floatVal' => "float",
        'createdBy' => "string",
        'createdAt' => "string",
        'updatedAt' => "string"
    ])] public function jsonSerialize(): array
    {
        return [
            'id'    => $this->getId(),
            'title' => $this->getTitle(),
            'documents' => $this->getDocuments(),
            'description' => $this->getDescription(),
            'tags' => $this->getTags(),
            'floatVal' => $this->getFloatVal(),
            'createdBy' => $this->getCreatedBy(),
            'createdAt' => $this->getCreatedAt()->format('Y.m.d H:i'),
            'updatedAt' => $this->getUpdatedAt()->format('Y.m.d H:i'),
        ];
    }
}

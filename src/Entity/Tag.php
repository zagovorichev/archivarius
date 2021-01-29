<?php

declare(strict_types=1);

namespace App\Entity;

use App\Contract\Entity\TagInterface;
use JetBrains\PhpStorm\ArrayShape;

class Tag implements TagInterface
{
    public function __construct(
        private string $title = '',
        private string $color = '',
    ) {}

    /**
     * @param string $title
     */
    public function setTitle(string $title): void
    {
        $this->title = $title;
    }

    /**
     * @return string
     */
    public function getTitle(): string
    {
        return $this->title;
    }

    /**
     * @param string $color
     */
    public function setColor(string $color): void
    {
        $this->color = $color;
    }

    /**
     * @return string
     */
    public function getColor(): string
    {
        return $this->color;
    }

    #[ArrayShape(['title' => "string", 'color' => "string"])]
    public function jsonSerialize(): array
    {
        return [
            'title' => $this->getTitle(),
            'color' => $this->getColor(),
        ];
    }
}

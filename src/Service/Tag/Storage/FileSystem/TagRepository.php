<?php

declare(strict_types=1);

namespace App\Service\Tag\Storage\FileSystem;

use App\Contract\Repository\TagRepositoryInterface;
use App\Entity\Tag;
use App\Exception\TagException;
use DOMDocument;
use DOMElement;
use League\Flysystem\Filesystem;
use League\Flysystem\FilesystemException;
use Symfony\Component\Filesystem\Exception\FileNotFoundException;

class TagRepository implements TagRepositoryInterface
{
    private const FILE_TAGS = 'tags.xml';

    public function __construct(private Filesystem $settingsFilesystem) {}

    /**
     * List of tags
     * @return array
     * @throws TagException
     */
    public function search(): array
    {
        $tags = [];

        /** @var DOMElement $domTagEl */
        foreach ($this->getDom()->getElementsByTagName('tag') as $domTagEl) {
            $tag = new Tag();
            /** @var DOMElement $childNode */
            foreach ($domTagEl->childNodes as $childNode) {
                switch ($childNode->nodeName) {
                    case 'title':
                        $tag->setTitle($childNode->nodeValue);
                        break;
                    case 'color':
                        $tag->setColor($childNode->nodeValue);
                        break;
                }
            }
            if ($tag->getTitle()) { // skip tags without title
                $tags[] = $tag;
            }
        }

        return $tags;
    }

    /**
     * @param Tag $tag
     * @return void
     * @throws TagException
     */
    public function add(Tag $tag): void
    {
        $dom = $this->getDom();
        $tagsEl = $dom->getElementsByTagName('tags')->item(0);

        if (!is_a($tagsEl, DOMElement::class)) {
            $tagsEl = $dom->createElement('tags');
            $dom->appendChild($tagsEl);
        }

        $newTagEl = $dom->createElement('tag');
        $tagsEl->appendChild($newTagEl);
        $titleEl = $dom->createElement('title', $tag->getTitle());
        $colorEl = $dom->createElement('color', $tag->getColor());
        $newTagEl->appendChild($titleEl);
        $newTagEl->appendChild($colorEl);

        $this->saveDomFile($dom);
    }

    /**
     * @param Tag $tag
     * @throws TagException
     */
    public function remove(Tag $tag): void
    {
        $dom = $this->getDom();
        /** @var DOMElement $tagNode */
        foreach ($dom->getElementsByTagName('tag') as $tagNode) {
            /** @var DOMElement $titleNode */
            $titleNode = $tagNode->getElementsByTagName('title')->item(0);
            if ($titleNode->nodeValue === $tag->getTitle()) {
                $tagNode->remove();
            }
        }
        $this->saveDomFile($dom);
    }

    /**
     * @param string $title
     * @return Tag
     * @throws TagException
     */
    public function get(string $title): Tag
    {
        $tags = $this->search();

        /** @var Tag $tag */
        foreach ($tags as $tag) {
            if ($tag->getTitle() === $title) {
                return $tag;
            }
        }

        throw new TagException(sprintf('Tag "%s" not found', $title));
    }

    /**
     * @return DOMDocument
     * @throws TagException
     */
    private function getDom(): DOMDocument
    {
        try {
            $fileExists = $this->settingsFilesystem->fileExists(self::FILE_TAGS);
        } catch (FilesystemException $e) {
            throw new TagException($e);
        }
        if (!$fileExists) {
            return $this->createTagsFile();
        }

        $dom = new DOMDocument('1.0', 'utf-8');
        //turning off some errors
        libxml_use_internal_errors(true);

        try {
            $dom->loadXML($this->settingsFilesystem->read(self::FILE_TAGS));
            return $dom;
        } catch (FileNotFoundException | FilesystemException $e) {
            throw new TagException('Tag storage not found');
        }
    }

    /**
     * @throws TagException
     */
    private function createTagsFile(): DOMDocument
    {
        $dom = new DOMDocument('1.0', 'utf-8');
        //turning off some errors
        libxml_use_internal_errors(true);

        $tagsEl = $dom->createElement('tags');
        $dom->appendChild($tagsEl);

        try {
            $this->saveDomFile($dom);
        } catch (FilesystemException $e) {
            throw new TagException($e);
        }
        return $dom;
    }

    /**
     * @param DOMDocument $dom
     * @throws TagException
     */
    private function saveDomFile(DOMDocument $dom): void
    {
        try {
            $this->settingsFilesystem->write(self::FILE_TAGS, $dom->saveXML());
        } catch (FilesystemException $e) {
            throw new TagException($e);
        }
    }
}

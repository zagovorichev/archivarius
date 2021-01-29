<?php

declare(strict_types=1);

namespace App\Service\Project\Storage\Filesystem;

use App\Contract\Entity\ProjectInterface;
use App\Contract\Repository\ProjectsRepositoryInterface;
use App\Contract\Service\Helper\StringServiceInterface;
use App\Entity\Project;
use App\Exception\ProjectException;
use DOMDocument;
use DOMElement;
use League\Flysystem\FileNotFoundException;
use League\Flysystem\FilesystemInterface;

class ProjectsRepository implements ProjectsRepositoryInterface
{
    private const FILE_NAME = 'projects.xml';

    public function __construct(
        private FilesystemInterface $settingsFilesystem,
        private StringServiceInterface $stringService,
    ) {}

    /**
     * @return array
     * @throws ProjectException
     */
    public function getAllProjects(): array
    {
        $projects = [];
        $projectNodes = $this->getDom()->getElementsByTagName('project');
        foreach ($projectNodes as $node) {
            $projects[] = $this->nodeToProject($node);
        }
        return $projects;
    }

    /**
     * @param string $id
     * @throws ProjectException
     */
    public function delete(string $id): void
    {
        $dom = $this->getDom();
        $el = $dom->getElementById($id);
        if ($el) {
            $el->remove();
            $this->saveDomFile($dom);
        }
    }

    /**
     * @param string $id
     * @return ProjectInterface
     * @throws ProjectException
     */
    public function getProject(string $id): ProjectInterface
    {
        $projectEl = $this->getDom()->getElementById($id);

        if (!$projectEl) {
            throw new ProjectException('Project not found');
        }

        return $this->nodeToProject($projectEl);
    }

    private function getNodeValue(DOMElement $el, string $tagName): string
    {
        $return = '';
        $elNodes = $el->getElementsByTagName($tagName);
        if ($elNodes->count()) {
            $value = $elNodes->item(0)->nodeValue;
            if (!empty($value)) {
                $return = $value;
            }
        }
        return $return;
    }

    private function getNodeValues(DOMElement $el, string $tagName): array
    {
        $return = [];
        $elNodes = $el->getElementsByTagName($tagName);
        if ($elNodes->count()) {
            foreach ($elNodes as $elNode) {
                $return[] = $elNode->nodeValue;
            }
        }
        return $return;
    }

    /**
     * @param DOMElement $projectEl
     * @return ProjectInterface
     * @throws ProjectException
     */
    private function nodeToProject(DOMElement $projectEl): ProjectInterface
    {
        $project = new Project();
        $project->setId($projectEl->getAttribute('xml:id'));
        $project->setTitle($this->getNodeValue($projectEl, 'title'));
        $project->setType($this->getNodeValue($projectEl, 'type'));
        $project->setColor($this->getNodeValue($projectEl, 'color'));
        $project->setIsDefault($this->getNodeValue($projectEl, 'default') === '1');
        $project->setTags($this->getNodeValues($projectEl, 'tag'));
        return $project;
    }

    /**
     * @param string $title
     * @param string $color
     * @param string $type
     * @param string $primary
     * @return ProjectInterface
     * @throws ProjectException
     */
    public function create(
        string $title,
        string $color,
        string $type,
        string $primary,
    ): ProjectInterface
    {
        $project = new Project();
        $project->setId($this->uuid());
        $project->setTitle($title);
        $project->setColor($color);
        $project->setType($type);
        $project->setIsDefault($primary === '1');

        $this->save($project);
        return $project;
    }

    private function uuid(): string
    {
        do {
            $id = $this->stringService->uuid();
        } while ($this->exists($id));

        return $id;
    }

    public function exists(string $id): bool
    {
        try {
            $this->getProject($id);
        } catch (ProjectException $e) {
            return false;
        }
        return true;
    }

    /**
     * @param ProjectInterface $project
     * @throws ProjectException
     */
    public function save(ProjectInterface $project): void
    {
        if ($this->exists($project->getId())) {
            $this->delete($project->getId());
        }
        $this->addToDom($project);
    }

    /**
     * @param ProjectInterface $project
     * @throws ProjectException
     */
    private function addToDom(ProjectInterface $project): void
    {
        $dom = $this->getDom();
        $projectsEl = $dom->getElementsByTagName('projects')->item(0);
        if ($projectsEl) {
            $projectsEl->appendChild($this->transformToNode($dom, $project));
            $this->saveDomFile($dom);
        }
    }

    /**
     * @param DOMDocument $dom
     * @param ProjectInterface $project
     * @return bool|DOMElement
     */
    private function transformToNode(DOMDocument $dom, ProjectInterface $project): bool|DOMElement
    {
        $newEl = $dom->createElement('project');
        $attr = $dom->createAttribute('xml:id');
        $newEl->appendChild($attr);

        $tNode = $dom->createTextNode($project->getId());
        $attr->appendChild($tNode);
        $newEl->setIdAttribute('xml:id', true); // quick search

        $titleEl = $dom->createElement('title', $project->getTitle());
        $newEl->appendChild($titleEl);

        $defaultEl = $dom->createElement('default', $project->getIsDefault() ? '1' : '0');
        $newEl->appendChild($defaultEl);

        $typeEl = $dom->createElement('type', $project->getType());
        $newEl->appendChild($typeEl);

        $colorEl = $dom->createElement('color', $project->getColor());
        $newEl->appendChild($colorEl);

        $tagsEl = $dom->createElement('tags');
        $newEl->appendChild($tagsEl);
        foreach ($project->getTags() as $tag) {
            $tagEl = $dom->createElement('tag', $tag);
            $tagsEl->appendChild($tagEl);
        }

        return $newEl;
    }

    /**
     * @return DOMDocument
     * @throws ProjectException
     */
    private function getDom(): DOMDocument
    {
        if (!$this->settingsFilesystem->has(self::FILE_NAME)) {
            return $this->createFile();
        }

        $dom = new DOMDocument('1.0', 'utf-8');
        //turning off some errors
        libxml_use_internal_errors(true);

        try {
            $dom->loadXML($this->settingsFilesystem->read(self::FILE_NAME));
            return $dom;
        } catch (FileNotFoundException $e) {
            throw new ProjectException('Storage not found');
        }
    }

    private function createFile(): DOMDocument
    {
        $dom = new DOMDocument('1.0', 'utf-8');
        //turning off some errors
        libxml_use_internal_errors(true);

        $rootEl = $dom->createElement('projects');
        $dom->appendChild($rootEl);

        $this->saveDomFile($dom);
        return $dom;
    }

    private function saveDomFile(DOMDocument $dom): void
    {
        $this->settingsFilesystem->put(self::FILE_NAME, $dom->saveXML());
    }
}

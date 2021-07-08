<?php

declare(strict_types=1);

namespace App\Service\Settings\Storage\Filesystem;

use App\Contract\Entity\SettingsInterface;
use App\Contract\Repository\SettingsRepositoryInterface;
use App\Entity\Settings;
use App\Exception\SettingsException;
use DOMDocument;
use League\Flysystem\Filesystem;
use League\Flysystem\FilesystemException;

class SettingsRepository implements SettingsRepositoryInterface
{
    private const FILE_NAME = 'config.xml';

    public function __construct(private Filesystem $settingsFilesystem) {}

    /**
     * @param SettingsInterface $settings
     * @throws SettingsException
     */
    public function save(SettingsInterface $settings): void
    {
        $dom = $this->getDom();
        $configEl = $dom->getElementsByTagName('configuration')->item(0);

        if (!$configEl) {
            throw new SettingsException('Broken config file');
        }

        $prjEl = $dom->getElementsByTagName('projects')->item(0);
        $prjVal = $settings->isProjects() ? 'true' : '';
        if (!$prjEl) {
            $prjEl = $dom->createElement('projects', $prjVal);
            $configEl->appendChild($prjEl);
        } else {
            $prjEl->nodeValue = $prjVal;
        }

        $usrEl = $dom->getElementsByTagName('users')->item(0);
        $usrVal = $settings->isUsers() ? 'true' : '';
        if (!$usrEl) {
            $usrEl = $dom->createElement('users', $usrVal);
            $configEl->appendChild($usrEl);
        } else {
            $usrEl->nodeValue = $usrVal;
        }
        $this->saveDomFile($dom);
    }

    /**
     * @return SettingsInterface
     * @throws SettingsException
     */
    public function get(): SettingsInterface
    {
        $settings = new Settings();

        $settings->setProjects($this->getProjectsValue());
        $settings->setUsers($this->getUsersValue());

        return $settings;
    }

    /**
     * @return bool
     * @throws SettingsException
     */
    private function getProjectsValue(): bool
    {
        $dom = $this->getDom();
        $val = $dom->getElementsByTagName('projects')->item(0);
        return $val && $val->nodeValue === 'true';
    }

    /**
     * @return bool
     * @throws SettingsException
     */
    private function getUsersValue(): bool
    {
        $dom = $this->getDom();
        $val = $dom->getElementsByTagName('users')->item(0);
        return $val && $val->nodeValue === 'true';
    }

    /**
     * @return DOMDocument
     * @throws SettingsException
     */
    private function getDom(): DOMDocument
    {
        try {
            $fileExists = $this->settingsFilesystem->fileExists(self::FILE_NAME);
        } catch (FilesystemException $e) {
            throw new SettingsException($e);
        }

        if (!$fileExists) {
            return $this->createFile();
        }

        $dom = new DOMDocument('1.0', 'utf-8');
        //turning off some errors
        libxml_use_internal_errors(true);

        try {
            $dom->loadXML($this->settingsFilesystem->read(self::FILE_NAME));
            return $dom;
        } catch (FilesystemException) {
            throw new SettingsException('Settings storage not found');
        }
    }

    /**
     * @throws SettingsException
     */
    private function createFile(): DOMDocument
    {
        $dom = new DOMDocument('1.0', 'utf-8');
        //turning off some errors
        libxml_use_internal_errors(true);

        $configEl = $dom->createElement('configuration');
        $dom->appendChild($configEl);

        $this->saveDomFile($dom);
        return $dom;
    }

    /**
     * @throws SettingsException
     */
    private function saveDomFile(DOMDocument $dom): void
    {
        try {
            $this->settingsFilesystem->write(self::FILE_NAME, $dom->saveXML());
        } catch (FilesystemException $e) {
            throw new SettingsException($e);
        }
    }
}

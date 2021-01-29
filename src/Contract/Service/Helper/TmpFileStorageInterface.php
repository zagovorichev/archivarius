<?php

declare(strict_types=1);

namespace App\Contract\Service\Helper;

interface TmpFileStorageInterface
{
    /**
     * Creates new tmp file
     */
    public function create(): string;

    /**
     * Delete tmp file
     * @param string $path
     */
    public function remove(string $path): void;

    /**
     * @param string $path
     * @return resource
     */
    public function openStream(string $path);

    /**
     * @param string $tmpPath
     * @param $stream
     */
    public function writeStream(string $tmpPath, $stream): void;

    /**
     * @param $fStream
     * @return bool
     */
    public function isOpenStream($fStream): bool;

    /**
     * @param $fStream
     */
    public function closeStream($fStream): void;
}

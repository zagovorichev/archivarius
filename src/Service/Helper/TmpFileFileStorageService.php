<?php

declare(strict_types=1);

namespace App\Service\Helper;

use App\Contract\Service\Helper\TmpFileStorageInterface;
use JetBrains\PhpStorm\Pure;

class TmpFileFileStorageService implements TmpFileStorageInterface
{
    public function create(): string
    {
        return tempnam(sys_get_temp_dir(), 'Archivarius');
    }

    public function remove(string $path): void
    {
        unlink($path);
    }

    /**
     * @param string $path
     * @return resource
     */
    public function openStream(string $path)
    {
        return fopen($path, 'rb');
    }

    public function writeStream(string $tmpPath, $stream): void
    {
        file_put_contents($tmpPath, $stream);
    }

    #[Pure] public function isOpenStream($fStream): bool
    {
        return is_resource($fStream);
    }

    public function closeStream($fStream): void
    {
        if ($this->isOpenStream($fStream)) {
            fclose($fStream);
        }
    }
}

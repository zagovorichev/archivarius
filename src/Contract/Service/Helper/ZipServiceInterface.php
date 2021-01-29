<?php

declare(strict_types=1);

namespace App\Contract\Service\Helper;

use App\Exception\ZipperException;
use ZipArchive;

interface ZipServiceInterface
{
    /**
     * @param string $path
     * @return ZipArchive
     * @throws ZipperException
     */
    public function initialize(string $path): ZipArchive;
}

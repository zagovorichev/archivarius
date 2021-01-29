<?php

declare(strict_types=1);

namespace App\Service\Helper;

use App\Contract\Service\Helper\ZipServiceInterface;
use App\Exception\ZipperException;
use ZipArchive;

class ZipperService implements ZipServiceInterface
{
    /**
     * @param string $path
     * @return ZipArchive
     * @throws ZipperException
     */
    public function initialize(string $path): ZipArchive
    {
        $zip = new ZipArchive();
        if ($zip->open($path, ZipArchive::CREATE) === TRUE)
        {
            return $zip;
        }

        throw new ZipperException('Failed to initialize file as an archive');
    }

}

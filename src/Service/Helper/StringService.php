<?php

declare(strict_types=1);

namespace App\Service\Helper;

use App\Contract\Service\Helper\StringServiceInterface;
use Symfony\Component\Uid\Uuid;

class StringService implements StringServiceInterface
{
    public function uuid(): string
    {
        return Uuid::v4()->toBase32();
    }
}

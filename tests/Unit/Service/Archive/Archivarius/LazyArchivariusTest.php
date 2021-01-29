<?php

declare(strict_types=1);

namespace App\Tests\Unit\Service\Archive\Archivarius;

use App\Contract\Entity\ArchiveRecordInterface;
use App\Contract\Repository\ArchiveRecordRepositoryInterface;
use App\Service\Archive\Archivarius\LazyArchivarius;
use PHPUnit\Framework\MockObject\MockObject;
use PHPUnit\Framework\TestCase;

class LazyArchivariusTest extends TestCase
{
    private LazyArchivarius $archivarius;
    private ArchiveRecordRepositoryInterface|MockObject $repository;

    protected function setUp(): void
    {
        parent::setUp();

        $this->repository = $this->createMock(ArchiveRecordRepositoryInterface::class);
        $this->archivarius = new LazyArchivarius($this->repository);
    }

    public function testSearchInTags(): void
    {
        // same tags (included)
        $ar1 = $this->createMock(ArchiveRecordInterface::class);
        $ar1->method('getTags')->willReturn(['t1', 't2']);

        $ar2 = $this->createMock(ArchiveRecordInterface::class);
        $ar2->method('getTags')->willReturn(['t1', 't2', 't3']);

        $ar5 = $this->createMock(ArchiveRecordInterface::class);
        $ar5->method('getTags')->willReturn(['t2']);

        // another tags (excluded)
        $ar3 = $this->createMock(ArchiveRecordInterface::class);
        $ar3->method('getTags')->willReturn(['t3']);

        $ar4 = $this->createMock(ArchiveRecordInterface::class);
        $ar4->method('getTags')->willReturn(['t3', 't4']);

        $this->repository->method('getAllId')->willReturn(['1','2','3','4','5']);
        $this->repository->method('get')->willReturnCallback(static function ($id) use ($ar1, $ar2, $ar3, $ar4, $ar5) {
            $var = 'ar' . $id;
            return $$var;
        });

        $arr = $this->archivarius->search(tags: ['t1', 't2']);

        self::assertSame([$ar1, $ar2, $ar5], $arr);
    }

    public function testSearchQuery(): void
    {
        $ar1 = $this->createMock(ArchiveRecordInterface::class);
        $ar1->method('getTitle')->willReturn('archive title');

        $ar2 = $this->createMock(ArchiveRecordInterface::class);
        $ar2->method('getTitle')->willReturn('anything with title word');

        $ar5 = $this->createMock(ArchiveRecordInterface::class);
        $ar5->method('getTitle')->willReturn('Title');

        // (excluded)
        $ar3 = $this->createMock(ArchiveRecordInterface::class);
        $ar3->method('getTitle')->willReturn('');

        $ar4 = $this->createMock(ArchiveRecordInterface::class);
        $ar4->method('getTitle')->willReturn('tit');

        $this->repository->method('getAllId')->willReturn(['1','2','3','4','5']);
        $this->repository->method('get')->willReturnCallback(static function ($id) use ($ar1, $ar2, $ar3, $ar4, $ar5) {
            $var = 'ar' . $id;
            return $$var;
        });

        $arr = $this->archivarius->search(query: 'title');

        self::assertSame([$ar1, $ar2, $ar5], $arr);
    }

    public function testSearchWithQueryTagsAndLimits(): void
    {
        $ar1 = $this->createMock(ArchiveRecordInterface::class);
        $ar1->method('getTitle')->willReturn('archive title');
        $ar1->method('getTags')->willReturn(['t1', 't2']);

        $ar2 = $this->createMock(ArchiveRecordInterface::class);
        $ar2->method('getTitle')->willReturn('anything with title word');
        $ar2->method('getTags')->willReturn(['t1', 't2', 't3']);

        $ar6 = $this->createMock(ArchiveRecordInterface::class);
        $ar6->method('getTitle')->willReturn('anything with title word');
        $ar6->method('getTags')->willReturn(['t1', 't2', 't3']);

        $ar5 = $this->createMock(ArchiveRecordInterface::class);
        $ar5->method('getTitle')->willReturn('title');
        $ar5->method('getTags')->willReturn(['t2']);

        // another tags (excluded)
        $ar3 = $this->createMock(ArchiveRecordInterface::class);
        $ar3->method('getTitle')->willReturn('');
        $ar3->method('getTags')->willReturn(['t3']);

        $ar4 = $this->createMock(ArchiveRecordInterface::class);
        $ar4->method('getTitle')->willReturn('tit');
        $ar4->method('getTags')->willReturn(['t3', 't4']);

        $this->repository->method('getAllId')->willReturn(['1','2','3','4','5', '6']);
        $this->repository->method('get')->willReturnCallback(
            static function ($id) use ($ar1, $ar2, $ar3, $ar4, $ar5, $ar6) {
            $var = 'ar' . $id;
            return $$var;
            }
        );

        $arr = $this->archivarius->search(tags: ['t1'], query: 'title', limit: 1, offset: 1);
        self::assertSame([$ar2], $arr);
    }

    public function testSumFloatVal(): void
    {
        self::assertSame(0.0, $this->archivarius->sumFloatVal());

        $ar1 = $this->createMock(ArchiveRecordInterface::class);
        $ar1->method('getFloatVal')->willReturn(7.12);

        $ar2 = $this->createMock(ArchiveRecordInterface::class);
        $ar2->method('getFloatVal')->willReturn(5.02);

        $this->repository->method('getAllId')->willReturn(['1','2']);
        $this->repository->method('get')->willReturnCallback(
            static function ($id) use ($ar1, $ar2) {
                $var = 'ar' . $id;
                return $$var;
            }
        );

        self::assertSame(12.14, $this->archivarius->sumFloatVal());
    }

    public function testCount(): void
    {
        self::assertSame(0, $this->archivarius->count());
    }

    public function testSearchRuQuery(): void
    {
        $ar1 = $this->createMock(ArchiveRecordInterface::class);
        $ar1->method('getTitle')->willReturn('c ИскоМым словом');

        $ar2 = $this->createMock(ArchiveRecordInterface::class);
        $ar2->method('getTitle')->willReturn('Искомым здесь');

        $ar5 = $this->createMock(ArchiveRecordInterface::class);
        $ar5->method('getTitle')->willReturn('в концеИскоМым');

        // (excluded)
        $ar3 = $this->createMock(ArchiveRecordInterface::class);
        $ar3->method('getTitle')->willReturn('');

        $ar4 = $this->createMock(ArchiveRecordInterface::class);
        $ar4->method('getTitle')->willReturn('искомым маленькими');

        $this->repository->method('getAllId')->willReturn(['1','2','3','4','5']);
        $this->repository->method('get')->willReturnCallback(static function ($id) use ($ar1, $ar2, $ar3, $ar4, $ar5) {
            $var = 'ar' . $id;
            return $$var;
        });

        $arr = $this->archivarius->search(query: 'искомым');

        self::assertSame([$ar1, $ar2, $ar4, $ar5], $arr);
    }
}

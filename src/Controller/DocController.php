<?php

declare(strict_types=1);

namespace App\Controller;

use App\Contract\Service\Archive\BackupServiceInterface;
use App\Entity\ArchiveRecord;
use App\Exception\ArchiveException;
use App\Exception\BackupException;
use App\Service\Archive\Storage\FileSystem\ArchiveRecordRepository;
use League\Flysystem\FileNotFoundException;
use League\Flysystem\FilesystemInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\HeaderUtils;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\StreamedResponse;
use Symfony\Component\Routing\Annotation\Route;

class DocController extends AbstractController
{
    public function __construct(private ArchiveRecordRepository $archiveRepository) {}

    /**
     * @return JsonResponse
     * @throws ArchiveException
     */
    #[Route('/doc/create', name: 'doc_create')]
    public function create(): JsonResponse
    {
        $archiveRecord = new ArchiveRecord();
        $this->archiveRepository->save($archiveRecord);
        return new JsonResponse($archiveRecord);
    }

    #[Route('/doc/{id}', name: 'delete_doc', methods: ['DELETE'])]
    public function remove(string $id): JsonResponse
    {
        $this->archiveRepository->delete($id);
        return new JsonResponse('');
    }

    #[Route('/doc/{id}', name: 'show_doc', methods: ['GET'])]
    public function show(string $id): JsonResponse
    {
        try {
            $archiveRecord = $this->archiveRepository->get($id);
        } catch (ArchiveException $e) {
            return new JsonResponse(sprintf('Archive not found: %s', $id), 500);
        }

        return new JsonResponse($archiveRecord);
    }

    #[Route('/doc/media', methods: ['PUT'])]
    public function updateMedia(Request $request): JsonResponse
    {
        $id = $request->get('id');
        $path = $request->get('path');
        $title = $request->get('title');

        if (!$title) {
            return new JsonResponse('Title is not defined', 500);
        }

        try {
            $archiveRecord = $this->archiveRepository->get($id);
        } catch (ArchiveException $e) {
            return new JsonResponse(sprintf('Archive not found: %s', $id), 500);
        }
        $docInfo = $this->archiveRepository->getDocInfo($archiveRecord, $path);
        $docInfo['docTitle'] = $title;

        try {
            $docInfo = $this->archiveRepository->updateDocInfo($archiveRecord, $docInfo);
            return new JsonResponse($docInfo);
        } catch (ArchiveException $e) {
            return new JsonResponse(sprintf('Error: %s', $e->getMessage()), 500);
        }
    }

    /**
     * @param string $id
     * @param Request $request
     * @return JsonResponse
     * @throws ArchiveException
     */
    #[Route('/doc/{id}', methods: ['PUT'])]
    public function edit(string $id, Request $request): JsonResponse
    {
        try {
            $archiveRecord = $this->archiveRepository->get($id);
        } catch (ArchiveException $e) {
            return new JsonResponse(sprintf('Archive not found: %s', $id), 500);
        }

        $archiveRecord->setTitle($request->get('title'));
        $archiveRecord->setFloatVal((float)$request->get('floatVal'));
        $archiveRecord->setDescription($request->get('description'));
        $tags = $request->get('tags');
        if (!is_array($tags)) {
            $tags = [];
        }
        $archiveRecord->setTags($tags);
        $this->archiveRepository->save($archiveRecord);
        return new JsonResponse($archiveRecord);
    }

    #[Route('/doc/media', methods: ['POST'])]
    public function media(Request $request): JsonResponse
    {
        $uploadedFile = $request->files->get('file');
        $id = $request->get('id');

        // trying to get existing
        try {
            $archiveRecord = $this->archiveRepository->get($id);
        } catch (ArchiveException $e) {
            return new JsonResponse(sprintf('Document %s does not found: %s', $id, $e->getMessage()), 404);
        }

        try {
            $docInfo = $this->archiveRepository->addAttachment($archiveRecord, $uploadedFile);
        } catch (ArchiveException $e) {
            return new JsonResponse(sprintf('Can not upload attachments: %s', $e->getMessage()));
        }


        return new JsonResponse($docInfo);
    }

    #[Route('/doc/media', methods: ['DELETE'])]
    public function deleteMedia(Request $request): JsonResponse
    {
        $archiveId = $request->get('id');
        $mediaPath = $request->get('path');

        try {
            $archiveRecord = $this->archiveRepository->get($archiveId);
        } catch (ArchiveException $e) {
            return new JsonResponse(sprintf('Document %s does not found: %s', $archiveId, $e->getMessage()), 404);
        }

        try {
            $this->archiveRepository->deleteAttachment($archiveRecord, $mediaPath);
        } catch (ArchiveException $e) {
            return new JsonResponse(sprintf('Attachment of the doc %s does not found: %s', $archiveId, $e->getMessage()), 404);
        }

        return new JsonResponse($archiveRecord);
    }

    #[Route('/doc/get_media', methods: ['POST'])]
    public function getMedia(Request $request): StreamedResponse|JsonResponse
    {
        $archiveId = $request->get('id');
        $mediaPath = $request->get('path');

        try {
            $archiveRecord = $this->archiveRepository->get($archiveId);
        } catch (ArchiveException $e) {
            return new JsonResponse(sprintf('Document %s does not found: %s', $archiveId, $e->getMessage()), 404);
        }

        try {
            $fileStream = $this->archiveRepository->getStream($mediaPath);
            $response = new StreamedResponse(function () use ($fileStream) {
                $outputStream = fopen('php://output', 'wb');
                stream_copy_to_stream($fileStream, $outputStream);
            });

            $docInfo = $this->archiveRepository->getDocInfo($archiveRecord, $mediaPath);
            $filename = $docInfo['docOrigName'] ?? $archiveId;
            $disposition = HeaderUtils::makeDisposition(
                HeaderUtils::DISPOSITION_ATTACHMENT,
                $filename,
            );
            $response->headers->set('Content-Disposition', $disposition);
            $response->headers->set('Content-Type', $this->archiveRepository->getMimeType($mediaPath));

            return $response;
        } catch (ArchiveException $e) {
            return new JsonResponse(sprintf('Attachment of the doc %s does not found: %s', $archiveId, $e->getMessage()), 404);
        }
    }

    #[Route('/doc/archive', methods: ['POST'])]
    public function export(Request $request, BackupServiceInterface $backupService, FilesystemInterface $backupFilesystem): StreamedResponse|JsonResponse
    {
        try {
            $path = $backupService->create($request->get('id'));
            $fileStream = $backupFilesystem->readStream($path);
        } catch (BackupException|FileNotFoundException $e) {
            return new JsonResponse(sprintf('Document does not found: %s', $e->getMessage()), 404);
        }

        $response = new StreamedResponse(function () use ($fileStream) {
            $outputStream = fopen('php://output', 'wb');
            stream_copy_to_stream($fileStream, $outputStream);
        });

        $filename = sprintf('archive_%s', date('Y.m.d_H:i:s')).'.zip';
        $disposition = HeaderUtils::makeDisposition(
            HeaderUtils::DISPOSITION_ATTACHMENT,
            $filename,
        );
        $response->headers->set('Content-Disposition', $disposition);
        try {
            $response->headers->set('Content-Type', $backupFilesystem->getMimeType($path));
        } catch (FileNotFoundException $e) {
            return new JsonResponse(sprintf('Document does not found: %s', $e->getMessage()), 404);
        }

        return $response;
    }
}

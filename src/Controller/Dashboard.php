<?php

declare(strict_types=1);

namespace App\Controller;

use App\Exception\SettingsException;
use App\Exception\TagException;
use App\Service\Archive\Archivarius\LazyArchivarius;
use App\Service\Settings\Storage\Filesystem\SettingsRepository;
use App\Service\Tag\Storage\FileSystem\TagRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class Dashboard extends AbstractController
{
    public function __construct(
        private LazyArchivarius $archivarius,
        private TagRepository $tagRepository,
        private SettingsRepository $settingsRepository,
    ) {}

    /**
     * @return Response
     * @throws TagException
     * @throws SettingsException
     */
    #[Route('/', methods: ['GET'])]
    public function index(): Response
    {
        $count = $this->archivarius->count();
        $tags = $this->tagRepository->search();
        $settings = $this->settingsRepository->get();

        return $this->render('dashboard/index.html.twig', compact(
            'count',
            'tags',
                'settings',
            )
        );
    }

    #[Route('/search', name: 'search', methods: ['POST'])]
    public function search(Request $request): Response
    {
        $count = $this->archivarius->count(
            tags: $request->get('tags', []),
            query: $request->get('q', '')
        );
        $docs = $this->archivarius->search(
            tags: $request->get('tags', []),
            query: $request->get('q', '')
        );
        return new JsonResponse([
            'count' => $count,
            'documents' => $docs,
        ]);
    }
}
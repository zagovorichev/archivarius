<?php

declare(strict_types=1);

namespace App\Controller;

use App\Entity\Tag;
use App\Exception\TagException;
use App\Service\Tag\Storage\FileSystem\TagRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;

class TagController extends AbstractController
{
    public function __construct(private TagRepository $tagRepository){}

    #[Route('/tags', name: 'app_tags', methods: ['GET'])]
    public function index(): JsonResponse
    {
        try {
            return new JsonResponse([
                'tags' => $this->tagRepository->search()
            ]);
        } catch (TagException $e) {
            return new JsonResponse(sprintf('Error: %s', $e->getMessage()), 500);
        }
    }

    #[Route('/tags', methods: ['POST'])]
    public function add(Request $request): JsonResponse
    {
        $title = $request->get('title');
        $color = $request->get('color');

        $tag = new Tag($title, $color);
        try {
            $this->tagRepository->add($tag);
            return new JsonResponse($tag);
        } catch (TagException $e) {
            return new JsonResponse(sprintf('Tag not saved: %s', $e->getMessage()), 500);
        }
    }

    #[Route('/tags', methods: ['DELETE'])]
    public function remove(Request $request): JsonResponse
    {
        try {
            $tag = $this->tagRepository->get($request->get('title'));
            $this->tagRepository->remove($tag);
            return new JsonResponse('');
        } catch (TagException $e) {
            return new JsonResponse(sprintf(sprintf('Error: %s', $e->getMessage())), 500);
        }
    }
}

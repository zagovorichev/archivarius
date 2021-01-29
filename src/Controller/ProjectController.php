<?php

declare(strict_types=1);

namespace App\Controller;

use App\Exception\ProjectException;
use App\Service\Project\Storage\Filesystem\ProjectsRepository;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;

class ProjectController
{
    public function __construct(
        private ProjectsRepository $projectsRepository,
    ) { }

    #[Route('/projects', methods: ['GET'])]
    public function index(): JsonResponse
    {
        try {
            return new JsonResponse(['projects' => $this->projectsRepository->getAllProjects()]);
        } catch (ProjectException $e) {
            return new JsonResponse(['message' => $e->getMessage()], 500);
        }
    }

    #[Route('/projects', methods: ['POST'])]
    public function create(Request $request): JsonResponse
    {
        try {
            $project = $this->projectsRepository->create(
                $request->get('title'),
                $request->get('color'),
                $request->get('type'),
                $request->get('primary'),
            );
        } catch (ProjectException $e) {
            return new JsonResponse(['message' => $e->getMessage()], 500);
        }

        return new JsonResponse($project);
    }

    #[Route('/projects', methods: ['PUT'])]
    public function update(Request $request): JsonResponse
    {
        $id = $request->get('id');
        if (!$this->projectsRepository->exists($id)) {
            return new JsonResponse([], 404);
        }

        try {
            $project = $this->projectsRepository->getProject($id);
            $project->setTags($request->get('tags', []));
            $this->projectsRepository->save($project);
            return new JsonResponse($project);
        } catch (ProjectException $e) {
            return new JsonResponse(['error' => $e->getMessage()], 500);
        }
    }
}

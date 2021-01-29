<?php

declare(strict_types=1);

namespace App\Controller;


use App\Exception\SettingsException;
use App\Service\Settings\Storage\Filesystem\ProjectRepository;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;

class SettingsController
{
    #[Route('/settings', methods: ['PUT'])]
    public function update(Request $request, ProjectRepository $settingsRepository): JsonResponse
    {
        $useProjects = $request->get('projects', 'false');
        $useUsers = $request->get('users', 'false');

        try {
            $settings = $settingsRepository->get();
            $settings->setUsers($useUsers === 'true');
            $settings->setProjects($useProjects === 'true');
            $settingsRepository->save($settings);
        } catch (SettingsException $e) {
            return new JsonResponse([], 500);
        }

        return new JsonResponse();
    }
}

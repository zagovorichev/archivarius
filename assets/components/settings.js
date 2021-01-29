import $ from 'jquery';
import settingsConfig from './settings-config';
import settingsProjects from './settings-projects';

let $btn, $container;
let $tagsTabBtn, $usersTabBtn, $projectsTabBtn, $configTabBtn;
let $tagsSection, $usersSection, $projectsSection, $configSection;
let requireReload = false;

export default function() {

    let setActiveTab = function (tabName) {
        $tagsTabBtn.removeClass('active');
        $usersTabBtn.removeClass('active');
        $projectsTabBtn.removeClass('active');
        $configTabBtn.removeClass('active');
        $tagsSection.hide();
        $usersSection.hide();
        $projectsSection.hide();
        $configSection.hide();

        switch (tabName) {
            case 'tags':
                $tagsTabBtn.addClass('active');
                $tagsSection.show();
                break;
            case 'users':
                $usersTabBtn.addClass('active');
                $usersSection.show();
                break;
            case 'projects':
                $projectsTabBtn.addClass('active');
                $projectsSection.show();
                break;
            case 'config':
                $configTabBtn.addClass('active');
                $configSection.show();
        }
    }

    return {
        init: function () {
            $btn = $('.settings');
            $container = $('.settings-modal');
            $container.on('hide.bs.modal', function () {
                if (requireReload) {
                    location.reload();
                }
            });
            $btn.off('click').on('click', function () {
                $container.modal();
            });

            $tagsSection = $('.tag-settings', $container);
            $usersSection = $('.users-settings', $container);
            $projectsSection = $('.project-settings', $container);
            $configSection = $('.config-settings', $container);

            $tagsTabBtn = $('.setting-tags-btn', $container);
            $tagsTabBtn.off('click').on('click', function () {
                setActiveTab('tags');
            });
            $usersTabBtn = $('.setting-users-btn', $container);
            $usersTabBtn.off('click').on('click', function () {
                setActiveTab('users');
            });
            $projectsTabBtn = $('.setting-projects-btn', $container);
            $projectsTabBtn.off('click').on('click', function () {
                setActiveTab('projects');
            });
            $configTabBtn = $('.setting-config-btn', $container);
            $configTabBtn.off('click').on('click', function () {
                setActiveTab('config');
            });

            setActiveTab('tags');

            settingsConfig().init();
            settingsProjects().init();
        },

        setReloadOnClose: function () {
            requireReload = true;
        },

        destroy: function () {
            $btn.off('click');
            setActiveTab('tags');
            $projectsTabBtn.off('click');
            $usersTabBtn.off('click');
            $tagsTabBtn.off('click');

            settingsConfig().destroy();
            settingsProjects().destroy();
        }
    }
}

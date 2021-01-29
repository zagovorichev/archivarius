import $ from "jquery";
import settings from "./settings";

let $container, $projectCheckbox, $usersCheckbox, $settingsContainer;
let $usersTabBtn, $projectsTabBtn;

export default function() {

    const sendSettings = function () {
        $.ajax('/settings', {
            method: 'PUT',
            data: {
                projects: $projectCheckbox.is(':checked'),
                users: $usersCheckbox.is(':checked'),
            }
        }).done(function () {
            settings().setReloadOnClose();
        });
    };

    return {
        init: function () {
            $container = $('.config-settings');
            $projectCheckbox = $('#projects-checkbox', $container);
            $usersCheckbox = $('#users-checkbox', $container);

            $settingsContainer = $('.settings-modal');
            $usersTabBtn = $('.setting-users-btn', $settingsContainer).closest('.nav-item');
            $projectsTabBtn = $('.setting-projects-btn', $settingsContainer).closest('.nav-item');

            $projectCheckbox.off('change').on('change', function () {
                const isActive = $(this).is(':checked');
                if (isActive) {
                    $projectsTabBtn.show();
                } else {
                    $projectsTabBtn.hide();
                }
                sendSettings();
            });
            $usersCheckbox.off('change').on('change', function () {
                const isActive = $(this).is(':checked');
                if (isActive) {
                    $usersTabBtn.show();
                } else {
                    $usersTabBtn.hide();
                }
                sendSettings();
            });
        },
        destroy: function () {
            $projectCheckbox.off('change');
            $usersCheckbox.off('change');
        }
    }
}
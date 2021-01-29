import $ from "jquery";

let $container, $addForm;
let $addBtn, $color, $title, $type, $isPrimary, currentType = 'finance', $typeListGroup;
let $listGroup, $tabContent;

export default function() {

    const addProjectList = function (project) {
        const $a = $('<a>');
        $a.addClass('list-group-item');
        $a.addClass('list-group-item-action');
        $a.attr('id', `list-${project.id}`);
        $a.data('toggle', 'list');
        $a.attr('role', 'tab');
        $a.attr('aria-controls', project.id);
        $a.text(project.title);
        $a.on('click', function () {
            $('.list-group-item-action.active', $listGroup).removeClass('.active');
            $('.tab-pane.show', $tabContent).removeClass('.show');
            $('.tab-pane.active', $tabContent).removeClass('.active');


            const $content = $(`#${project.id}`);
            $content.addClass('show');
            $content.addClass('active');
        })
        $a.prependTo($listGroup);
    }

    const addProjectContent = function (project) {
        const $div = $('<div>');
        $div.addClass('tab-pane');
        $div.addClass('fade');
        $div.attr('id', project.id);
        $div.attr('role', 'tabpanel');
        $div.attr('aria-labelledby', `list-${project.id}`);
        $div.text('test')
        $div.appendTo($tabContent);
    }

    const addProject = function (project) {
        addProjectList(project);
        addProjectContent(project);
    }

    const loadProjects = function () {
        $.ajax('/projects', {
            method: 'GET'
        }).done(function (response) {
            response.projects.forEach(function (project) {
                addProject(project);
            })
        })
    }

    const createProject = function () {
        $.ajax('/projects', {
            method: 'POST',
            data: {
                color: $color.val(),
                title: $title.val(),
                type: currentType,
                primary: $isPrimary.is(':checked') ? 1 : 0,
            }
        }).done(function (response) {
            console.log(response)
        });
    }

    const attachAddForm = function () {
        $addBtn = $('.button-add', $addForm);
        $addBtn
            .off('click')
            .on('click', function () {
                createProject();
            });

        $color = $('.color', $addForm);
        $title = $('.title', $addForm);
        $type = $('.type', $addForm);
        $typeListGroup = $('.list-group-item', $type);
        $typeListGroup
            .off('click')
            .on('click', function (e) {
                $('.list-group-item', $type).removeClass('active');
                const $el = $(e.target);
                $el.addClass('active');
                currentType = $el.hasClass('finance') ? 'finance' : 'documents';
            });

        $isPrimary = $('.primary', $addForm);
    }

    const detachAddForm = function () {
        $addBtn.off('click');
        $typeListGroup.off('click');
    }

    const attachAddList = function () {
        $('#list-new-project').off('click').on('click', function () {
            $('.list-group-item-action.active', $listGroup).removeClass('.active');
            $('.tab-pane.show', $tabContent).removeClass('.show');
            $('.tab-pane.active', $tabContent).removeClass('.active');


            const $content = $(`#new-project`);
            $content.addClass('show');
            $content.addClass('active');
        })
    }

    const initAddProject = function () {
        attachAddList();
        attachAddForm();
    }

    return {
        init: function () {
            $container = $('.projects-tab');
            $addForm = $('.add-form', $container);
            $listGroup = $('.projects-list-group', $container);
            $tabContent = $('.projects-tab-content', $container);
            initAddProject();
            loadProjects();
        },
        destroy: function () {
            detachAddForm();
        }
    }
}
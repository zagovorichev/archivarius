import $ from "jquery";
import 'datatables.net-bs4';
import settings from "./settings";

let $container, $title, $table, $save, $color, netTable, $tagsList;

export default function() {

    const addToTable = function (tag) {
        const activeRow = netTable.row.add( tag );
        activeRow.draw();
    }

    const addTag = function () {
        $.ajax('/tags', {
            method: 'POST',
            data: {
                title: $title.val(),
                color: $color.val(),
            }
        }).done(function (tag) {
            settings().setReloadOnClose();
            addToTable(tag);
            $title.val('');
        })
    }

    const loadTable = function () {
        $.ajax('/tags', {
            method: 'GET',
        }).done(function (resp) {
            if (!netTable) {
                netTable = $table.DataTable({
                    paging: false,
                    searching: false,
                    ordering: false,
                    select: true,
                    autoWidth: true,
                    info: false,
                    language: {
                        emptyTable: $table.data('text')
                    },
                    columns: [
                        { data: 'title' },
                        { data: 'color' },
                    ],
                    data: resp.tags,
                });
            }

            $('tbody', $table).on('click', 'tr', function () {
                const activeRow = netTable.row( this );
                const data = activeRow.data();
                if (data && confirm($table.data('delete'))) {
                    $.ajax('/tags', {
                        method: 'DELETE',
                        data: {
                            'title': data.title,
                        }
                    }).done(function () {
                        settings().setReloadOnClose();
                        activeRow.remove().draw();
                    })
                }
            } );

            $save.off('click').on('click', function () {
                addTag();
            });
        });
    }

    return {
        init: function () {
            $container = $('.add-tag-form');
            $title = $('.tag-name', $container);
            $color = $('.color', $container);
            $save = $('.button-add-tag', $container);

            $tagsList = $('.tags-list');
            $table = $('table', $tagsList);
            loadTable();
        },
        getTags: function() {
            return netTable.data()
        },
        destroy: function () {
            $title.val('');
            $color.val('');
            $table.hide();
            $save.off('click');
        }
    }
}
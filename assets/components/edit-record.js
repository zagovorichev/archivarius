import dropzone from "./dropzone";
import $ from "jquery";
import 'datatables.net-bs4';
import editMedia from './edit-media'
import documents from "./documents";
import archivarius from "./archivarius";

let $container, $title, $id, $dropzoneForm, $files, $fileTable, netTable, $deleteBtn, $saveBtn, activeRow, $floatVal, $description;
let $dateUpdated, $dateCreated, $loadArchiveBtn;

export default function() {

    const selectTags = function (tags) {

        $('.tag-item', $container).each(function(){
            const $el = $(this);
            $el.prop('checked', false);
            if ($.inArray($el.val(), tags) !== -1) {
                $el.prop('checked', true);
            }
        });
    }

    return {
        init: function () {
            $container = $('.src-modal');
            $id = $('.src-id', $container);
            $deleteBtn = $('.delete', $container);
            $saveBtn = $('.save', $container);
            $title = $('.src-title', $container);
            $dropzoneForm = $('#src-media');
            $files = $('.document-list', $container);
            $fileTable = $('table', $files);
            $floatVal = $('.src-float', $container);
            $description = $('.src-text', $container);
            $dateCreated = $('.date-created', $container);
            $dateUpdated = $('.date-updated', $container);
            $loadArchiveBtn = $('.load-archive', $container);
            dropzone().init();
            editMedia().init();
        },
        openEditForm: function (archiveRecord) {
            dropzone().destroy();
            $dropzoneForm.data('id', archiveRecord.id);
            dropzone().init();
            $id.text(archiveRecord.id);
            $title.val(archiveRecord.title);
            $description.val(archiveRecord.description);
            $floatVal.val(parseFloat(archiveRecord.floatVal));
            $dateCreated.text(archiveRecord.createdAt);
            $dateUpdated.text(archiveRecord.updatedAt);

            $loadArchiveBtn.off('click').on('click', function () {
                archivarius().download([archiveRecord.id]);
            });

            selectTags(archiveRecord.tags);

            $container.modal();

            $deleteBtn.off('click').on('click', () => {
                $.ajax('/doc/' + archiveRecord.id, {
                    method: 'DELETE'
                }).done(function () {
                    documents().removeActiveRow();
                    $container.modal('hide');
                });
            });

            $saveBtn.off('click').on('click', function () {

                const tags = [];
                $('.tag-item:checkbox:checked', $container).each(function(i){
                    tags[i] = $(this).val();
                });

                $.ajax('/doc/' + archiveRecord.id, {
                    method: 'PUT',
                    data: {
                        title: $title.val(),
                        description: $description.val(),
                        floatVal: $floatVal.val(),
                        tags: tags
                    },
                }).done(function (archiveRecord) {
                    documents().removeActiveRow();
                    documents().addRow(archiveRecord)
                    $container.modal('hide');
                });
            });

            if (netTable) {
                netTable.destroy();
            }

            netTable = $fileTable.DataTable({
                paging: false,
                searching: false,
                ordering: false,
                select: true,
                autoWidth: true,
                info: false,
                language: {
                    emptyTable: $fileTable.data('text')
                },
                columns: [
                    {data: 'docTitle'},
                    {data: 'docOrigName'},
                ],
                data: archiveRecord.documents,
            });

            dropzone().destroy();
            $dropzoneForm.data('id', archiveRecord.id);
            dropzone().init(function (docInfo) {
                activeRow = netTable.row.add(docInfo);
                activeRow.draw();
            });

            $('tbody', $fileTable).off('click').on('click', 'tr', function () {
                activeRow = netTable.row(this);
                const data = activeRow.data();
                if (!data || !data.hasOwnProperty('docTitle')) {
                    return;
                }
                $container.modal('hide');
                editMedia().show(archiveRecord.id, data, function (action, data) {
                    $container.modal();
                    if (action === 'delete') {
                        activeRow.remove().draw();
                    } else if (action === 'update') {
                        activeRow.remove();
                        activeRow = netTable.row.add(data);
                        activeRow.draw();
                    } else {
                        activeRow = null;
                    }
                });
            });
        },
        destroy: function () {
            editMedia().destroy();
            dropzone().destroy();
            $id.text('');
            $title.val('');
            $saveBtn.off('click');
            $deleteBtn.off('click');
            $dateUpdated.text('');
            $dateCreated.text('');
        }
    }
}
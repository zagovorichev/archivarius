import $ from "jquery";

let $container, $title, $download, $remove, $origName, deleteOnClose, $save, addOnClose = false;

export default function() {
    return {
        init: function () {
            $container = $('.file-modal');
            $title = $('.src-title', $container);
            $origName = $('.src-id', $container);
            $download = $('.load-media', $container);
            $remove = $('.delete-media', $container);
            $save = $('.save-media', $container);
            deleteOnClose = false;
        },
        show: function (archiveId, media, onClose) {
            $title.val(media.docTitle);
            $origName.text(media.docOrigName);
            $container
                .off('hidden.bs.modal')
                .on('hidden.bs.modal', function () {
                    let actionOnClose = deleteOnClose === true ? 'delete' : null;
                    if (addOnClose) {
                        actionOnClose = 'update';
                    }
                    onClose(actionOnClose, addOnClose);
                    deleteOnClose = false;
                    addOnClose = false;
                })
                .modal();
            $download
                .off('click')
                .on('click', function () {
                    let fakeFormHtmlFragment = "<form style='display: none;' method='POST' action='/doc/get_media'>";
                    fakeFormHtmlFragment += "<input type='hidden' name='id' value='"+archiveId+"'>";
                    fakeFormHtmlFragment += "<input type='hidden' name='path' value='"+media.docPath.replace("\\", "\\\\").replace("'", "\'")+"'>";
                    fakeFormHtmlFragment += "</form>";
                    const $fakeFormDom = $(fakeFormHtmlFragment);
                    $("body").append($fakeFormDom);
                    $fakeFormDom.submit();
                });
            $remove
                .off('click')
                .on('click', function () {
                    $.ajax('/doc/media',{
                        method: 'DELETE',
                        data: {
                            id: archiveId,
                            path: media.docPath,
                        }
                    }).done(function () {
                        deleteOnClose = true;
                        $container.modal('hide');
                    });
                });
            $save
                .off('click')
                .on('click', function () {
                    $.ajax('/doc/media', {
                        method: 'PUT',
                        data: {
                            id: archiveId,
                            path: media.docPath,
                            title: $title.val()
                        }
                    }).done(function (docInfo) {
                        addOnClose = docInfo
                        $container.modal('hide');
                    })
                });
        },
        destroy: function () {
            $title.val('');
            $origName.text('');
            $download.data('path', '');
            $remove.data('path', '');
            addOnClose = false;
            deleteOnClose = false;
        }
    }
}
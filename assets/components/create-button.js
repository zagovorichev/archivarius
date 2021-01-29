import $ from 'jquery';
import documents from "./documents";

let $createBtn;

export default function() {
    return {
        init: function () {
            $createBtn = $('.create-btn');
            $createBtn.off('click').on('click', function () {
                $.ajax({
                    url: $(this).data('href')
                }).done(function (archiveRecord) {
                    documents().addRecord(archiveRecord);
                });
            });
        },
        destroy: function () {
            $createBtn.off('click');
        }
    }
}
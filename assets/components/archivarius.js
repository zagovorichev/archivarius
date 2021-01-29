import $ from "jquery";

export default function () {
    return {
        download: function (archiveIds) {
            let fakeFormHtmlFragment = "<form style='display: none;' method='POST' action='/doc/archive'>";
            for (let i of archiveIds) {
                fakeFormHtmlFragment += "<input type='hidden' name='id[]' value='" + i + "'>";
            }
            fakeFormHtmlFragment += "</form>";
            const $fakeFormDom = $(fakeFormHtmlFragment);
            $("body").append($fakeFormDom);
            $fakeFormDom.submit();
        }
    };
}
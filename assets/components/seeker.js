import $ from 'jquery';
import documents from "./documents";
import searchChart from "./search-chart";
import archivarius from "./archivarius";

let $seekerGroup, $seekerInput, $seekerTags, $searchBtn, $downloadBtn;

export default function() {

    const runSeeker = function (done) {
        const tags = [];
        $($seekerTags).each(function(i){
            if ($(this).prop('checked')) {
                tags.push($(this).val());
            }
        });

        $.ajax($seekerInput.data('url'), {
            method: 'POST',
            data: {
                q: $seekerInput.val(),
                tags: tags
            }
        }).done(function (response) {
            documents().loadTable(response);
            searchChart().updateChart(response);
            if (done) {
                done(response);
            }
        });
    }

    return {
        init: function () {

            documents().init();

            $seekerGroup = $('.seeker-group');
            $seekerInput = $('.seeker', $seekerGroup);
            $searchBtn = $('.search-btn', $seekerGroup);
            $downloadBtn = $('.download-search-results', $seekerGroup);
            $seekerTags = $('.tag-item', $seekerGroup);

            $seekerInput.off('keypress').on('keypress', function (e) {
                if (e.which === 13) {
                    runSeeker();
                }
            })

            $seekerTags.off('click').on('click', function () {
                runSeeker();
            });

            $searchBtn.off('click').on('click', function () {
                runSeeker();
            });

            $downloadBtn.off('click').on('click', function () {
                runSeeker(function (resources) {
                    let ids = [];
                    for(let archiveRecord of resources.documents) {
                        ids.push(archiveRecord.id);
                    }
                    if (ids.length) {
                        archivarius().download(ids);
                    }
                });
            })

            runSeeker();
        },

        destroy: function () {
            $seekerInput.off('keypress');
            $searchBtn.off('click');
            $seekerTags.off('click');

            documents().destroy();
        }
    }
}

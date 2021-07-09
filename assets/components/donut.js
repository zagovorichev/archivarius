import $ from 'jquery';

let $chartBtn, $container;

export default function() {
    return {
        init: function () {
            $chartBtn = $('.chart-btn');
            $container = $('.chart-modal');
            $chartBtn.off('click').on('click', function () {
                $container.modal();
            });
        },
        destroy: function () {
            $chartBtn.off('click');
        }
    }
}

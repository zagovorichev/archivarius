import Dropzone from 'dropzone';
Dropzone.autoDiscover = false;
import 'dropzone/dist/dropzone.css'

let dz, state = false;

export default function() {
    return {
        init: function (onAdded) {
            if (!state) {
                const $el = $('#src-media');
                const formEl = document.querySelector('.dropzone');
                if (!formEl) {
                    return;
                }
                dz = new Dropzone(formEl, {
                    dictDefaultMessage: $el.data('text'),
                    params: {
                        id: $el.data('id'),
                    }
                });
                dz.on('error', function (f, r) {
                    console.log(f, r);
                });
                dz.on('success', function (f, r) {
                    // redirect to new r if already not there
                    onAdded(r);
                });

                state = true;
            }
        },
        destroy: function () {
            dz.destroy();
            state = false;
        }
    }
}

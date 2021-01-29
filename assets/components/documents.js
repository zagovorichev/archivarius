import $ from 'jquery';
import 'datatables.net-bs4';
import editRecord from './edit-record';

let $container, $spinner, $foundCount, $foundCountCnt, $table, netTable, activeRow, $foundFloatVals, totalFloatVal;

export default function() {

    return {
        init: function() {
            $container = $('.documents-table');
            $spinner = $('.spinner-border', $container);
            $foundCount = $('.found-count', $container);
            $foundCountCnt = $('.cnt', $foundCount);
            $foundFloatVals = $('.amount-fv');
            $table = $('table', $container);
        },
        loadTable: function (data) {
            $spinner.hide();
            $foundCountCnt.text(data.count);
            $foundCount.show();

            totalFloatVal = 0;
            for (let i in data.documents) {
                if (!data.documents.hasOwnProperty(i)) {
                    continue;
                }
                totalFloatVal += data.documents[i].floatVal;
            }
            $foundFloatVals.text(totalFloatVal.toFixed(2));
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
                        {data: 'title'},
                        {data: 'tags'},
                        {data: 'floatVal'},
                    ],
                    data: data.documents,
                });

                $('tbody', $table).on('click', 'tr', function () {
                    activeRow = netTable.row(this);
                    const data = activeRow.data();
                    if (data) {
                        editRecord().openEditForm(data);
                    }
                });

                $table.show();
            } else {
                netTable.clear().draw();
                netTable.rows.add(data.documents);
                netTable.draw();
                activeRow = null;
            }
        },
        addRow: function(archiveRecord) {
            // total count
            let countVal = parseInt($foundCountCnt.text());
            $foundCountCnt.text(++countVal);
            // total value
            totalFloatVal += archiveRecord.floatVal;
            $foundFloatVals.text(totalFloatVal.toFixed(2));

            activeRow = netTable.row.add( archiveRecord );
            activeRow.draw();
        },
        addRecord: function(archiveRecord) {
            this.addRow(archiveRecord);
            editRecord().openEditForm(archiveRecord);
        },
        removeActiveRow: function () {
            let countVal = parseInt($foundCountCnt.text());
            $foundCountCnt.text(--countVal);

            totalFloatVal -= activeRow.data().floatVal;
            $foundFloatVals.text(totalFloatVal.toFixed(2));

            activeRow.remove().draw();
        },
        destroy: function () {
            $spinner.show();
            $foundCount.hide();
            $foundCountCnt.text('0');
            $table.hide();
            $foundFloatVals.text('0')
        }
    }
}
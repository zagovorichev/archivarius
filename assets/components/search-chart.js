import tagSettings from './settings-tag';

let myChart, config, $total, $isUniqueCheck, curData = [];

export default function () {

    const updateTotal = function (total) {
        $total.text(total.toFixed(2));
    }

    const getTagColor = function (tagName) {
        const tags = tagSettings().getTags();
        for (let i in tags) {
            if (!tags.hasOwnProperty(i)) {
                continue;
            }
            if (tags[i].title === tagName) {
                return tags[i].color;
            }
        }
        return '#000';
    }

    const reloadChart = function (data) {
        let total = 0;

        const isUniqueValueForTag = $isUniqueCheck.is(':checked');
        config.data.datasets = [];
        config.data.labels = [];

        const tags = {};
        const docs = data['documents'];
        for (let i in docs) {
            if (!docs.hasOwnProperty(i)) {
                continue;
            }

            const currentDoc = docs[i];
            const tagList = currentDoc.tags;
            for (let tagKey in tagList) {
                if (!tagList.hasOwnProperty(tagKey)) {
                    continue;
                }

                const tagName = tagList[tagKey];
                if (!tags.hasOwnProperty(tagName)) {
                    tags[tagName] = {
                        floatVal: parseFloat(currentDoc.floatVal),
                        title: tagName,
                        color: getTagColor(tagName),
                    };
                } else {
                    const res = parseFloat(tags[tagName].floatVal) + parseFloat(currentDoc.floatVal);
                    tags[tagName].floatVal = res.toFixed(2);
                }
                total += currentDoc.floatVal;

                if (isUniqueValueForTag) {
                    break;
                }
            }
        }

        updateTotal(total);

        const dataset = {
            label: 'Dataset',
            data: [],
            backgroundColor: [],
        };
        for (let i in tags) {
            if (!tags.hasOwnProperty(i)) {
                continue;
            }
            const currentTag = tags[i];
            config.data.labels.push(currentTag.title);
            dataset.data.push(currentTag.floatVal);
            dataset.backgroundColor.push(currentTag.color);
        }
        config.data.datasets.push(dataset)

        myChart.update();
    }

    return {
        init: function () {
            $total = $('.total-floatvals');
            $isUniqueCheck = $('.aggregate-floatval');
            $isUniqueCheck.change(function () {
                reloadChart(curData);
            });

            const ctx = document.getElementById('searchTagChart').getContext('2d');
            const $ctx = $('#searchTagChart');
            config = {
                type: 'doughnut',
                data: {
                    datasets: [],
                    labels: [],
                },
                options: {
                    responsive: true,
                    legend: {
                        position: 'top',
                    },
                    title: {
                        display: true,
                        text: $ctx.data('text')
                    },
                    animation: {
                        animateScale: true,
                        animateRotate: true
                    },
                }
            };
            myChart = new Chart(ctx, config);
        },
        updateChart: function (data) {
            curData = data;
            reloadChart(data);
        },
        destroy: function () {
            config.data.datasets.splice(0, 1);
            myChart.update();
            $isUniqueCheck.off('click');
            updateTotal(0);
        }
    }
}
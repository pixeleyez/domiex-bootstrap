import { getColorCodes } from "../helpers/helper.js";

//basic bar Chart
document.addEventListener("alpine:init", () => {
    Alpine.data("basicBarApp", () => ({
        series: [{
            data: [400, 430, 448, 470, 540, 580, 690, 1100, 1200, 1380]
        }],
        labels: ['South Korea', 'Canada', 'United Kingdom', 'Netherlands', 'Italy', 'France', 'Japan', 'United States', 'China', 'Germany'],
        init() {
            // Initial chart render
            this.renderChart();

            // Reload chart on window resize
            window.addEventListener('resize', this.reloadChart.bind(this));
        },
        renderChart() {
            // Destroy previous instance if exists
            if (this.basicBarChart)
                this.basicBarChart.destroy();

            // Initialize new chart
            this.basicBarChart = new ApexCharts(this.$refs.basicBarChart, this.options);
            this.basicBarChart.render();
        },
        reloadChart() {
            // Handle the logic for resizing
            this.renderChart(); // Re-render chart on resize
        },
        get options() {
            return {
                series: this.series,
                chart: {
                    height: 300,
                    type: "bar",
                },
                plotOptions: {
                    bar: {
                        borderRadius: 4,
                        horizontal: true,
                    }
                },
                dataLabels: {
                    enabled: false
                },
                xaxis: {
                    categories: this.labels,
                },
                colors: getColorCodes(this.$refs.basicBarChart.dataset),
                grid: {
                    padding: {
                        right: 0,
                        bottom: -10,
                    },
                }
            };
        }
    }));
});

//Grouped bar Chart
document.addEventListener("alpine:init", () => {
    Alpine.data("groupedBarApp", () => ({
        series: [{
            data: [44, 55, 41, 64, 22, 43, 21]
        }, {
            data: [53, 32, 33, 52, 13, 44, 32]
        }],
        labels: [2018, 2019, 2020, 2021, 2022, 2023, 2024],
        init() {
            // Initial chart render
            this.renderChart();

            // Reload chart on window resize
            window.addEventListener('resize', this.reloadChart.bind(this));
        },
        renderChart() {
            // Destroy previous instance if exists
            if (this.groupedBarChart) {
                this.groupedBarChart.destroy();
            }

            // Initialize new chart
            this.groupedBarChart = new ApexCharts(this.$refs.groupedBarChart, this.options);
            this.groupedBarChart.render();
        },
        reloadChart() {
            // Handle the logic for resizing
            this.renderChart(); // Re-render chart on resize
        },
        get options() {
            return {
                series: this.series,
                chart: {
                    height: 300,
                    type: "bar",
                },
                plotOptions: {
                    bar: {
                        horizontal: true,
                        dataLabels: {
                            position: 'top',
                        },
                    }
                },
                dataLabels: {
                    enabled: true,
                    offsetX: -6,
                    style: {
                        fontSize: '12px',
                        colors: ['#fff']
                    }
                },
                stroke: {
                    show: true,
                    width: 1,
                    colors: ['#fff']
                },
                tooltip: {
                    shared: true,
                    intersect: false
                },
                colors: getColorCodes(this.$refs.groupedBarChart.dataset),
                xaxis: {
                    categories: this.labels,
                },
                grid: {
                    padding: {
                        right: 0,
                        bottom: -10,
                    },
                }
            };
        }
    }));
});

//Stacked bar Chart
document.addEventListener("alpine:init", () => {
    Alpine.data("stackedBarApp", () => ({
        series: [{
            name: 'Marine Sprite',
            data: [44, 55, 41, 37, 22, 43, 21]
        }, {
            name: 'Striking Calf',
            data: [53, 32, 33, 52, 13, 43, 32]
        }, {
            name: 'Tank Picture',
            data: [12, 17, 11, 9, 15, 11, 20]
        }, {
            name: 'Bucket Slope',
            data: [9, 7, 5, 8, 6, 9, 4]
        }, {
            name: 'Reborn Kid',
            data: [25, 12, 19, 32, 25, 24, 10]
        }],
        labels: [2018, 2019, 2020, 2021, 2022, 2023, 2024],
        init() {
            // Initial chart render
            this.renderChart();

            // Reload chart on window resize
            window.addEventListener('resize', this.reloadChart.bind(this));
        },
        renderChart() {
            // Destroy previous instance if exists
            if (this.stackedBarChart)
                this.stackedBarChart.destroy();

            // Initialize new chart
            this.stackedBarChart = new ApexCharts(this.$refs.stackedBarChart, this.options);
            this.stackedBarChart.render();
        },
        reloadChart() {
            // Handle the logic for resizing
            this.renderChart(); // Re-render chart on resize
        },
        get options() {
            return {
                series: this.series,
                chart: {
                    height: 300,
                    type: "bar",
                    stacked: true,
                },
                plotOptions: {
                    bar: {
                        horizontal: true,
                        dataLabels: {
                            total: {
                                enabled: true,
                                offsetX: 0,
                                style: {
                                    fontSize: '13px',
                                    fontWeight: 900
                                }
                            }
                        }
                    },
                },
                stroke: {
                    width: 1,
                    colors: ['#fff']
                },
                title: {
                    text: 'Fiction Books Sales'
                },
                xaxis: {
                    categories: this.labels,
                    labels: {
                        formatter: function (val) {
                            return val + "K"
                        }
                    }
                },
                yaxis: {
                    title: {
                        text: undefined
                    },
                },
                tooltip: {
                    y: {
                        formatter: function (val) {
                            return val + "K"
                        }
                    }
                },
                fill: {
                    opacity: 1
                },
                colors: getColorCodes(this.$refs.stackedBarChart.dataset),
                legend: {
                    position: 'top',
                    horizontalAlign: 'left',
                    offsetX: 40
                },
                grid: {
                    padding: {
                        right: 0,
                        bottom: -10,
                    },
                }
            };
        }
    }));
});

//Stacked bar 100 Chart
document.addEventListener("alpine:init", () => {
    Alpine.data("stackedBar100App", () => ({
        series: [{
            name: 'Marine Sprite',
            data: [44, 55, 41, 37, 22, 43, 21]
        }, {
            name: 'Striking Calf',
            data: [53, 32, 33, 52, 13, 43, 32]
        }, {
            name: 'Tank Picture',
            data: [12, 17, 11, 9, 15, 11, 20]
        }, {
            name: 'Bucket Slope',
            data: [9, 7, 5, 8, 6, 9, 4]
        }, {
            name: 'Reborn Kid',
            data: [25, 12, 19, 32, 25, 24, 10]
        }],
        labels: [2018, 2019, 2020, 2021, 2022, 2023, 2024],
        init() {
            // Initial chart render
            this.renderChart();

            // Reload chart on window resize
            window.addEventListener('resize', this.reloadChart.bind(this));
        },
        renderChart() {
            // Destroy previous instance if exists
            if (this.stackedBar100Chart)
                this.stackedBar100Chart.destroy();

            // Initialize new chart
            this.stackedBar100Chart = new ApexCharts(this.$refs.stackedBar100Chart, this.options);
            this.stackedBar100Chart.render();
        },
        reloadChart() {
            // Handle the logic for resizing
            this.renderChart(); // Re-render chart on resize
        },
        get options() {
            return {
                series: this.series,
                chart: {
                    height: 300,
                    type: "bar",
                    stacked: true,
                    stackType: '100%'
                },
                plotOptions: {
                    bar: {
                        horizontal: true,
                    },
                },
                colors: getColorCodes(this.$refs.stackedBar100Chart.dataset),
                stroke: {
                    width: 1,
                    colors: ['#fff']
                },
                title: {
                    text: '100% Stacked Bar'
                },
                xaxis: {
                    categories: this.labels
                },
                tooltip: {
                    y: {
                        formatter: function (val) {
                            return val + "K"
                        }
                    }
                },
                fill: {
                    opacity: 1

                },
                legend: {
                    position: 'top',
                    horizontalAlign: 'left',
                    offsetX: 40
                },
                grid: {
                    padding: {
                        right: 0,
                        bottom: -10,
                    },
                }
            };
        }
    }));
});

//Grouped Stacked Bars Chart
document.addEventListener("alpine:init", () => {
    Alpine.data("groupedStackedBarApp", () => ({
        series: [
            {
                name: 'Q1 Budget',
                group: 'budget',
                data: [44000, 55000, 41000, 67000, 22000]
            },
            {
                name: 'Q1 Actual',
                group: 'actual',
                data: [48000, 50000, 40000, 65000, 25000]
            },
            {
                name: 'Q2 Budget',
                group: 'budget',
                data: [13000, 36000, 20000, 8000, 13000]
            },
            {
                name: 'Q2 Actual',
                group: 'actual',
                data: [20000, 40000, 25000, 10000, 12000]
            }
        ],
        labels: [
            'Online advertising',
            'Sales Training',
            'Print advertising',
            'Catalogs',
            'Meetings'
        ],
        init() {
            // Initial chart render
            this.renderChart();

            // Reload chart on window resize
            window.addEventListener('resize', this.reloadChart.bind(this));
        },
        renderChart() {
            // Destroy previous instance if exists
            if (this.groupedStackedBarChart)
                this.groupedStackedBarChart.destroy();

            // Initialize new chart
            this.groupedStackedBarChart = new ApexCharts(this.$refs.groupedStackedBarChart, this.options);
            this.groupedStackedBarChart.render();
        },
        reloadChart() {
            // Handle the logic for resizing
            this.renderChart(); // Re-render chart on resize
        },
        get options() {
            return {
                series: this.series,
                chart: {
                    height: 300,
                    type: "bar",
                    stacked: true,
                },
                stroke: {
                    width: 1,
                    colors: ['#fff']
                },
                dataLabels: {
                    formatter: (val) => {
                        return val / 1000 + 'K'
                    }
                },
                plotOptions: {
                    bar: {
                        horizontal: true
                    }
                },
                xaxis: {
                    categories: this.labels,
                    labels: {
                        formatter: (val) => {
                            return val / 1000 + 'K'
                        }
                    }
                },
                fill: {
                    opacity: 1,
                },
                colors: getColorCodes(this.$refs.groupedStackedBarChart.dataset),
                legend: {
                    position: 'top',
                    horizontalAlign: 'left'
                },
                grid: {
                    padding: {
                        right: 0,
                        bottom: -10,
                    },
                }
            };
        }
    }));
});

//Bar with Negative Values Bars Chart
document.addEventListener("alpine:init", () => {
    Alpine.data("negativeValueBarApp", () => ({
        series: [{
            name: 'Males',
            data: [0.4, 0.65, 0.76, 0.88, 1.5, 2.1, 2.9, 3.8, 3.9, 4.2, 4, 4.3, 4.1, 4.2, 4.5,
                3.9, 3.5, 3
            ]
        },
        {
            name: 'Females',
            data: [-0.8, -1.05, -1.06, -1.18, -1.4, -2.2, -2.85, -3.7, -3.96, -4.22, -4.3, -4.4,
            -4.1, -4, -4.1, -3.4, -3.1, -2.8
            ]
        }
        ],
        labels: ['85+', '80-84', '75-79', '70-74', '65-69', '60-64', '55-59', '50-54',
            '45-49', '40-44', '35-39', '30-34', '25-29', '20-24', '15-19', '10-14', '5-9',
            '0-4'
        ],
        init() {
            // Initial chart render
            this.renderChart();

            // Reload chart on window resize
            window.addEventListener('resize', this.reloadChart.bind(this));
        },
        renderChart() {
            // Destroy previous instance if exists
            if (this.negativeValueBarChart)
                this.negativeValueBarChart.destroy();

            // Initialize new chart
            this.negativeValueBarChart = new ApexCharts(this.$refs.negativeValueBarChart, this.options);
            this.negativeValueBarChart.render();
        },
        reloadChart() {
            // Handle the logic for resizing
            this.renderChart(); // Re-render chart on resize
        },
        get options() {
            return {
                series: this.series,
                chart: {
                    height: 300,
                    type: "bar",
                    stacked: true,
                },
                colors: getColorCodes(this.$refs.negativeValueBarChart.dataset),
                plotOptions: {
                    bar: {
                        horizontal: true,
                        barHeight: '80%',
                    },
                },
                dataLabels: {
                    enabled: false
                },
                stroke: {
                    width: 1,
                    colors: ["#fff"]
                },

                grid: {
                    xaxis: {
                        lines: {
                            show: false
                        }
                    }
                },
                yaxis: {
                    min: -5,
                    max: 5,
                    title: {
                        // text: 'Age',
                    },
                },
                tooltip: {
                    shared: false,
                    x: {
                        formatter: function (val) {
                            return val
                        }
                    },
                    y: {
                        formatter: function (val) {
                            return Math.abs(val) + "%"
                        }
                    }
                },
                title: {
                    text: 'Mauritius population pyramid 2011'
                },
                xaxis: {
                    categories: this.labels,
                    title: {
                        text: 'Percent'
                    },
                    labels: {
                        formatter: function (val) {
                            return Math.abs(Math.round(val)) + "%"
                        }
                    }
                },
                grid: {
                    padding: {
                        right: 0,
                        bottom: -10,
                    },
                }
            };
        }
    }));
});

//Bar with Markers Chart
document.addEventListener("alpine:init", () => {
    Alpine.data("markersBarApp", () => ({
        series: [
            {
                name: 'Actual',
                data: [
                    {
                        x: '2011',
                        y: 12,
                        goals: [
                            {
                                name: 'Expected',
                                value: 14,
                                strokeWidth: 2,
                                strokeDashArray: 2,
                                strokeColor: '#775DD0'
                            }
                        ]
                    },
                    {
                        x: '2012',
                        y: 44,
                        goals: [
                            {
                                name: 'Expected',
                                value: 54,
                                strokeWidth: 5,
                                strokeHeight: 10,
                                strokeColor: '#775DD0'
                            }
                        ]
                    },
                    {
                        x: '2013',
                        y: 54,
                        goals: [
                            {
                                name: 'Expected',
                                value: 52,
                                strokeWidth: 10,
                                strokeHeight: 0,
                                strokeLineCap: 'round',
                                strokeColor: '#775DD0'
                            }
                        ]
                    },
                    {
                        x: '2014',
                        y: 66,
                        goals: [
                            {
                                name: 'Expected',
                                value: 61,
                                strokeWidth: 10,
                                strokeHeight: 0,
                                strokeLineCap: 'round',
                                strokeColor: '#775DD0'
                            }
                        ]
                    },
                    {
                        x: '2015',
                        y: 81,
                        goals: [
                            {
                                name: 'Expected',
                                value: 66,
                                strokeWidth: 10,
                                strokeHeight: 0,
                                strokeLineCap: 'round',
                                strokeColor: '#775DD0'
                            }
                        ]
                    },
                    {
                        x: '2016',
                        y: 67,
                        goals: [
                            {
                                name: 'Expected',
                                value: 70,
                                strokeWidth: 5,
                                strokeHeight: 10,
                                strokeColor: '#775DD0'
                            }
                        ]
                    }
                ]
            }
        ],
        init() {
            // Initial chart render
            this.renderChart();

            // Reload chart on window resize
            window.addEventListener('resize', this.reloadChart.bind(this));
        },
        renderChart() {
            // Destroy previous instance if exists
            if (this.markersBarChart)
                this.markersBarChart.destroy();
            // Initialize new chart
            this.markersBarChart = new ApexCharts(this.$refs.markersBarChart, this.options);
            this.markersBarChart.render();
        },
        reloadChart() {
            // Handle the logic for resizing
            this.renderChart(); // Re-render chart on resize
        },
        get options() {
            return {
                series: this.series,
                chart: {
                    height: 300,
                    type: "bar",
                },
                plotOptions: {
                    bar: {
                        horizontal: true,
                    }
                },
                colors: getColorCodes(this.$refs.markersBarChart.dataset),
                dataLabels: {
                    formatter: function (val, opt) {
                        const goals =
                            opt.w.config.series[opt.seriesIndex].data[opt.dataPointIndex]
                                .goals

                        if (goals && goals.length) {
                            return `${val} / ${goals[0].value}`
                        }
                        return val
                    }
                },
                legend: {
                    show: true,
                    showForSingleSeries: true,
                    customLegendItems: ['Actual', 'Expected'],
                    markers: {
                        fillColors: ['#00E396', '#775DD0']
                    }
                },
                grid: {
                    padding: {
                        right: 0,
                        bottom: -10,
                    },
                }
            };
        }
    }));
});

//Reversed Bar Chart
document.addEventListener("alpine:init", () => {
    Alpine.data("reversedBarApp", () => ({
        series: [{
            data: [400, 430, 448, 470, 540, 580, 690]
        }],
        labels: ['June', 'July', 'August', 'September', 'October', 'November', 'December'],
        init() {
            // Initial chart render
            this.renderChart();

            // Reload chart on window resize
            window.addEventListener('resize', this.reloadChart.bind(this));
        },
        renderChart() {
            // Destroy previous instance if exists
            if (this.reversedBarChart)
                this.reversedBarChart.destroy();

            // Initialize new chart
            this.reversedBarChart = new ApexCharts(this.$refs.reversedBarChart, this.options);
            this.reversedBarChart.render();
        },
        reloadChart() {
            // Handle the logic for resizing
            this.renderChart(); // Re-render chart on resize
        },
        get options() {
            return {
                series: this.series,
                chart: {
                    height: 300,
                    type: "bar",
                },
                annotations: {
                    xaxis: [{
                        x: 500,
                        borderColor: '#00E396',
                        label: {
                            borderColor: '#00E396',
                            style: {
                                color: '#fff',
                                background: '#00E396',
                            },
                            text: 'X annotation',
                        }
                    }],
                    yaxis: [{
                        y: 'July',
                        y2: 'September',
                        label: {
                            text: 'Y annotation'
                        }
                    }]
                },
                colors: getColorCodes(this.$refs.reversedBarChart.dataset),
                plotOptions: {
                    bar: {
                        horizontal: true,
                    }
                },
                dataLabels: {
                    enabled: true
                },
                xaxis: {
                    categories: this.labels,
                },
                grid: {
                    xaxis: {
                        lines: {
                            show: true
                        }
                    }
                },
                yaxis: {
                    reversed: true,
                    axisTicks: {
                        show: true
                    }
                }
            };
        }
    }));
});

//Patterned Bar Chart
document.addEventListener("alpine:init", () => {
    Alpine.data("patternedBarApp", () => ({
        series: [{
            name: 'Marine Sprite',
            data: [44, 55, 41, 37, 22, 43, 21]
        }, {
            name: 'Striking Calf',
            data: [53, 32, 33, 52, 13, 43, 32]
        }, {
            name: 'Tank Picture',
            data: [12, 17, 11, 9, 15, 11, 20]
        }, {
            name: 'Bucket Slope',
            data: [9, 7, 5, 8, 6, 9, 4]
        }],
        labels: [2008, 2009, 2010, 2011, 2012, 2013, 2014],
        init() {
            // Initial chart render
            this.renderChart();

            // Reload chart on window resize
            window.addEventListener('resize', this.reloadChart.bind(this));
        },
        renderChart() {
            // Destroy previous instance if exists
            if (this.patternedBarChart)
                this.patternedBarChart.destroy();

            // Initialize new chart
            this.patternedBarChart = new ApexCharts(this.$refs.patternedBarChart, this.options);
            this.patternedBarChart.render();
        },
        reloadChart() {
            // Handle the logic for resizing
            this.renderChart(); // Re-render chart on resize
        },
        get options() {
            return {
                series: this.series,
                chart: {
                    height: 300,
                    type: "bar",
                    stacked: true,
                    dropShadow: {
                        enabled: true,
                        blur: 1,
                        opacity: 0.25
                    }
                },
                plotOptions: {
                    bar: {
                        horizontal: true,
                        barHeight: '60%',
                    },
                },
                dataLabels: {
                    enabled: false
                },
                stroke: {
                    width: 2,
                },
                title: {
                    text: 'Compare Sales Strategy'
                },
                xaxis: {
                    categories: this.labels,
                },
                colors: getColorCodes(this.$refs.patternedBarChart.dataset),
                yaxis: {
                    title: {
                        text: undefined
                    },
                },
                tooltip: {
                    shared: false,
                    y: {
                        formatter: function (val) {
                            return val + "K"
                        }
                    }
                },
                fill: {
                    type: 'pattern',
                    opacity: 1,
                    pattern: {
                        style: ['circles', 'slantedLines', 'verticalLines', 'horizontalLines'], // string or array of strings

                    }
                },
                states: {
                    hover: {
                        filter: 'none'
                    }
                },
                legend: {
                    position: 'right',
                    offsetY: 40
                }
            };
        }
    }));
});
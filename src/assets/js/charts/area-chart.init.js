import { getColorCodes } from "../helpers/helper.js";

//basic Charts
document.addEventListener("alpine:init", () => {
    Alpine.data("basicAreaApp", () => ({
        series: [{
            name: 'series1',
            data: [31, 40, 28, 51, 42, 109, 100]
        }],
        labels: ['01 Jan', '02 Jan', '03 Jan', '04 Jan', '05 Jan', '06 Jan', '07 Jan', '08 Jan', '09 Jan', '10 Jan', '11 Jan', '12 Jan'],
        init() {
            // Initial chart render
            this.renderChart();

            // Reload chart on window resize
            window.addEventListener('resize', this.reloadChart.bind(this));
        },
        renderChart() {
            // Destroy previous instance if exists
            if (this.basicAreaChart) {
                this.basicAreaChart.destroy();
            }

            // Initialize new chart
            this.basicAreaChart = new ApexCharts(this.$refs.basicAreaChart, this.options);
            this.basicAreaChart.render();
        },
        reloadChart() {
            // Handle the logic for resizing
            this.renderChart(); // Re-render chart on resize
        },
        get options() {
            return {
                series: this.series,
                chart: {
                    defaultLocale: "en",
                    height: 300,
                    type: "area",
                    zoom: {
                        enabled: false
                    },
                },
                dataLabels: {
                    enabled: false
                },
                stroke: {
                    width: [5, 7, 5],
                    curve: 'straight',
                    dashArray: [0, 8, 5]
                },
                title: {
                    text: 'Page Statistics',
                    align: 'left'
                },
                legend: {
                    tooltipHoverFormatter: function (val, opts) {
                        return val + ' - <strong>' + opts.w.globals.series[opts.seriesIndex][opts.dataPointIndex] + '</strong>'
                    }
                },
                markers: {
                    size: 0,
                    hover: {
                        sizeOffset: 6
                    }
                },
                grid: {
                    padding: {
                        top: -20,
                        right: 0,
                        bottom: 0,
                    },
                },
                tooltip: {
                    y: [
                        {
                            title: {
                                formatter: function (val) {
                                    return val + " (mins)"
                                }
                            }
                        },
                        {
                            title: {
                                formatter: function (val) {
                                    return val + " per session"
                                }
                            }
                        },
                        {
                            title: {
                                formatter: function (val) {
                                    return val;
                                }
                            }
                        }
                    ]
                },
                colors: getColorCodes(this.$refs.basicAreaChart.dataset),
            };
        },
    }));
});


//spline Area Chart
document.addEventListener("alpine:init", () => {
    Alpine.data("splineAreaApp", () => ({
        series: [{
            name: 'series1',
            data: [31, 40, 28, 51, 42, 109, 100]
        }, {
            name: 'series2',
            data: [11, 32, 45, 32, 34, 52, 41]
        }],
        init() {

            // Initial chart render
            this.renderChart();

            // Reload chart on window resize
            window.addEventListener('resize', this.reloadChart.bind(this));
        },
        renderChart() {
            // Destroy previous instance if exists
            if (this.splineAreaChart) {
                this.splineAreaChart.destroy();
            }

            // Initialize new chart
            this.splineAreaChart = new ApexCharts(this.$refs.splineAreaChart, this.options);
            this.splineAreaChart.render();
        },
        reloadChart() {
            // Handle the logic for resizing
            this.renderChart(); // Re-render chart on resize
        },
        get options() {
            return {
                series: this.series,
                chart: {
                    defaultLocale: "en",
                    height: 300,
                    type: "area",
                    zoom: {
                        enabled: false
                    },
                },
                dataLabels: {
                    enabled: false
                },
                stroke: {
                    curve: 'smooth'
                },
                xaxis: {
                    type: 'datetime',
                    categories: ["2024-06-19T00:00:00.000Z", "2024-06-19T01:30:00.000Z", "2024-06-19T02:30:00.000Z", "2024-06-19T03:30:00.000Z", "2024-06-19T04:30:00.000Z", "2024-06-19T05:30:00.000Z", "2024-06-19T06:30:00.000Z"]
                },
                tooltip: {
                    x: {
                        format: 'dd/MM/yy HH:mm'
                    },
                },
                colors: getColorCodes(this.$refs.splineAreaChart.dataset),
            };
        },
    }));
});

//Negative Area Chart
document.addEventListener("alpine:init", () => {
    Alpine.data("negativeAreaApp", () => ({
        series: [{
            name: 'north',
            data: [{
                x: 1996,
                y: 322
            },
            {
                x: 1997,
                y: 324
            },
            {
                x: 1998,
                y: 329
            },
            {
                x: 1999,
                y: 342
            },
            {
                x: 2000,
                y: 348
            },
            {
                x: 2001,
                y: 334
            },
            {
                x: 2002,
                y: 325
            },
            {
                x: 2003,
                y: 316
            },
            {
                x: 2004,
                y: 318
            },
            {
                x: 2005,
                y: 330
            },
            {
                x: 2006,
                y: 355
            },
            {
                x: 2007,
                y: 366
            },
            {
                x: 2008,
                y: 337
            },
            {
                x: 2009,
                y: 352
            },
            {
                x: 2010,
                y: 377
            },
            {
                x: 2011,
                y: 383
            },
            {
                x: 2012,
                y: 344
            },
            {
                x: 2013,
                y: 366
            },
            {
                x: 2014,
                y: 389
            },
            {
                x: 2015,
                y: 334
            }
            ]
        }, {
            name: 'south',
            data: [
                {
                    x: 1996,
                    y: 162
                },
                {
                    x: 1997,
                    y: 90
                },
                {
                    x: 1998,
                    y: 50
                },
                {
                    x: 1999,
                    y: 77
                },
                {
                    x: 2000,
                    y: 35
                },
                {
                    x: 2001,
                    y: -45
                },
                {
                    x: 2002,
                    y: -88
                },
                {
                    x: 2003,
                    y: -120
                },
                {
                    x: 2004,
                    y: -156
                },
                {
                    x: 2005,
                    y: -123
                },
                {
                    x: 2006,
                    y: -88
                },
                {
                    x: 2007,
                    y: -66
                },
                {
                    x: 2008,
                    y: -45
                },
                {
                    x: 2009,
                    y: -29
                },
                {
                    x: 2010,
                    y: -45
                },
                {
                    x: 2011,
                    y: -88
                },
                {
                    x: 2012,
                    y: -132
                },
                {
                    x: 2013,
                    y: -146
                },
                {
                    x: 2014,
                    y: -169
                },
                {
                    x: 2015,
                    y: -184
                }
            ]
        }],
        init() {
            // Initial chart render
            this.renderChart();

            // Reload chart on window resize
            window.addEventListener('resize', this.reloadChart.bind(this));
        },
        renderChart() {
            // Destroy previous instance if exists
            if (this.negativeAreaChart) {
                this.negativeAreaChart.destroy();
            }

            // Initialize new chart
            this.negativeAreaChart = new ApexCharts(this.$refs.negativeAreaChart, this.options);
            this.negativeAreaChart.render();
        },
        reloadChart() {
            // Handle the logic for resizing
            this.renderChart(); // Re-render chart on resize
        },
        get options() {
            return {
                series: this.series,
                chart: {
                    defaultLocale: "en",
                    height: 300,
                    type: "area",
                },
                dataLabels: {
                    enabled: false
                },
                stroke: {
                    curve: 'straight'
                },
                title: {
                    text: 'Area with Negative Values',
                    align: 'left',
                    style: {
                        fontSize: '14px'
                    }
                },
                xaxis: {
                    type: 'datetime',
                    axisBorder: {
                        show: false
                    },
                    axisTicks: {
                        show: false
                    }
                },
                yaxis: {
                    tickAmount: 4,
                    floating: false,

                    labels: {
                        style: {
                            colors: '#8e8da4',
                        },
                        offsetY: -7,
                        offsetX: 0,
                    },
                    axisBorder: {
                        show: false,
                    },
                    axisTicks: {
                        show: false
                    }
                },
                fill: {
                    opacity: 0.5
                },
                tooltip: {
                    x: {
                        format: "yyyy",
                    },
                    fixed: {
                        enabled: false,
                        position: 'topRight'
                    }
                },
                grid: {
                    yaxis: {
                        lines: {
                            offsetX: -30
                        }
                    },
                    padding: {
                        left: 20
                    }
                },
                colors: getColorCodes(this.$refs.negativeAreaChart.dataset),
            };
        }
    }));
});

//Stacked Area Chart
var generateDayWiseTimeSeries = function (baseVal, count, yRange) {
    var i = 0;
    var series = [];
    while (i < count) {
        var x = baseVal;
        var y = Math.floor(Math.random() * (yRange.max - yRange.min + 1)) + yRange.min;

        series.push([x, y]);
        baseVal += 86400000;
        i++;
    }
    return series;
}
document.addEventListener("alpine:init", () => {
    Alpine.data("stackedAreaApp", () => ({
        series: [
            {
                name: 'South',
                data: generateDayWiseTimeSeries(new Date('11 Feb 2024 GMT').getTime(), 20, {
                    min: 10,
                    max: 60
                })
            },
            {
                name: 'North',
                data: generateDayWiseTimeSeries(new Date('11 Feb 2024 GMT').getTime(), 20, {
                    min: 10,
                    max: 20
                })
            },
            {
                name: 'Central',
                data: generateDayWiseTimeSeries(new Date('11 Feb 2024 GMT').getTime(), 20, {
                    min: 10,
                    max: 15
                })
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
            if (this.stackedAreaChart)
                this.stackedAreaChart.destroy();

            // Initialize new chart
            this.stackedAreaChart = new ApexCharts(this.$refs.stackedAreaChart, this.options);
            this.stackedAreaChart.render();
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
                    type: "area",
                    stacked: true,
                    events: {
                        selection: function (chart, e) {
                            console.log(new Date(e.xaxis.min))
                        }
                    },
                },
                colors: getColorCodes(this.$refs.stackedAreaChart.dataset),
                dataLabels: {
                    enabled: false
                },
                stroke: {
                    curve: 'smooth'
                },
                fill: {
                    type: 'gradient',
                    gradient: {
                        opacityFrom: 0.6,
                        opacityTo: 0.8,
                    }
                },
                legend: {
                    position: 'top',
                    horizontalAlign: 'left'
                },
                xaxis: {
                    type: 'datetime'
                },
            };
        }
    }));
});

//Missing / Null values Area Chart
document.addEventListener("alpine:init", () => {
    Alpine.data("missingAreaApp", () => ({
        series: [{
            name: 'Network',
            data: [{
                x: 'Dec 23 2017',
                y: null
            },
            {
                x: 'Dec 24 2017',
                y: 44
            },
            {
                x: 'Dec 25 2017',
                y: 31
            },
            {
                x: 'Dec 26 2017',
                y: 38
            },
            {
                x: 'Dec 27 2017',
                y: null
            },
            {
                x: 'Dec 28 2017',
                y: 32
            },
            {
                x: 'Dec 29 2017',
                y: 55
            },
            {
                x: 'Dec 30 2017',
                y: 51
            },
            {
                x: 'Dec 31 2017',
                y: 67
            },
            {
                x: 'Jan 01 2018',
                y: 22
            },
            {
                x: 'Jan 02 2018',
                y: 34
            },
            {
                x: 'Jan 03 2018',
                y: null
            },
            {
                x: 'Jan 04 2018',
                y: null
            },
            {
                x: 'Jan 05 2018',
                y: 11
            },
            {
                x: 'Jan 06 2018',
                y: 4
            },
            {
                x: 'Jan 07 2018',
                y: 15,
            },
            {
                x: 'Jan 08 2018',
                y: null
            },
            {
                x: 'Jan 09 2018',
                y: 9
            },
            {
                x: 'Jan 10 2018',
                y: 34
            },
            {
                x: 'Jan 11 2018',
                y: null
            },
            {
                x: 'Jan 12 2018',
                y: null
            },
            {
                x: 'Jan 13 2018',
                y: 13
            },
            {
                x: 'Jan 14 2018',
                y: null
            }
            ],
        }],
        init() {
            // Initial chart render
            this.renderChart();

            // Reload chart on window resize
            window.addEventListener('resize', this.reloadChart.bind(this));
        },
        renderChart() {
            // Destroy previous instance if exists
            if (this.missingAreaChart)
                this.missingAreaChart.destroy();

            // Initialize new chart
            this.missingAreaChart = new ApexCharts(this.$refs.missingAreaChart, this.options);
            this.missingAreaChart.render();
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
                    type: "area",
                    animations: {
                        enabled: false
                    },
                    zoom: {
                        enabled: false
                    },
                },
                dataLabels: {
                    enabled: false
                },
                colors: getColorCodes(this.$refs.missingAreaChart.dataset),
                stroke: {
                    curve: 'straight'
                },
                fill: {
                    opacity: 0.8,
                    type: 'pattern',
                    pattern: {
                        style: ['verticalLines', 'horizontalLines'],
                        width: 5,
                        height: 6
                    },
                },
                markers: {
                    size: 5,
                    hover: {
                        size: 9
                    }
                },
                title: {
                    text: 'Network Monitoring',
                },
                tooltip: {
                    intersect: true,
                    shared: false
                },
                theme: {
                    palette: 'palette1'
                },
                xaxis: {
                    type: 'datetime',
                },
                yaxis: {
                    title: {
                        text: 'Bytes Received'
                    }
                }
            };
        }
    }));
});
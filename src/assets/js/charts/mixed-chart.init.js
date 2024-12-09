import { getColorCodes } from "../helpers/helper.js";

//line column Chart
document.addEventListener("alpine:init", () => {
    Alpine.data("lineColumnApp", () => ({
        series: [{
            name: 'Website Blog',
            type: 'column',
            data: [440, 505, 414, 671, 227, 413, 201, 352, 752, 320, 257, 160]
        }, {
            name: 'Social Media',
            type: 'line',
            data: [23, 42, 35, 27, 43, 22, 17, 31, 22, 22, 12, 16]
        }],
        labels: ['01 Jan 2001', '02 Jan 2001', '03 Jan 2001', '04 Jan 2001', '05 Jan 2001', '06 Jan 2001', '07 Jan 2001', '08 Jan 2001', '09 Jan 2001', '10 Jan 2001', '11 Jan 2001', '12 Jan 2001'],
        init() {
            // Initial chart render
            this.renderChart();

            // Reload chart on window resize
            window.addEventListener('resize', this.reloadChart.bind(this));
        },
        renderChart() {
            // Destroy previous instance if exists
            if (this.lineColumnChart)
                this.lineColumnChart.destroy();

            // Initialize new chart
            this.lineColumnChart = new ApexCharts(this.$refs.lineColumnChart, this.options);
            this.lineColumnChart.render();
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
                    type: "line",
                },
                stroke: {
                    width: [0, 4]
                },
                title: {
                    text: 'Traffic Sources'
                },
                dataLabels: {
                    enabled: true,
                    enabledOnSeries: [1]
                },
                colors: getColorCodes(this.$refs.lineColumnChart.dataset),
                labels: this.labels,
                xaxis: {
                    type: 'datetime'
                },
                yaxis: [{
                    title: {
                        text: 'Website Blog',
                    },

                }, {
                    opposite: true,
                    title: {
                        text: 'Social Media'
                    }
                }],
                grid: {
                    padding: {
                        top: 0,
                        right: 0,
                        bottom: 0,
                    },
                }
            };
        }
    }));
});

//line Area Chart
document.addEventListener("alpine:init", () => {
    Alpine.data("lineAreaApp", () => ({
        series: [{
            name: 'TEAM A',
            type: 'area',
            data: [44, 55, 31, 47, 31, 43, 26, 41, 31, 47, 33]
        }, {
            name: 'TEAM B',
            type: 'line',
            data: [55, 69, 45, 61, 43, 54, 37, 52, 44, 61, 43]
        }],
        labels: ['Dec 01', 'Dec 02', 'Dec 03', 'Dec 04', 'Dec 05', 'Dec 06', 'Dec 07', 'Dec 08', 'Dec 09 ', 'Dec 10', 'Dec 11'],
        init() {
            // Initial chart render
            this.renderChart();

            // Reload chart on window resize
            window.addEventListener('resize', this.reloadChart.bind(this));
        },
        renderChart() {
            // Destroy previous instance if exists
            if (this.lineAreaChart)
                this.lineAreaChart.destroy();

            // Initialize new chart
            this.lineAreaChart = new ApexCharts(this.$refs.lineAreaChart, this.options);
            this.lineAreaChart.render();
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
                    type: "line",
                },
                stroke: {
                    curve: 'smooth'
                },
                fill: {
                    type: 'solid',
                    opacity: [0.35, 1],
                },
                labels: this.labels,
                markers: {
                    size: 0
                },
                yaxis: [
                    {
                        title: {
                            text: 'Series A',
                        },
                    },
                    {
                        opposite: true,
                        title: {
                            text: 'Series B',
                        },
                    },
                ],
                colors: getColorCodes(this.$refs.lineAreaChart.dataset),
                tooltip: {
                    shared: true,
                    intersect: false,
                    y: {
                        formatter: function (y) {
                            if (typeof y !== "undefined") {
                                return y.toFixed(0) + " points";
                            }
                            return y;
                        }
                    }
                },
                grid: {
                    padding: {
                        top: 0,
                        right: 0,
                        bottom: 0,
                    },
                }
            };
        }
    }));
});

//Line Column Area Chart
document.addEventListener("alpine:init", () => {
    Alpine.data("lineColumnAreaApp", () => ({
        series: [{
            name: 'TEAM A',
            type: 'column',
            data: [23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30]
        }, {
            name: 'TEAM B',
            type: 'area',
            data: [44, 55, 41, 67, 22, 43, 21, 41, 56, 27, 43]
        }, {
            name: 'TEAM C',
            type: 'line',
            data: [30, 25, 36, 30, 45, 35, 64, 52, 59, 36, 39]
        }],
        labels: ['01/01/2003', '02/01/2003', '03/01/2003', '04/01/2003', '05/01/2003', '06/01/2003', '07/01/2003',
            '08/01/2003', '09/01/2003', '10/01/2003', '11/01/2003'
        ],
        init() {
            // Initial chart render
            this.renderChart();

            // Reload chart on window resize
            window.addEventListener('resize', this.reloadChart.bind(this));
        },
        renderChart() {
            // Destroy previous instance if exists
            if (this.lineColumnAreaChart)
                this.lineColumnAreaChart.destroy();

            // Initialize new chart
            this.lineColumnAreaChart = new ApexCharts(this.$refs.lineColumnAreaChart, this.options);
            this.lineColumnAreaChart.render();
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
                    type: "line",
                    stacked: false,
                },
                stroke: {
                    width: [0, 2, 5],
                    curve: 'smooth'
                },
                plotOptions: {
                    bar: {
                        columnWidth: '50%'
                    }
                },
                labels: this.labels,
                fill: {
                    opacity: [0.85, 0.25, 1],
                    gradient: {
                        inverseColors: false,
                        shade: 'light',
                        type: "vertical",
                        opacityFrom: 0.85,
                        opacityTo: 0.55,
                        stops: [0, 100, 100, 100]
                    }
                },
                colors: getColorCodes(this.$refs.lineColumnAreaChart.dataset),
                markers: {
                    size: 0
                },
                xaxis: {
                    type: 'datetime'
                },
                yaxis: {
                    title: {
                        text: 'Points',
                    },
                    min: 0
                },
                tooltip: {
                    shared: true,
                    intersect: false,
                    y: {
                        formatter: function (y) {
                            if (typeof y !== "undefined") {
                                return y.toFixed(0) + " points";
                            }
                            return y;

                        }
                    }
                },
                grid: {
                    padding: {
                        top: 0,
                        right: 0,
                        bottom: 0,
                    },
                }
            };
        }
    }));
});

//Line Scatter Chart
document.addEventListener("alpine:init", () => {
    Alpine.data("lineScatterApp", () => ({
        series: [{
            name: 'Points',
            type: 'scatter',

            //2.14, 2.15, 3.61, 4.93, 2.4, 2.7, 4.2, 5.4, 6.1, 8.3
            data: [{
                x: 1,
                y: 2.14
            }, {
                x: 1.2,
                y: 2.19
            }, {
                x: 1.8,
                y: 2.43
            }, {
                x: 2.3,
                y: 3.8
            }, {
                x: 2.6,
                y: 4.14
            }, {
                x: 2.9,
                y: 5.4
            }, {
                x: 3.2,
                y: 5.8
            }, {
                x: 3.8,
                y: 6.04
            }, {
                x: 4.55,
                y: 6.77
            }, {
                x: 4.9,
                y: 8.1
            }, {
                x: 5.1,
                y: 9.4
            }, {
                x: 7.1,
                y: 7.14
            }, {
                x: 9.18,
                y: 8.4
            }]
        }, {
            name: 'Line',
            type: 'line',
            data: [{
                x: 1,
                y: 2
            }, {
                x: 2,
                y: 3
            }, {
                x: 3,
                y: 4
            }, {
                x: 4,
                y: 5
            }, {
                x: 5,
                y: 6
            }, {
                x: 6,
                y: 7
            }, {
                x: 7,
                y: 8
            }, {
                x: 8,
                y: 9
            }, {
                x: 9,
                y: 10
            }, {
                x: 10,
                y: 11
            }]
        }],
        init() {
            // Initial chart render
            this.renderChart();

            // Reload chart on window resize
            window.addEventListener('resize', this.reloadChart.bind(this));
        },
        renderChart() {
            // Destroy previous instance if exists
            if (this.lineScatterChart)
                this.lineScatterChart.destroy();
            // Initialize new chart
            this.lineScatterChart = new ApexCharts(this.$refs.lineScatterChart, this.options);
            this.lineScatterChart.render();
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
                    type: "line",
                },
                fill: {
                    type: 'solid',
                },
                markers: {
                    size: [6, 0]
                },
                tooltip: {
                    shared: false,
                    intersect: true,
                },
                colors: getColorCodes(this.$refs.lineScatterChart.dataset),
                legend: {
                    show: false
                },
                xaxis: {
                    type: 'numeric',
                    min: 0,
                    max: 12,
                    tickAmount: 12
                },
                grid: {
                    padding: {
                        top: 0,
                        right: 0,
                        bottom: 0,
                    },
                }
            };
        }
    }));
});
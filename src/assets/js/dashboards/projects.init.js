import { getColorCodes } from "../helpers/helper";

//basic Charts
document.addEventListener("alpine:init", () => {
    Alpine.data("projectStatusApp", () => ({
        series: [{
            name: 'Earnings',
            data: [67, 48, 85, 51, 93, 109, 116]
        }],
        labels: ['Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
        init() {
            // Initial chart render
            this.renderChart();

            // Reload chart on window resize
            window.addEventListener('resize', this.reloadChart.bind(this));
        },
        renderChart() {
            // Destroy previous instance if exists
            if (this.projectStatusChart) {
                this.projectStatusChart.destroy();
            }

            // Initialize new chart
            this.projectStatusChart = new ApexCharts(this.$refs.projectStatusChart, this.options);
            this.projectStatusChart.render();
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
                    height: 125,
                    type: "area",
                    sparkline: { enabled: !0 },
                    zoom: {
                        enabled: false
                    },
                },
                dataLabels: {
                    enabled: false
                },
                stroke: {
                    width: 3,
                    curve: 'smooth',
                    dashArray: 2
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
                labels: this.labels,
                yaxis: {
                    title: {
                        text: 'Growth',
                    },
                    labels: {
                        formatter: function (y) {
                            return "$" + y.toFixed(0) + "k";
                        }
                    }
                },
                grid: {
                    padding: {
                        top: -20,
                        right: 0,
                        bottom: 0,
                    },
                },
                colors: getColorCodes(this.$refs.projectStatusChart.dataset),
            };
        }
    }));
});

//Donut with Pattern Chart
document.addEventListener("alpine:init", () => {
    Alpine.data("patternDonutApp", () => ({
        series: [55, 33, 46],
        labels: ["Afternoon", "Evening", "Morning"],
        init() {
            // Initial chart render
            this.renderChart();

            // Reload chart on window resize
            window.addEventListener('resize', this.reloadChart.bind(this));
        },
        renderChart() {
            // Destroy previous instance if exists
            if (this.patternDonutChart)
                this.patternDonutChart.destroy();

            // Initialize new chart
            this.patternDonutChart = new ApexCharts(this.$refs.patternDonutChart, this.options);
            this.patternDonutChart.render();
        },
        reloadChart() {
            // Handle the logic for resizing
            this.renderChart(); // Re-render chart on resize
        },
        get options() {
            return {
                series: this.series,
                chart: {
                    height: 240,
                    type: "donut",
                    dropShadow: {
                        enabled: true,
                        color: '#111',
                        top: -1,
                        left: 3,
                        blur: 3,
                        opacity: 0.2
                    }
                },
                stroke: {
                    width: 0,
                },
                plotOptions: {
                    pie: {
                        donut: {
                            labels: {
                                show: false,
                            }
                        }
                    }
                },
                labels: this.labels,
                dataLabels: {
                    enabled: false,
                },
                fill: {
                    type: 'pattern',
                    pattern: {
                        style: 'squares',
                    },
                },
                states: {
                    hover: {
                        filter: 'none'
                    }
                },
                theme: {
                    palette: 'palette2'
                },
                colors: getColorCodes(this.$refs.patternDonutChart.dataset),
                legend: {
                    show: false
                }
            };
        }
    }));
});

document.addEventListener("alpine:init", () => {
    Alpine.data("simpleBubbleApp", () => ({
        series: [{
            name: 'Bubble1',
            data: generateData(new Date('11 Feb 2017 GMT').getTime(), 4, {
                min: 1,
                max: 9
            })
        },
        {
            name: 'Bubble2',
            data: generateData(new Date('11 Feb 2017 GMT').getTime(), 4, {
                min: 1,
                max: 9
            })
        },
        {
            name: 'Bubble3',
            data: generateData(new Date('11 Feb 2017 GMT').getTime(), 4, {
                min: 1,
                max: 9
            })
        },
        {
            name: 'Bubble4',
            data: generateData(new Date('11 Feb 2017 GMT').getTime(), 4, {
                min: 1,
                max: 9
            })
        }],
        init() {
            // Initial chart render
            this.renderChart();

            // Reload chart on window resize
            window.addEventListener('resize', this.reloadChart.bind(this));
        },
        renderChart() {
            // Destroy previous instance if exists
            if (this.simpleBubbleChart)
                this.simpleBubbleChart.destroy();

            // Initialize new chart
            this.simpleBubbleChart = new ApexCharts(this.$refs.simpleBubbleChart, this.options);
            this.simpleBubbleChart.render();
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
                    type: "bubble",
                },
                dataLabels: {
                    enabled: false
                },
                fill: {
                    opacity: 0.8
                },
                colors: getColorCodes(this.$refs.simpleBubbleChart.dataset),
                title: {
                    text: 'Simple Bubble Chart'
                },
                xaxis: {
                    tickAmount: 12,
                    type: 'category',
                },
                yaxis: {
                    max: 10
                }
            };
        }
    }));
});

//My Task 1
document.addEventListener("alpine:init", () => {
    Alpine.data("myTask1App", () => ({
        series: [],
        labels: ['[Progress]'],
        init() {
            this.series = [parseInt(this.$el.dataset.series)];
            let myTask1Chart = new ApexCharts(this.$refs.myTask1Chart, this.options);
            myTask1Chart.render();
        },
        get options() {
            return {
                series: this.series,
                chart: {
                    height: 60,
                    width: 50,
                    type: "radialBar",
                    sparkline: { enabled: !0 },
                },
                colors: getColorCodes(this.$refs.myTask1Chart.dataset),
                plotOptions: {
                    radialBar: {
                        dataLabels: {
                            show: false
                        },
                        hollow: {
                            size: '20%',
                        }
                    },
                },
                labels: this.labels,
            };
        }
    }));
});
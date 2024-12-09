import { getColorCodes } from "../helpers/helper.js";

//Basic Chart
document.addEventListener("alpine:init", () => {
    Alpine.data("basicRadarApp", () => ({
        series: [{
            name: 'Series 1',
            data: [80, 50, 30, 40, 100, 20],
        }],
        labels: ['January', 'February', 'March', 'April', 'May', 'June'],
        init() {
            // Initial chart render
            this.renderChart();

            // Reload chart on window resize
            window.addEventListener('resize', this.reloadChart.bind(this));
        },
        renderChart() {
            // Destroy previous instance if exists
            if (this.basicRadarChart)
                this.basicRadarChart.destroy();

            // Initialize new chart
            this.basicRadarChart = new ApexCharts(this.$refs.basicRadarChart, this.options);
            this.basicRadarChart.render();
        },
        reloadChart() {
            // Handle the logic for resizing
            this.renderChart(); // Re-render chart on resize
        },
        get options() {
            return {
                series: this.series,
                chart: {
                    height: 370,
                    type: "radar",
                },
                colors: getColorCodes(this.$refs.basicRadarChart.dataset),
                title: {
                    text: 'Basic Radar Chart'
                },
                xaxis: {
                    categories: this.labels,
                }
            };
        }
    }));
});

//Radar – Multiple Series Chart
document.addEventListener("alpine:init", () => {
    Alpine.data("multipleRadarApp", () => ({
        series: [{
            name: 'Series 1',
            data: [80, 50, 30, 40, 100, 20],
        }, {
            name: 'Series 2',
            data: [20, 30, 40, 80, 20, 80],
        }, {
            name: 'Series 3',
            data: [44, 76, 78, 13, 43, 10],
        }],
        labels: ['2011', '2012', '2013', '2014', '2015', '2016'],
        init() {
            // Initial chart render
            this.renderChart();

            // Reload chart on window resize
            window.addEventListener('resize', this.reloadChart.bind(this));
        },
        renderChart() {
            // Destroy previous instance if exists
            if (this.multipleRadarChart)
                this.multipleRadarChart.destroy();

            // Initialize new chart
            this.multipleRadarChart = new ApexCharts(this.$refs.multipleRadarChart, this.options);
            this.multipleRadarChart.render();
        },
        reloadChart() {
            // Handle the logic for resizing
            this.renderChart(); // Re-render chart on resize
        },
        get options() {
            return {
                series: this.series,
                chart: {
                    height: 370,
                    type: 'radar',
                    dropShadow: {
                        enabled: true,
                        blur: 1,
                        left: 1,
                        top: 1
                    }
                },
                title: {
                    text: 'Radar Chart - Multi Series'
                },
                colors: getColorCodes(this.$refs.multipleRadarChart.dataset),
                stroke: {
                    width: 2
                },
                fill: {
                    opacity: 0.1
                },
                markers: {
                    size: 0
                },
                xaxis: {
                    categories: this.labels,
                }
            };
        }
    }));
});

//Radar with Polygon-fill Chart
document.addEventListener("alpine:init", () => {
    Alpine.data("polygonRadarApp", () => ({
        series: [{
            name: 'Series 1',
            data: [20, 100, 40, 30, 50, 80, 33],
        }],
        labels: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
        init() {
            // Initial chart render
            this.renderChart();

            // Reload chart on window resize
            window.addEventListener('resize', this.reloadChart.bind(this));
        },
        renderChart() {
            // Destroy previous instance if exists
            if (this.polygonRadarChart)
                this.polygonRadarChart.destroy();

            // Initialize new chart
            this.polygonRadarChart = new ApexCharts(this.$refs.polygonRadarChart, this.options);
            this.polygonRadarChart.render();
        },
        reloadChart() {
            // Handle the logic for resizing
            this.renderChart(); // Re-render chart on resize
        },
        get options() {
            return {
                series: this.series,
                chart: {
                    height: 330,
                    type: 'radar',
                    dropShadow: {
                        enabled: true,
                        blur: 1,
                        left: 1,
                        top: 1
                    }
                },
                dataLabels: {
                    enabled: true
                },
                plotOptions: {
                    radar: {
                        size: 140,
                        polygons: {
                            strokeColors: '#e9e9e9',
                            fill: {
                                colors: ['#f8f8f8', '#fff']
                            }
                        }
                    }
                },
                title: {
                    text: 'Radar with Polygon Fill'
                },
                colors: getColorCodes(this.$refs.polygonRadarChart.dataset),
                markers: {
                    size: 4,
                    colors: ['#fff'],
                    strokeColor: '#FF4560',
                    strokeWidth: 2,
                },
                tooltip: {
                    y: {
                        formatter: function (val) {
                            return val
                        }
                    }
                },
                xaxis: {
                    categories: this.labels,
                },
                yaxis: {
                    tickAmount: 7,
                    labels: {
                        formatter: function (val, i) {
                            if (i % 2 === 0) {
                                return val
                            } else {
                                return ''
                            }
                        }
                    }
                }
            };
        }
    }));
});
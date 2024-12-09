import { getColorCodes } from "../helpers/helper.js";

//Basic Chart
document.addEventListener("alpine:init", () => {
    Alpine.data("slopeBasicApp", () => ({
        series: [
            {
                name: 'Blue',
                data: [
                    {
                        x: 'Jan',
                        y: 43,
                    },
                    {
                        x: 'Feb',
                        y: 58,
                    },
                ],
            },
            {
                name: 'Green',
                data: [
                    {
                        x: 'Jan',
                        y: 33,
                    },
                    {
                        x: 'Feb',
                        y: 38,
                    },
                ],
            },
            {
                name: 'Red',
                data: [
                    {
                        x: 'Jan',
                        y: 55,
                    },
                    {
                        x: 'Feb',
                        y: 21,
                    },
                ],
            },
        ],
        init() {
            // Initial chart render
            this.renderChart();

            // Reload chart on window resize
            window.addEventListener('resize', this.reloadChart.bind(this));
        },
        renderChart() {
            // Destroy previous instance if exists
            if (this.slopeBasicChart) {
                this.slopeBasicChart.destroy();
            }

            // Initialize new chart
            this.slopeBasicChart = new ApexCharts(this.$refs.slopeBasicChart, this.options);
            this.slopeBasicChart.render();
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
                plotOptions: {
                    line: {
                        isSlopeChart: true,
                    },
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


//Multi group Chart
document.addEventListener("alpine:init", () => {
    Alpine.data("slopeMultiGroupApp", () => ({
        series: [
            {
                name: 'Blue',
                data: [
                    {
                        x: 'Category 1',
                        y: 503,
                    },
                    {
                        x: 'Category 2',
                        y: 580,
                    },
                    {
                        x: 'Category 3',
                        y: 135,
                    },
                ],
            },
            {
                name: 'Green',
                data: [
                    {
                        x: 'Category 1',
                        y: 733,
                    },
                    {
                        x: 'Category 2',
                        y: 385,
                    },
                    {
                        x: 'Category 3',
                        y: 715,
                    },
                ],
            },
            {
                name: 'Orange',
                data: [
                    {
                        x: 'Category 1',
                        y: 255,
                    },
                    {
                        x: 'Category 2',
                        y: 211,
                    },
                    {
                        x: 'Category 3',
                        y: 441,
                    },
                ],
            },
            {
                name: 'Red',
                data: [
                    {
                        x: 'Category 1',
                        y: 428,
                    },
                    {
                        x: 'Category 2',
                        y: 749,
                    },
                    {
                        x: 'Category 3',
                        y: 559,
                    },
                ],
            },
        ],
        init() {
            // Initial chart render
            this.renderChart();

            // Reload chart on window resize
            window.addEventListener('resize', this.reloadChart.bind(this));
        },
        renderChart() {
            // Destroy previous instance if exists
            if (this.slopeMultiGroupChart) {
                this.slopeMultiGroupChart.destroy();
            }

            // Initialize new chart
            this.slopeMultiGroupChart = new ApexCharts(this.$refs.slopeMultiGroupChart, this.options);
            this.slopeMultiGroupChart.render();
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
                plotOptions: {
                    line: {
                        isSlopeChart: true,
                    },
                },
                tooltip: {
                    followCursor: true,
                    intersect: false,
                    shared: true,
                },
                colors: getColorCodes(this.$refs.slopeMultiGroupChart.dataset),
                dataLabels: {
                    background: {
                        enabled: true,
                    },
                    formatter(val, opts) {
                        const seriesName = opts.w.config.series[opts.seriesIndex].name
                        return val !== null ? seriesName : ''
                    },
                },
                yaxis: {
                    show: true,
                    labels: {
                        show: true,
                    },
                },
                xaxis: {
                    position: 'bottom',
                },
                legend: {
                    show: true,
                    position: 'top',
                    horizontalAlign: 'left',
                },
                stroke: {
                    width: [2, 3, 4, 2],
                    dashArray: [0, 0, 5, 2],
                    curve: 'smooth',
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
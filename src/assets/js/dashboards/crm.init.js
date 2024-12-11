import { getColorCodes } from "../helpers/helper";

//Sales Analytics Chart
document.addEventListener("alpine:init", () => {
    Alpine.data("salesAnalyticsApp", () => ({
        series: [{
            name: 'Visitor',
            data: [154, 137, 41, 67, 43, 20, 41, 67, 20, 41, 32, 98]
        }, {
            name: 'Add Cart',
            data: [13, 23, 20, 35, 27, 16, 8, 13, 20, 41, 44, 67]
        }, {
            name: 'Check Out',
            data: [11, 54, 15, 21, 14, 24, 15, 21, 20, 41, 54, 35]
        }, {
            name: 'Favorite',
            data: [21, 19, 25, 22, 8, 19, 13, 22, 20, 41, 49, 33]
        }],
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        init() {
            // Initial chart render
            this.renderChart();

            // Reload chart on window resize
            window.addEventListener('resize', this.reloadChart.bind(this));
        },
        renderChart() {
            // Destroy previous instance if exists
            if (this.salesAnalyticsChart)
                this.salesAnalyticsChart.destroy();

            // Initialize new chart
            this.salesAnalyticsChart = new ApexCharts(this.$refs.salesAnalyticsChart, this.options);
            this.salesAnalyticsChart.render();
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
                    toolbar: {
                        show: false
                    },
                    zoom: {
                        enabled: true
                    }
                },
                dataLabels: {
                    enabled: false,
                },
                colors: getColorCodes(this.$refs.salesAnalyticsChart.dataset),
                plotOptions: {
                    bar: {
                        horizontal: false,
                        columnWidth: '35%',
                    },
                },

                xaxis: {
                    categories: this.labels,
                    axisBorder: {
                        show: false,
                    }
                },
                legend: {
                    position: 'top',
                    horizontalAlign: 'right',
                    offsetY: -5,
                },
                grid: {
                    show: true,
                    borderColor: '#90A4AE',
                    strokeDashArray: 2,
                    position: 'back',
                    padding: {
                        top: 10,
                        right: 0,
                    },
                    xaxis: {
                        lines: {
                            show: true
                        }
                    },
                    yaxis: {
                        lines: {
                            show: true
                        }
                    },
                },
                fill: {
                    opacity: 1
                }
            };
        }
    }));
});

//Basic
document.addEventListener("alpine:init", () => {
    Alpine.data("basicRadialbarApp", () => ({
        series: [87.6],
        labels: ['This Month'],
        init() {
            // Fetch color codes first
            this.colorCodes = getColorCodes(this.$refs.basicRadialbarChart.dataset);

            // Initialize the chart with options
            let basicRadialbarChart = new ApexCharts(this.$refs.basicRadialbarChart, this.options);
            basicRadialbarChart.render();
        },
        get options() {
            return {
                series: this.series,
                chart: {
                    height: 300,
                    type: "radialBar",
                },
                colors: getColorCodes(this.$refs.basicRadialbarChart.dataset),
                plotOptions: {
                    radialBar: {
                        hollow: {
                            size: '60%',
                        },
                        track: {
                            background: [this.colorCodes[1]],
                            dropShadow: {
                                enabled: true,
                                top: 0,
                                left: 0,
                                blur: 10,
                                opacity: 0.02
                            }
                        },
                        dataLabels: {
                            name: {
                                fontSize: '15px',
                            },
                            value: {
                                show: true,
                                fontSize: '14px',
                                fontWeight: 700,
                                offsetY: 10,
                                formatter: function (val) {
                                    return '$' + val + 'k'
                                }
                            },
                        }
                    },
                },
                labels: this.labels,
            };
        }
    }));
});
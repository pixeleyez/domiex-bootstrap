import { getColorCodes } from "../helpers/helper.js";

//basic Chart
document.addEventListener("alpine:init", () => {
    Alpine.data("rangeBasicApp", () => ({
        series: [
            {
                name: 'New York Temperature',
                data: [
                    {
                        x: 'Jan',
                        y: [-2, 4]
                    },
                    {
                        x: 'Feb',
                        y: [-1, 6]
                    },
                    {
                        x: 'Mar',
                        y: [3, 10]
                    },
                    {
                        x: 'Apr',
                        y: [8, 16]
                    },
                    {
                        x: 'May',
                        y: [13, 22]
                    },
                    {
                        x: 'Jun',
                        y: [18, 26]
                    },
                    {
                        x: 'Jul',
                        y: [21, 29]
                    },
                    {
                        x: 'Aug',
                        y: [21, 28]
                    },
                    {
                        x: 'Sep',
                        y: [17, 24]
                    },
                    {
                        x: 'Oct',
                        y: [11, 18]
                    },
                    {
                        x: 'Nov',
                        y: [6, 12]
                    },
                    {
                        x: 'Dec',
                        y: [1, 7]
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
            if (this.rangeBasicChart)
                this.rangeBasicChart.destroy();

            // Initialize new chart
            this.rangeBasicChart = new ApexCharts(this.$refs.rangeBasicChart, this.options);
            this.rangeBasicChart.render();
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
                    type: "rangeArea",
                },
                stroke: {
                    curve: 'straight'
                },
                title: {
                    text: 'New York Temperature (all year round)'
                },
                markers: {
                    hover: {
                        sizeOffset: 5
                    }
                },
                colors: getColorCodes(this.$refs.rangeBasicChart.dataset),
                dataLabels: {
                    enabled: false
                },
                yaxis: {
                    labels: {
                        formatter: (val) => {
                            return val + '°C'
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

//Combo Chart
document.addEventListener("alpine:init", () => {
    Alpine.data("rangeComboApp", () => ({
        series: [
            {
                type: 'rangeArea',
                name: 'Team B Range',

                data: [
                    {
                        x: 'Jan',
                        y: [1100, 1900]
                    },
                    {
                        x: 'Feb',
                        y: [1200, 1800]
                    },
                    {
                        x: 'Mar',
                        y: [900, 2900]
                    },
                    {
                        x: 'Apr',
                        y: [1400, 2700]
                    },
                    {
                        x: 'May',
                        y: [2600, 3900]
                    },
                    {
                        x: 'Jun',
                        y: [500, 1700]
                    },
                    {
                        x: 'Jul',
                        y: [1900, 2300]
                    },
                    {
                        x: 'Aug',
                        y: [1000, 1500]
                    }
                ]
            },

            {
                type: 'rangeArea',
                name: 'Team A Range',
                data: [
                    {
                        x: 'Jan',
                        y: [3100, 3400]
                    },
                    {
                        x: 'Feb',
                        y: [4200, 5200]
                    },
                    {
                        x: 'Mar',
                        y: [3900, 4900]
                    },
                    {
                        x: 'Apr',
                        y: [3400, 3900]
                    },
                    {
                        x: 'May',
                        y: [5100, 5900]
                    },
                    {
                        x: 'Jun',
                        y: [5400, 6700]
                    },
                    {
                        x: 'Jul',
                        y: [4300, 4600]
                    },
                    {
                        x: 'Aug',
                        y: [2100, 2900]
                    }
                ]
            },

            {
                type: 'line',
                name: 'Team B Median',
                data: [
                    {
                        x: 'Jan',
                        y: 1500
                    },
                    {
                        x: 'Feb',
                        y: 1700
                    },
                    {
                        x: 'Mar',
                        y: 1900
                    },
                    {
                        x: 'Apr',
                        y: 2200
                    },
                    {
                        x: 'May',
                        y: 3000
                    },
                    {
                        x: 'Jun',
                        y: 1000
                    },
                    {
                        x: 'Jul',
                        y: 2100
                    },
                    {
                        x: 'Aug',
                        y: 1200
                    },
                    {
                        x: 'Sep',
                        y: 1800
                    },
                    {
                        x: 'Oct',
                        y: 2000
                    }
                ]
            },
            {
                type: 'line',
                name: 'Team A Median',
                data: [
                    {
                        x: 'Jan',
                        y: 3300
                    },
                    {
                        x: 'Feb',
                        y: 4900
                    },
                    {
                        x: 'Mar',
                        y: 4300
                    },
                    {
                        x: 'Apr',
                        y: 3700
                    },
                    {
                        x: 'May',
                        y: 5500
                    },
                    {
                        x: 'Jun',
                        y: 5900
                    },
                    {
                        x: 'Jul',
                        y: 4500
                    },
                    {
                        x: 'Aug',
                        y: 2400
                    },
                    {
                        x: 'Sep',
                        y: 2100
                    },
                    {
                        x: 'Oct',
                        y: 1500
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
            if (this.rangeComboChart)
                this.rangeComboChart.destroy();

            // Initialize new chart
            this.rangeComboChart = new ApexCharts(this.$refs.rangeComboChart, this.options);
            this.rangeComboChart.render();
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
                    type: 'rangeArea',
                    animations: {
                        speed: 500
                    }
                },
                colors: getColorCodes(this.$refs.rangeComboChart.dataset),
                dataLabels: {
                    enabled: false
                },
                fill: {
                    opacity: [0.24, 0.24, 1, 1]
                },
                forecastDataPoints: {
                    count: 2
                },
                stroke: {
                    curve: 'straight',
                    width: [0, 0, 2, 2]
                },
                legend: {
                    show: true,
                    customLegendItems: ['Team B', 'Team A'],
                    inverseOrder: true
                },
                title: {
                    text: 'Range Area with Forecast Line (Combo)'
                },
                markers: {
                    hover: {
                        sizeOffset: 5
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
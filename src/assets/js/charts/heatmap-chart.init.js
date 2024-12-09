import { getColorCodes } from "../helpers/helper.js";

//Basic Chart
function generateData(count, yrange) {
    var i = 0;
    var series = [];
    while (i < count) {
        var x = (i + 1).toString();
        var y = Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;

        series.push({
            x: x,
            y: y
        });
        i++;
    }
    return series;
}
document.addEventListener("alpine:init", () => {
    Alpine.data("basicHatmapApp", () => ({
        series: [{
            name: 'Metric1',
            data: generateData(18, {
                min: 0,
                max: 90
            })
        },
        {
            name: 'Metric2',
            data: generateData(18, {
                min: 0,
                max: 90
            })
        },
        {
            name: 'Metric3',
            data: generateData(18, {
                min: 0,
                max: 90
            })
        },
        {
            name: 'Metric4',
            data: generateData(18, {
                min: 0,
                max: 90
            })
        },
        {
            name: 'Metric5',
            data: generateData(18, {
                min: 0,
                max: 90
            })
        },
        {
            name: 'Metric6',
            data: generateData(18, {
                min: 0,
                max: 90
            })
        },
        {
            name: 'Metric7',
            data: generateData(18, {
                min: 0,
                max: 90
            })
        },
        {
            name: 'Metric8',
            data: generateData(18, {
                min: 0,
                max: 90
            })
        },
        {
            name: 'Metric9',
            data: generateData(18, {
                min: 0,
                max: 90
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
            if (this.basicHatmapChart)
                this.basicHatmapChart.destroy();

            // Initialize new chart
            this.basicHatmapChart = new ApexCharts(this.$refs.basicHatmapChart, this.options);
            this.basicHatmapChart.render();
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
                    type: "heatmap",
                },
                dataLabels: {
                    enabled: false
                },
                colors: getColorCodes(this.$refs.basicHatmapChart.dataset),
                title: {
                    text: 'HeatMap Chart (Single color)'
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

//Multiple Colors Chart
document.addEventListener("alpine:init", () => {
    Alpine.data("multiColorHatmapApp", () => ({
        series: [{
            name: 'PE1',
            data: generateData(8, {
                min: 0,
                max: 90
            })
        },
        {
            name: 'PE2',
            data: generateData(8, {
                min: 0,
                max: 90
            })
        },
        {
            name: 'PE3',
            data: generateData(8, {
                min: 0,
                max: 90
            })
        },
        {
            name: 'PE4',
            data: generateData(8, {
                min: 0,
                max: 90
            })
        },
        {
            name: 'PE5',
            data: generateData(8, {
                min: 0,
                max: 90
            })
        },
        {
            name: 'PE6',
            data: generateData(8, {
                min: 0,
                max: 90
            })
        },
        {
            name: 'PE7',
            data: generateData(8, {
                min: 0,
                max: 90
            })
        },
        {
            name: 'PE8',
            data: generateData(8, {
                min: 0,
                max: 90
            })
        },
        {
            name: 'PE9',
            data: generateData(8, {
                min: 0,
                max: 90
            })
        },
        {
            name: 'PE10',
            data: generateData(8, {
                min: 0,
                max: 90
            })
        },
        {
            name: 'PE11',
            data: generateData(8, {
                min: 0,
                max: 90
            })
        },
        {
            name: 'PE12',
            data: generateData(8, {
                min: 0,
                max: 90
            })
        },
        {
            name: 'PE13',
            data: generateData(8, {
                min: 0,
                max: 90
            })
        },
        {
            name: 'PE14',
            data: generateData(8, {
                min: 0,
                max: 90
            })
        },
        {
            name: 'PE15',
            data: generateData(8, {
                min: 0,
                max: 90
            })
        }
        ],
        categories: ['10:00', '10:30', '11:00', '11:30', '12:00', '12:30', '01:00', '01:30'],
        init() {
            // Initial chart render
            this.renderChart();

            // Reload chart on window resize
            window.addEventListener('resize', this.reloadChart.bind(this));
        },
        renderChart() {
            // Destroy previous instance if exists
            if (this.multiColorHatmapChart)
                this.multiColorHatmapChart.destroy();

            // Initialize new chart
            this.multiColorHatmapChart = new ApexCharts(this.$refs.multiColorHatmapChart, this.options);
            this.multiColorHatmapChart.render();
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
                    type: "heatmap",
                },
                dataLabels: {
                    enabled: false
                },
                colors: getColorCodes(this.$refs.multiColorHatmapChart.dataset),
                xaxis: {
                    type: 'category',
                    categories: this.categories
                },
                title: {
                    text: 'HeatMap Chart (Different color shades for each series)'
                },
                grid: {
                    padding: {
                        right: 20
                    }
                }
            };
        }
    }));
});

//Multiple Colors Flipped
document.addEventListener("alpine:init", () => {
    Alpine.data("multiColorFlippedHatmapApp", () => ({
        series: [{
            name: 'Jan',
            data: generateData(20, {
                min: -30,
                max: 55
            })
        },
        {
            name: 'Feb',
            data: generateData(20, {
                min: -30,
                max: 55
            })
        },
        {
            name: 'Mar',
            data: generateData(20, {
                min: -30,
                max: 55
            })
        },
        {
            name: 'Apr',
            data: generateData(20, {
                min: -30,
                max: 55
            })
        },
        {
            name: 'May',
            data: generateData(20, {
                min: -30,
                max: 55
            })
        },
        {
            name: 'Jun',
            data: generateData(20, {
                min: -30,
                max: 55
            })
        },
        {
            name: 'Jul',
            data: generateData(20, {
                min: -30,
                max: 55
            })
        },
        {
            name: 'Aug',
            data: generateData(20, {
                min: -30,
                max: 55
            })
        },
        {
            name: 'Sep',
            data: generateData(20, {
                min: -30,
                max: 55
            })
        }
        ],
        categories: ['P1', 'P2', 'P3', 'P4', 'P5', 'P6', 'P7', 'P8', 'P9', 'P10', 'P11', 'P12', 'P13', 'P14', 'P15', 'P16', 'P17', 'P18', 'P19', 'P20'],
        init() {
            // Initial chart render
            this.renderChart();

            // Reload chart on window resize
            window.addEventListener('resize', this.reloadChart.bind(this));
        },
        renderChart() {
            // Destroy previous instance if exists
            if (this.multiColorFlippedHatmapChart) {
                this.multiColorFlippedHatmapChart.destroy();
            }

            // Initialize new chart
            this.multiColorFlippedHatmapChart = new ApexCharts(this.$refs.multiColorFlippedHatmapChart, this.options);
            this.multiColorFlippedHatmapChart.render();
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
                    type: "heatmap",
                },
                dataLabels: {
                    enabled: false
                },
                plotOptions: {
                    heatmap: {
                        colorScale: {
                            inverse: true
                        }
                    }
                },
                colors: getColorCodes(this.$refs.multiColorFlippedHatmapChart.dataset),
                xaxis: {
                    type: 'category',
                    categories: this.categories
                },
                title: {
                    text: 'Color Scales flipped Vertically'
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

//Rounded
document.addEventListener("alpine:init", () => {
    Alpine.data("roundedHatmapApp", () => ({
        series: [{
            name: 'Metric1',
            data: generateData(20, {
                min: 0,
                max: 90
            })
        },
        {
            name: 'Metric2',
            data: generateData(20, {
                min: 0,
                max: 90
            })
        },
        {
            name: 'Metric3',
            data: generateData(20, {
                min: 0,
                max: 90
            })
        },
        {
            name: 'Metric4',
            data: generateData(20, {
                min: 0,
                max: 90
            })
        },
        {
            name: 'Metric5',
            data: generateData(20, {
                min: 0,
                max: 90
            })
        },
        {
            name: 'Metric6',
            data: generateData(20, {
                min: 0,
                max: 90
            })
        },
        {
            name: 'Metric7',
            data: generateData(20, {
                min: 0,
                max: 90
            })
        },
        {
            name: 'Metric8',
            data: generateData(20, {
                min: 0,
                max: 90
            })
        },
        {
            name: 'Metric8',
            data: generateData(20, {
                min: 0,
                max: 90
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
            if (this.roundedHatmapChart)
                this.roundedHatmapChart.destroy();

            // Initialize new chart
            this.roundedHatmapChart = new ApexCharts(this.$refs.roundedHatmapChart, this.options);
            this.roundedHatmapChart.render();
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
                    type: "heatmap",
                },
                stroke: {
                    width: 0
                },
                plotOptions: {
                    heatmap: {
                        radius: 30,
                        enableShades: false,
                        colorScale: {
                            ranges: [{
                                from: 0,
                                to: 50,
                                color: '#008FFB'
                            },
                            {
                                from: 51,
                                to: 100,
                                color: '#00E396'
                            },
                            ],
                        },
                    }
                },
                dataLabels: {
                    enabled: true,
                    style: {
                        colors: ['#fff']
                    }
                },
                colors: getColorCodes(this.$refs.roundedHatmapChart.dataset),
                xaxis: {
                    type: 'category',
                },
                title: {
                    text: 'Rounded (Range without Shades)'
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
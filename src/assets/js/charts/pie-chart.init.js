import { getColorCodes } from "../helpers/helper.js";

//Simple Pie Chart
document.addEventListener("alpine:init", () => {
    Alpine.data("simplePieApp", () => ({
        series: [44, 55, 13, 43, 22],
        labels: ['Team A', 'Team B', 'Team C', 'Team D', 'Team E'],
        init() {
            // Initial chart render
            this.renderChart();

            // Reload chart on window resize
            window.addEventListener('resize', this.reloadChart.bind(this));
        },
        renderChart() {
            // Destroy previous instance if exists
            if (this.simplePieChart)
                this.simplePieChart.destroy();

            // Initialize new chart
            this.simplePieChart = new ApexCharts(this.$refs.simplePieChart, this.options);
            this.simplePieChart.render();
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
                    type: "pie",
                },
                labels: this.labels,
                colors: getColorCodes(this.$refs.simplePieChart.dataset),
                responsive: [{
                    breakpoint: 480,
                    options: {
                        chart: {
                            width: '100%'
                        },
                        legend: {
                            position: 'bottom'
                        }
                    }
                }]
            };
        }
    }));
});

//Simple Donut Chart
document.addEventListener("alpine:init", () => {
    Alpine.data("simpleDonutApp", () => ({
        series: [44, 55, 41, 17, 15],
        init() {
            // Initial chart render
            this.renderChart();

            // Reload chart on window resize
            window.addEventListener('resize', this.reloadChart.bind(this));
        },
        renderChart() {
            // Destroy previous instance if exists
            if (this.simpleDonutChart)
                this.simpleDonutChart.destroy();

            // Initialize new chart
            this.simpleDonutChart = new ApexCharts(this.$refs.simpleDonutChart, this.options);
            this.simpleDonutChart.render();
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
                    type: "donut",
                },
                colors: getColorCodes(this.$refs.simpleDonutChart.dataset),
                responsive: [{
                    breakpoint: 480,
                    options: {
                        chart: {
                            width: '100%'
                        },
                        legend: {
                            position: 'bottom'
                        }
                    }
                }]
            };
        }
    }));
});

//Update Donut
document.addEventListener("alpine:init", () => {
    Alpine.data("updateDonutApp", () => ({
        series: [44, 55, 13, 33],
        chartInstance: null, // Reference to the chart instance
        init() {
            // Initial chart render
            this.renderChart();

            // Reload chart on window resize
            window.addEventListener('resize', this.reloadChart.bind(this));
        },
        renderChart() {
            // Destroy previous instance if exists
            if (this.chartInstance)
                this.chartInstance.destroy();

            // Initialize new chart
            this.chartInstance = new ApexCharts(this.$refs.updateDonutChart, this.options);
            this.chartInstance.render();
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
                    type: "donut",
                },
                dataLabels: {
                    enabled: false
                },
                colors: getColorCodes(this.$refs.updateDonutChart.dataset),
                responsive: [{
                    breakpoint: 480,
                    options: {
                        chart: {
                            width: '100%'
                        },
                        legend: {
                            show: true
                        }
                    }
                }],
                legend: {
                    position: 'right',
                    offsetY: 0,
                    height: 230,
                }
            };
        },
        add() {
            this.series.push(Math.floor(Math.random() * (100 - 1 + 1)) + 1);
            this.chartInstance.updateSeries(this.series);
        },
        remove() {
            this.series.pop();
            this.chartInstance.updateSeries(this.series);
        },
        randomize() {
            this.series = this.series.map(() => Math.floor(Math.random() * (100 - 1 + 1)) + 1);
            this.chartInstance.updateSeries(this.series);
        },
        reset() {
            this.series = [44, 55, 13, 33];
            this.chartInstance.updateSeries(this.series);
        }
    }));
});

//Monochrome Pie Chart
document.addEventListener("alpine:init", () => {
    Alpine.data("monochromePieApp", () => ({
        series: [25, 15, 44, 55, 41, 17],
        labels: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        init() {
            // Initial chart render
            this.renderChart();

            // Reload chart on window resize
            window.addEventListener('resize', this.reloadChart.bind(this));
        },
        renderChart() {
            // Destroy previous instance if exists
            if (this.monochromePieChart)
                this.monochromePieChart.destroy();

            // Initialize new chart
            this.monochromePieChart = new ApexCharts(this.$refs.monochromePieChart, this.options);
            this.monochromePieChart.render();
        },
        reloadChart() {
            // Handle the logic for resizing
            this.renderChart(); // Re-render chart on resize
        },
        get options() {
            return {
                series: this.series,
                chart: {
                    height: 340,
                    type: "pie",
                },
                labels: this.labels,
                theme: {
                    monochrome: {
                        enabled: true
                    }
                },
                colors: getColorCodes(this.$refs.monochromePieChart.dataset),
                plotOptions: {
                    pie: {
                        dataLabels: {
                            offset: -5
                        }
                    }
                },
                title: {
                    text: "Monochrome Pie"
                },
                dataLabels: {
                    formatter(val, opts) {
                        const name = opts.w.globals.labels[opts.seriesIndex]
                        return [name, val.toFixed(1) + '%']
                    }
                },
                legend: {
                    show: false
                }
            };
        }
    }));
});

//Gradient Donut Chart
document.addEventListener("alpine:init", () => {
    Alpine.data("gradientDonutApp", () => ({
        series: [44, 55, 41, 17, 15],
        init() {
            // Initial chart render
            this.renderChart();

            // Reload chart on window resize
            window.addEventListener('resize', this.reloadChart.bind(this));
        },
        renderChart() {
            // Destroy previous instance if exists
            if (this.gradientDonutChart)
                this.gradientDonutChart.destroy();

            // Initialize new chart
            this.gradientDonutChart = new ApexCharts(this.$refs.gradientDonutChart, this.options);
            this.gradientDonutChart.render();
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
                    type: "donut",
                },
                plotOptions: {
                    pie: {
                        startAngle: -90,
                        endAngle: 270
                    }
                },
                dataLabels: {
                    enabled: false
                },
                colors: getColorCodes(this.$refs.gradientDonutChart.dataset),
                fill: {
                    type: 'gradient',
                },
                legend: {
                    formatter: function (val, opts) {
                        return val + " - " + opts.w.globals.series[opts.seriesIndex]
                    }
                },
                title: {
                    text: 'Gradient Donut with custom Start-angle'
                },
                responsive: [{
                    breakpoint: 480,
                    options: {
                        chart: {
                            width: '100%'
                        },
                        legend: {
                            position: 'bottom'
                        }
                    }
                }]
            };
        }
    }));
});

//Semi Donut Chart
document.addEventListener("alpine:init", () => {
    Alpine.data("semiDonutApp", () => ({
        series: [44, 55, 41, 17, 15],
        init() {
            // Initial chart render
            this.renderChart();

            // Reload chart on window resize
            window.addEventListener('resize', this.reloadChart.bind(this));
        },
        renderChart() {
            // Destroy previous instance if exists
            if (this.semiDonutChart)
                this.semiDonutChart.destroy();

            // Initialize new chart
            this.semiDonutChart = new ApexCharts(this.$refs.semiDonutChart, this.options);
            this.semiDonutChart.render();
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
                    type: "donut",
                },
                plotOptions: {
                    pie: {
                        startAngle: -90,
                        endAngle: 90,
                        offsetY: 10
                    }
                },
                colors: getColorCodes(this.$refs.semiDonutChart.dataset),
                grid: {
                    padding: {
                        bottom: -80
                    }
                },
                responsive: [{
                    breakpoint: 480,
                    options: {
                        chart: {
                            width: '100%'
                        },
                        legend: {
                            position: 'bottom'
                        }
                    }
                }]
            };
        }
    }));
});

//Donut with Pattern Chart
document.addEventListener("alpine:init", () => {
    Alpine.data("patternDonutApp", () => ({
        series: [44, 55, 41, 17, 15],
        labels: ["Comedy", "Action", "SciFi", "Drama", "Horror"],
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
                    height: 300,
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
                                show: true,
                                total: {
                                    showAlways: true,
                                    show: true
                                }
                            }
                        }
                    }
                },
                labels: this.labels,
                dataLabels: {
                    dropShadow: {
                        blur: 3,
                        opacity: 0.8
                    }
                },
                fill: {
                    type: 'pattern',
                    opacity: 1,
                    pattern: {
                        enabled: true,
                        style: ['verticalLines', 'squares', 'horizontalLines', 'circles', 'slantedLines'],
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
                title: {
                    text: "Favourite Movie Type"
                },
                colors: getColorCodes(this.$refs.patternDonutChart.dataset),
                responsive: [{
                    breakpoint: 480,
                    options: {
                        chart: {
                            width: '100%'
                        },
                        legend: {
                            position: 'bottom'
                        }
                    }
                }]
            };
        }
    }));
});
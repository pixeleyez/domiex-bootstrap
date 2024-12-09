import { getColorCodes } from "../helpers/helper.js";

//Basic Chart
document.addEventListener("alpine:init", () => {
    Alpine.data("basicPolarApp", () => ({
        series: [14, 23, 21, 17, 15, 10, 12, 17, 21],
        init() {
            // Initial chart render
            this.renderChart();

            // Reload chart on window resize
            window.addEventListener('resize', this.reloadChart.bind(this));
        },
        renderChart() {
            // Destroy previous instance if exists
            if (this.basicPolarChart)
                this.basicPolarChart.destroy();

            // Initialize new chart
            this.basicPolarChart = new ApexCharts(this.$refs.basicPolarChart, this.options);
            this.basicPolarChart.render();
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
                    type: "polarArea",
                },
                stroke: {
                    colors: ['#fff']
                },
                fill: {
                    opacity: 0.8
                },
                colors: getColorCodes(this.$refs.basicPolarChart.dataset),
                responsive: [{
                    breakpoint: 480,
                    options: {
                        chart: {
                            width: 200
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

//Monochrome
document.addEventListener("alpine:init", () => {
    Alpine.data("monochromePolarApp", () => ({
        series: [42, 47, 52, 58, 65],
        labels: ['Rose A', 'Rose B', 'Rose C', 'Rose D', 'Rose E'],
        init() {
            // Initial chart render
            this.renderChart();

            // Reload chart on window resize
            window.addEventListener('resize', this.reloadChart.bind(this));
        },
        renderChart() {
            // Destroy previous instance if exists
            if (this.monochromePolarChart)
                this.monochromePolarChart.destroy();

            // Initialize new chart
            this.monochromePolarChart = new ApexCharts(this.$refs.monochromePolarChart, this.options);
            this.monochromePolarChart.render();
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
                    type: "polarArea",
                },
                labels: this.labels,
                fill: {
                    opacity: 1
                },
                stroke: {
                    width: 1,
                    colors: undefined
                },
                yaxis: {
                    show: false
                },
                legend: {
                    position: 'bottom'
                },
                plotOptions: {
                    polarArea: {
                        rings: {
                            strokeWidth: 0
                        },
                        spokes: {
                            strokeWidth: 0
                        },
                    }
                },
                theme: {
                    monochrome: {
                        enabled: true,
                        shadeTo: 'light',
                        shadeIntensity: 0.6
                    }
                }
            };
        }
    }));
});
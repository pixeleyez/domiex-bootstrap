import { getColorCodes } from "../helpers/helper.js";

//Funnel Chart
document.addEventListener("alpine:init", () => {
    Alpine.data("funnelApp", () => ({
        series: [
            {
                name: "Funnel Series",
                data: [1380, 1100, 990, 880, 740, 548, 330, 200],
            },
        ],
        labels: [
            'Sourced',
            'Screened',
            'Assessed',
            'HR Interview',
            'Technical',
            'Verify',
            'Offered',
            'Hired',
        ],
        init() {
            // Initial chart render
            this.renderChart();

            // Reload chart on window resize
            window.addEventListener('resize', this.reloadChart.bind(this));
        },
        renderChart() {
            // Destroy previous instance if exists
            if (this.funnelChart)
                this.funnelChart.destroy();

            // Initialize new chart
            this.funnelChart = new ApexCharts(this.$refs.funnelChart, this.options);
            this.funnelChart.render();
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
                },
                plotOptions: {
                    bar: {
                        borderRadius: 0,
                        horizontal: true,
                        barHeight: '80%',
                        isFunnel: true,
                    },
                },
                dataLabels: {
                    enabled: true,
                    formatter: function (val, opt) {
                        return opt.w.globals.labels[opt.dataPointIndex] + ':  ' + val
                    },
                    dropShadow: {
                        enabled: true,
                    },
                },
                colors: getColorCodes(this.$refs.funnelChart.dataset),
                title: {
                    text: 'Recruitment Funnel',
                    align: 'middle',
                },
                xaxis: {
                    categories: this.labels,
                },
                legend: {
                    show: false,
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

//Pyramid Chart
document.addEventListener("alpine:init", () => {
    Alpine.data("pyramidApp", () => ({
        series: [
            {
                name: "",
                data: [200, 330, 548, 740, 880, 990, 1100, 1380],
            },
        ],
        labels: ['Sweets', 'Processed Foods', 'Healthy Fats', 'Meat', 'Beans & Legumes', 'Dairy', 'Fruits & Vegetables', 'Grains'],
        init() {
            // Initial chart render
            this.renderChart();

            // Reload chart on window resize
            window.addEventListener('resize', this.reloadChart.bind(this));
        },
        renderChart() {
            // Destroy previous instance if exists
            if (this.pyramidChart)
                this.pyramidChart.destroy();

            // Initialize new chart
            this.pyramidChart = new ApexCharts(this.$refs.pyramidChart, this.options);
            this.pyramidChart.render();
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
                    type: 'bar',
                    animations: {
                        speed: 500
                    }
                },
                plotOptions: {
                    bar: {
                        borderRadius: 0,
                        horizontal: true,
                        distributed: true,
                        barHeight: '80%',
                        isFunnel: true,
                    },
                },
                colors: [
                    '#F44F5E',
                    '#E55A89',
                    '#D863B1',
                    '#CA6CD8',
                    '#B57BED',
                    '#8D95EB',
                    '#62ACEA',
                    '#4BC3E6',
                ],
                dataLabels: {
                    enabled: true,
                    formatter: function (val, opt) {
                        return opt.w.globals.labels[opt.dataPointIndex]
                    },
                    dropShadow: {
                        enabled: true,
                    },
                },
                title: {
                    text: 'Pyramid Chart',
                    align: 'middle',
                },
                xaxis: {
                    categories: this.labels,
                },
                legend: {
                    show: false,
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
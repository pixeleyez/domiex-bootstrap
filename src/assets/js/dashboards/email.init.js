import { getColorCodes } from "../helpers/helper";

//Gradient Donut Chart
document.addEventListener("alpine:init", () => {
    Alpine.data("gradientDonutApp", () => ({
        series: [33, 57],
        labels: ["Open Rate", "Click Rate"],
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
                labels: this.labels,
                chart: {
                    height: 176,
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
                    },
                    position: 'bottom'
                },
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

//Column with Data Labels Chart
document.addEventListener("alpine:init", () => {
    Alpine.data("labelColumnApp", () => ({
        series: [{
            name: 'Inflation',
            data: [5, 4, 7, 9, 2, 6, 10, 6, 3, 7, 9, 5]
        }],
        init() {
            // Initial chart render
            this.renderChart();

            // Reload chart on window resize
            window.addEventListener('resize', this.reloadChart.bind(this));
        },
        renderChart() {
            // Destroy previous instance if exists
            if (this.labelColumnChart)
                this.labelColumnChart.destroy();

            // Initialize new chart
            this.labelColumnChart = new ApexCharts(this.$refs.labelColumnChart, this.options);
            this.labelColumnChart.render();
        },
        reloadChart() {
            // Handle the logic for resizing
            this.renderChart(); // Re-render chart on resize
        },
        get options() {
            return {
                series: this.series,
                chart: {
                    height: 100,
                    type: "bar",
                    toolbar: {
                        show: false,
                    },
                    sparkline: { enabled: !0 },
                },
                colors: getColorCodes(this.$refs.labelColumnChart.dataset),
            };
        }
    }));
});

//Line with Data Labels Charts
document.addEventListener("alpine:init", () => {
    Alpine.data("labelLineApp", () => ({
        series: [
            {
                name: "Sent",
                data: [28, 29, 33, 36, 32, 32, 33]
            },
            {
                name: "Opened",
                data: [12, 11, 14, 18, 17, 13, 13]
            }
        ],
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
        init() {
            // Initial chart render
            this.renderChart();

            // Reload chart on window resize
            window.addEventListener('resize', this.reloadChart.bind(this));
        },
        renderChart() {
            // Destroy previous instance if exists
            if (this.labelLineChart)
                this.labelLineChart.destroy();

            // Initialize new chart
            this.labelLineChart = new ApexCharts(this.$refs.labelLineChart, this.options);
            this.labelLineChart.render();
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
                    height: 280,
                    type: "area",
                    toolbar: {
                        show: false
                    }
                },
                stroke: {
                    curve: 'smooth'
                },
                grid: {
                    xaxis: {
                        lines: {
                            show: true
                        }
                    },
                    padding: {
                        right: 0,
                        top: -20
                    }
                },
                fill: {
                    type: 'gradient',
                    gradient: {
                        shadeIntensity: 1,
                        inverseColors: false,
                        opacityFrom: 0.4,
                        opacityTo: 0,
                        stops: [0, 90, 100]
                    },
                },
                xaxis: {
                    categories: this.labels
                },
                colors: getColorCodes(this.$refs.labelLineChart.dataset), // Utilize the function to get hash color codes
            };
        }
    }));
});

//Mail Statistic Charts
document.addEventListener("alpine:init", () => {
    Alpine.data("mailStatisticApp", () => ({
        series: [
            {
                name: 'Sent',
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
                name: 'Pending',
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
                name: 'Cancel',
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
            if (this.mailStatisticChart)
                this.mailStatisticChart.destroy();

            // Initialize new chart
            this.mailStatisticChart = new ApexCharts(this.$refs.mailStatisticChart, this.options);
            this.mailStatisticChart.render();
        },
        reloadChart() {
            // Handle the logic for resizing
            this.renderChart(); // Re-render chart on resize
        },
        get options() {
            return {
                series: this.series,
                chart: {
                    height: 335,
                    type: "line",
                },
                stroke: {
                    curve: 'smooth'
                },
                plotOptions: {
                    line: {
                        isSlopeChart: true,
                    },
                },
                legend: {
                    show: true,
                    position: 'bottom',
                    horizontalAlign: 'center',
                },
                xaxis: {
                    axisBorder: {
                        show: false,
                    }
                },
                colors: getColorCodes(this.$refs.mailStatisticChart.dataset), // Utilize the function to get hash color codes
            };
        }
    }));
});

//Time Spending Charts
document.addEventListener("alpine:init", () => {
    Alpine.data("timeSpendingApp", () => ({
        series: [
            {
                name: "Total Spend",
                data: [10, 41, 35, 51, 49, 62, 69, 91, 148]
            },
            {
                name: "Sales",
                data: [62, 69, 91, 54, 10, 41, 35, 51, 49]
            }
        ],
        labels: [
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "Jul",
            "Aug",
            "Sep",
            "Oct",
            "Nov",
            "Dec"
        ],
        init() {
            // Initial chart render
            this.renderChart();

            // Reload chart on window resize
            window.addEventListener('resize', this.reloadChart.bind(this));
        },
        renderChart() {
            // Destroy previous instance if exists
            if (this.timeSpendingChart)
                this.timeSpendingChart.destroy();

            // Initialize new chart
            this.timeSpendingChart = new ApexCharts(this.$refs.timeSpendingChart, this.options);
            this.timeSpendingChart.render();
        },
        reloadChart() {
            // Handle the logic for resizing
            this.renderChart(); // Re-render chart on resize
        },
        formatCurrency: (x) => {
            return "$" + x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ") + "k";
        },
        get options() {
            return {
                series: this.series,
                chart: {
                    defaultLocale: "en",
                    height: 120,
                    type: "line",
                    zoom: {
                        enabled: true
                    },
                    sparkline: { enabled: !0 },
                },
                stroke: {
                    curve: 'straight'
                },
                xaxis: {
                    title: {
                        text: "Xaxis"
                    },
                    categories: this.labels
                },
                tooltip: {
                    x: {
                        show: true
                    },
                    y: {
                        formatter: (val) => {
                            return this.formatCurrency(val);
                        }
                    }
                },
                legend: {
                    show: true,
                    position: 'bottom',
                    horizontalAlign: 'center',
                    offsetY: 8,
                },
                stroke: {
                    width: 1,
                },
                colors: getColorCodes(this.$refs.timeSpendingChart.dataset), // Utilize the function to get hash color codes
                grid: {
                    padding: {
                        top: 0,
                        right: 5,
                        bottom: 20,
                    },
                }
            };
        }
    }));
});
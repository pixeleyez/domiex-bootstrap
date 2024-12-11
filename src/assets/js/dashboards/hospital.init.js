import { getColorCodes } from "../helpers/helper";

//Patient visit Chart
document.addEventListener("alpine:init", () => {
    Alpine.data("patientVisitApp", () => ({
        series: [{
            name: 'Net Profit',
            data: [32, 39, 43, 49, 52, 58, 63, 60, 66]
        }],
        init() {
            // Initial chart render
            this.renderChart();

            // Reload chart on window resize
            window.addEventListener('resize', this.reloadChart.bind(this));
        },
        renderChart() {
            // Destroy previous instance if exists
            if (this.patientVisitChart)
                this.patientVisitChart.destroy();

            // Initialize new chart
            this.patientVisitChart = new ApexCharts(this.$refs.patientVisitChart, this.options);
            this.patientVisitChart.render();
        },
        reloadChart() {
            // Handle the logic for resizing
            this.renderChart(); // Re-render chart on resize
        },
        get options() {
            return {
                series: this.series,
                chart: {
                    height: 320,
                    type: "bar",
                    toolbar: {
                        show: false,
                    }
                },
                plotOptions: {
                    bar: {
                        horizontal: false,
                        columnWidth: '55%',
                        endingShape: 'rounded'
                    },
                },
                dataLabels: {
                    enabled: false
                },
                stroke: {
                    show: true,
                    width: 2,
                    colors: ['transparent']
                },
                colors: getColorCodes(this.$refs.patientVisitChart.dataset),
                xaxis: {
                    categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'],
                },
                fill: {
                    opacity: 1
                },
                yaxis: {
                    show: false,
                },
                grid: {
                    show: false,
                    xaxis: {
                        lines: {
                            show: false
                        }
                    },
                    yaxis: {
                        lines: {
                            show: false
                        }
                    },
                    padding: {
                        top: -30,
                        right: 0,
                        bottom: -12,
                        left: 0
                    },
                },
                tooltip: {
                    y: {
                        formatter: function (val) {
                            return "$ " + val + "k"
                        }
                    }
                }
            };
        }
    }));
});

//Patient Visit by Department Chart
document.addEventListener("alpine:init", () => {
    Alpine.data("patientDepartmentApp", () => ({
        series: [44, 55, 41, 18],
        labels: ["Cardiology", "Neurology", "Orthopedics", "Pediatrics"],
        init() {
            // Initial chart render
            this.renderChart();

            // Reload chart on window resize
            window.addEventListener('resize', this.reloadChart.bind(this));
        },
        renderChart() {
            // Destroy previous instance if exists
            if (this.patientDepartmentChart)
                this.patientDepartmentChart.destroy();

            // Initialize new chart
            this.patientDepartmentChart = new ApexCharts(this.$refs.patientDepartmentChart, this.options);
            this.patientDepartmentChart.render();
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
                    height: 250,
                    width: '350',
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
                colors: getColorCodes(this.$refs.patientDepartmentChart.dataset),
                fill: {
                    type: 'gradient',
                },
                legend: {
                    formatter: function (val, opts) {
                        return val + " - " + opts.w.globals.series[opts.seriesIndex]
                    }
                },
                responsive: [{
                    breakpoint: 480,
                    options: {
                        chart: {
                            width: 300,
                            height: 150,
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

//Basic Charts
document.addEventListener("alpine:init", () => {
    Alpine.data("patientsHistoryApp", () => ({
        series: [
            {
                name: "Inject Patients",
                data: [24, 32, 28, 62, 67, 80, 96, 106]
            },
            {
                name: "Surgery Patients",
                data: [5, 14, 19, 27, 35, 44, 22, 49]
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
            if (this.patientsHistoryChart)
                this.patientsHistoryChart.destroy();

            // Initialize new chart
            this.patientsHistoryChart = new ApexCharts(this.$refs.patientsHistoryChart, this.options);
            this.patientsHistoryChart.render();
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
                    height: 195,
                    type: "line",
                    toolbar: {
                        show: false,
                    }
                },
                dataLabels: {
                    enabled: false
                },
                stroke: {
                    curve: 'smooth',
                    width: 3,
                    lineCap: 'butt',
                },
                xaxis: {
                    categories: this.labels
                },
                tooltip: {
                    x: {
                        show: true
                    },
                },
                colors: getColorCodes(this.$refs.patientsHistoryChart.dataset), // Utilize the function to get hash color codes
                grid: {
                    strokeDashArray: 4,
                    position: 'back',
                    padding: {
                        top: -20,
                        right: 0,
                        bottom: 0,
                    },
                }
            };
        }
    }));
});
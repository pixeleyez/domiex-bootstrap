import { getColorCodes } from "../helpers/helper";

//Gradient Donut Chart
document.addEventListener("alpine:init", () => {
    Alpine.data("gradientDonutApp", () => ({
        series: [44, 55],
        gradientDonutChart: null,
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
                    height: 180,
                    type: "donut",
                },
                legend: {
                    show: true,
                    position: 'bottom',
                },
                labels: ["Process", "In Process"],
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
            };
        }
    }));
});

//Students charts
document.addEventListener("alpine:init", () => {
    Alpine.data("dumbbellColumnApp", () => ({
        series: [
            {
                data: [
                    {
                        x: '2018',
                        y: [241, 100]
                    },
                    {
                        x: '2019',
                        y: [150, 41]
                    },
                    {
                        x: '2020',
                        y: [210, 100]
                    },
                    {
                        x: '2021',
                        y: [200, 10]
                    },
                    {
                        x: '2022',
                        y: [100, 10]
                    },
                    {
                        x: '2023',
                        y: [190, 120]
                    },
                    {
                        x: '2024',
                        y: [154, 241]
                    }
                ]
            }
        ],
        dumbbellColumnChart: null,
        init() {
            // Reload chart on window resize
            window.addEventListener('resize', this.reloadChart.bind(this));
        },
        reloadChart() {
            // Handle the logic for resizing
            this.renderChart(); // Re-render chart on resize
        },
        renderChart() {
            // Destroy previous instance if exists
            if (this.dumbbellColumnChart)
                this.dumbbellColumnChart.destroy();

            // Fetch color codes first
            this.colorCodes = getColorCodes(this.$refs.dumbbellColumnChart.dataset);

            // Initialize the chart with options
            this.dumbbellColumnChart = new ApexCharts(this.$refs.dumbbellColumnChart, this.options);
            this.dumbbellColumnChart.render();
        },
        get options() {
            return {
                series: this.series,
                chart: {
                    height: 272,
                    type: "rangeBar",
                    zoom: {
                        enabled: false
                    }
                },
                plotOptions: {
                    bar: {
                        isDumbbell: true,
                        columnWidth: 3,
                        dumbbellColors: [[this.colorCodes[1], this.colorCodes[0]]]
                    }
                },
                legend: {
                    show: true,
                    showForSingleSeries: true,
                    position: 'top',
                    horizontalAlign: 'center',
                    customLegendItems: ['New Students', 'Leave Students'],
                },
                fill: {
                    type: 'gradient',
                    gradient: {
                        type: 'vertical',
                        gradientToColors: [this.colorCodes[1]],
                        inverseColors: true,
                        stops: [0, 100]
                    }
                },
                colors: getColorCodes(this.$refs.dumbbellColumnChart.dataset),
                grid: {
                    padding: {
                        bottom: -10,
                        right: 0
                    },
                    xaxis: {
                        lines: {
                            show: true
                        }
                    },
                    yaxis: {
                        lines: {
                            show: false
                        }
                    }
                },
                xaxis: {
                    tickPlacement: 'on'
                }
            };
        }
    }));
});

//holiday swiper
var swiper = new Swiper(".mySwiper", {
    spaceBetween: 24,
    grabCursor: true,
    slidesPerView: 1,
    loop: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});




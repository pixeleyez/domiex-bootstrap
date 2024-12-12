import { getColorCodes } from "../helpers/helper";

//Analytics Chart
document.addEventListener("alpine:init", () => {
    Alpine.data("analyticsApp", () => ({
        series: [{
            name: 'Total GB',
            data: [44, 55, 41, 67, 22]
        }],
        labels: ['Dropbox', 'Cloud', 'Mega', 'Google', 'Drive'],
        init() {
            // Fetch color codes first
            this.colorCodes = getColorCodes(this.$refs.analyticsChart.dataset);

            // Initialize the chart with options
            let analyticsChart = new ApexCharts(this.$refs.analyticsChart, this.options);
            analyticsChart.render();
        },
        get options() {
            return {
                series: this.series,
                chart: {
                    height: 297,
                    type: 'bar',
                    toolbar: {
                        show: false,
                    }
                },
                plotOptions: {
                    bar: {
                        borderRadius: 10,
                        columnWidth: '50%',
                    }
                },
                dataLabels: {
                    enabled: false
                },
                stroke: {
                    width: 1
                },
                colors: getColorCodes(this.$refs.analyticsChart.dataset),
                grid: {
                    padding: {
                        right: -12,
                        top: -18,
                        bottom: -8
                    }
                },
                xaxis: {
                    labels: {
                        rotate: -45
                    },
                    categories: this.labels,
                    tickPlacement: 'on'
                },
                fill: {
                    type: 'gradient',
                    gradient: {
                        shade: 'light',
                        type: "horizontal",
                        shadeIntensity: 0.25,
                        gradientToColors: undefined,
                        inverseColors: [this.colorCodes[0]],
                        opacityFrom: 0.85,
                        opacityTo: 0.85,
                        stops: [50, 0, 100]
                    },
                }
            };
        }
    }));
});

//Overview Storage Chart
document.addEventListener("alpine:init", () => {
    Alpine.data("overviewStorageApp", () => ({
        series: [44, 55, 41, 17, 15],
        labels: ["Docs", "Images", "Video", "Audio", "Others"],
        init() {
            // Initial chart render
            this.renderChart();

            // Reload chart on window resize
            window.addEventListener('resize', this.reloadChart.bind(this));
        },
        renderChart() {
            // Destroy previous instance if exists
            if (this.overviewStorageChart)
                this.overviewStorageChart.destroy();

            // Initialize new chart
            this.overviewStorageChart = new ApexCharts(this.$refs.overviewStorageChart, this.options);
            this.overviewStorageChart.render();
        },
        reloadChart() {
            // Handle the logic for resizing
            this.renderChart(); // Re-render chart on resize
        },
        get options() {
            return {
                series: this.series,
                chart: {
                    height: 252,
                    type: "donut",
                },
                plotOptions: {
                    pie: {
                        startAngle: -90,
                        endAngle: 90,
                        offsetY: 5
                    }
                },
                colors: getColorCodes(this.$refs.overviewStorageChart.dataset),
                grid: {
                    padding: {
                        bottom: -80
                    }
                },
                stroke: {
                    width: 0,
                },
                fill: {
                    type: 'gradient',
                },
                labels: this.labels,
                legend: {
                    position: 'bottom'
                }
            };
        }
    }));
});

//my favorite slider
var swiper = new Swiper(".achivementSwiper", {
    spaceBetween: 24,
    grabCursor: true,
    slidesPerView: 1,
    loop: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

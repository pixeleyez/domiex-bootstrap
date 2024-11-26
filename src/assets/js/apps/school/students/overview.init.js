var swiper = new Swiper(".achivementSwiper", {
    loop: true,
    spaceBetween: 0,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
});

//Test Marks (Subject) Chart
document.addEventListener("alpine:init", () => {
    Alpine.data("testMarksSubjectApp", () => ({
        series: [{
            name: "Performance",
            data: [69, 78, 49, 63, 54, 87]
        }],
        labels: [
            ['Mathematics'],
            ['Physics'],
            ['Chemistry'],
            ['Biology'],
            ['CS'],
            ['English']
        ],
        init() {
          this.colorCodes = this.getColorCodes();

            let testMarksSubjectChart = new ApexCharts(this.$refs.testMarksSubjectChart, this.options);
            testMarksSubjectChart.render();
        },
        get options() {
            return {
                series: this.series,
                chart: {
                    height: 260,
                    type: 'bar',
                    toolbar: {
                        show: false,
                    }
                },
                plotOptions: {
                    bar: {
                        columnWidth: '20%',
                        distributed: true,
                    }
                },
                fill: {
                    type: 'gradient',
                    gradient: {
                        shade: 'dark',
                        type: "horizontal",
                        shadeIntensity: 0.2,
                        // gradientToColors: undefined, // optional, if not defined - uses the shades of same color in series
                        inverseColors: true,
                        opacityFrom: 1,
                        opacityTo: 1,
                        stops: [0, 50, 30],
                        colorStops: []
                    }
                },
                states: {
                    normal: {
                        filter: {
                            type: 'none',
                            value: 0,
                        }
                    },
                    hover: {
                        filter: {
                            type: 'none',
                            value: 0,
                        }
                    },
                    active: {
                        filter: {
                            type: 'none',
                            value: 0,
                        }
                    },
                },
                dataLabels: {
                    enabled: false,
                    formatter: function (val) {
                        return val + "%";
                    },
                },
                legend: {
                    show: false
                },
                xaxis: {
                    categories: this.labels,
                },
                grid: {
                    padding: {
                        top: -20,
                        right: 0,
                        bottom: 0
                    },
                },
                yaxis: {
                    labels: {
                        formatter: function (val) {
                            return val + "%";
                        }
                    }
                },
                colors: this.colorCodes,
            };
        },
        getColorCodes() {
          return ['#90cdff', '#d8b4fe', '#7dd3fc', '#86efac', '#fca5a5', '#fdba74']; 
      }
    }));
});
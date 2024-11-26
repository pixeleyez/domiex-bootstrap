//Time Spend in Lecture Chart
document.addEventListener("alpine:init", () => {
    Alpine.data("timeSpendLectureApp", () => ({
        series: [{
            name: "Total Hours",
            data: [142, 139, 159, 149, 162, 187, 160, 154, 122]
        }],
        labels: [
            ['Jan'],
            ['Feb'],
            ['Mar'],
            ['Apr'],
            ['May'],
            ['Jun'],
            ['Jul'],
            ['Aug'],
            ['Sep']
        ],
        init() {
            this.colorCodes = this.getColorCodes();

            let timeSpendLectureChart = new ApexCharts(this.$refs.timeSpendLectureChart, this.options);
            timeSpendLectureChart.render();
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
                        columnWidth: '40%',
                        distributed: true,
                    }
                },
                fill: {
                    type: 'gradient',
                    gradient: {
                        shade: 'dark',
                        type: "horizontal",
                        shadeIntensity: 0.2,
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
                colors: this.colorCodes,
            };
        },
        getColorCodes() {
            return ['#5bb1ff']; 
        }
    }));
});
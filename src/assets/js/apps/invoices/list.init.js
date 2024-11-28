//Simple Donut Chart
document.addEventListener("alpine:init", () => {
    Alpine.data("simpleDonutApp", () => ({
        series: [16, 8, 12, 9],
        labels: ['Paid', 'Unpaid', 'Pending', 'Overdue'],
        init() {
            this.colorCodes = this.getColorCodes();

            let simpleDonutChart = new ApexCharts(this.$refs.simpleDonutChart, this.options);
            simpleDonutChart.render();
        },
        get options() {
            return {
                series: this.series,
                labels: this.labels,
                chart: {
                    height: 110,
                    type: "donut",
                },
                dataLabels: {
                    enabled: false
                },
                plotOptions: {
                    pie: {
                        expandOnClick: true,
                        donut: {
                            size: '60%',
                        }
                    }
                },
                legend: {
                    offsetY: -10,
                },
                colors: this.colorCodes,
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
        },
        getColorCodes() {
            return ['#22c55e', '#0ea5e9', '#eab308', '#ef4444', '#a855f7']; 
        }
    }));
});
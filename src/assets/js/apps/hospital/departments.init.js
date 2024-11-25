//Distributed Columns Chart
document.addEventListener("alpine:init", () => {
    Alpine.data("distributedColumnApp", () => ({
        series: [{
            name: "Employee",
            data: [21, 22, 19, 10, 10, 28, 16]
        }],
        labels: [
            ['Radiology'],
            ['Orthopedics'],
            ['Neurology'],
            ['Cardiology'],
            ['Pediatrics'],
            ['Nurse'],
            ['Others']
        ],
        init() {
            this.colorCodes = this.getColorCodes();

            let distributedColumnChart = new ApexCharts(this.$refs.distributedColumnChart, this.options);
            distributedColumnChart.render();
        },
        get options() {
            return {
                series: this.series,
                chart: {
                    height: 300,
                    type: 'bar'
                },
                plotOptions: {
                    bar: {
                        columnWidth: '25%',
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
                    enabled: false
                },
                legend: {
                    show: false
                },
                xaxis: {
                    categories: this.labels,
                },
                colors: this.colorCodes,
            };
        },
        getColorCodes() {
            return ['#358ffc', '#ec4899', '#0ea5e9', '#86efac', '#fef08a', '#fed7aa', '#a855f7', '#ef4444']; 
        }
    }));
});

//Status Select
VirtualSelect.init({
    ele: "#statusSelect",
    options: [
        { label: "Active", value: "1" },
        { label: "Un Active", value: "2" },
    ],
    selectedValue: 1,
});
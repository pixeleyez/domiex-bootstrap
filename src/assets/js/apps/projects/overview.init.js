 // Alpine.js Component Initialization
 document.addEventListener("alpine:init", () => {
    Alpine.data("workingHoursApp", () => ({
        values: [4, 3, 10, 9, 29, 19, 22, 9, 12, 7, 19, 5, 13, 9, 16, 2, 7, 8],
        categories: ['1/11/2024', '2/11/2024', '3/11/2024', '4/11/2024', '5/11/2024', '6/11/2024', '7/11/2024', '8/11/2024', '9/11/2024', '10/11/2024', '11/11/2024', '12/11/2024', '1/11/2025', '2/11/2025', '3/11/2025', '4/11/2025', '5/11/2025', '6/11/2025'],
        
        init() {
            this.colorCodes = this.getColorCodes();
            this.renderChart();
        },

        getColorCodes() {
            return ['#6a1b9a', '#2196f3']; 
        },

        get options() {
            return {
                series: [
                    {
                        name: 'Hours',
                        data: this.values
                    }
                ],
                chart: {
                    type: 'line',
                    height: 300,
                    zoom: {
                        enabled: true
                    },
                    dropShadow: {
                        enabled: true,
                        top: 0,
                        left: 0,
                        blur: 3,
                        color: '#000',
                        opacity: 0.15
                    }
                },
                stroke: {
                    width: 5,
                    curve: 'smooth'
                },
                xaxis: {
                    type: 'datetime',
                    categories: this.categories,
                    tickAmount: 10,
                    labels: {
                        formatter: function (value, timestamp, opts) {
                            return opts.dateFormatter(new Date(timestamp), 'dd MMM');
                        }
                    }
                },
                fill: {
                    type: 'gradient',
                    gradient: {
                        shade: 'dark',
                        gradientToColors: [this.colorCodes[1]],
                        type: 'horizontal',
                        opacityFrom: 1,
                        opacityTo: 1,
                        stops: [0, 100, 100, 100]
                    },
                },
                colors: [this.colorCodes[0]],
                grid: {
                    padding: {
                        top: 0,
                        right: 5,
                        bottom: 0,
                    },
                    yaxis: {
                        lines: {
                            show: false,
                        }
                    },
                }
            };
        },

        // Render the chart with the configured options
        renderChart() {
            let chart = new ApexCharts(this.$refs.workingHoursChart, this.options);
            chart.render();
        }
    }));
});
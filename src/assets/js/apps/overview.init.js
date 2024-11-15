//Working Hours Charts
document.addEventListener("alpine:init", () => {
    Alpine.data("workingHoursApp", () => ({
        values: [4, 3, 10, 9, 29, 19, 22, 9, 12, 7, 19, 5, 13, 9, 16, 2, 7, 8],
        categories: [
            '1/11/2024', '2/11/2024', '3/11/2024', '4/11/2024', '5/11/2024', 
            '6/11/2024', '7/11/2024', '8/11/2024', '9/11/2024', '10/11/2024', 
            '11/11/2024', '12/11/2024', '1/11/2025', '2/11/2025', '3/11/2025', 
            '4/11/2025', '5/11/2025', '6/11/2025'
        ],
        
        init() {
            this.colorCodes = this.getColorCodes();
            this.renderChart(); 
        },
        
        formatCurrency(x) {
            return "$" + x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");  
        },
        
        get options() {
            return {
                series: [{
                    name: 'Hours', 
                    data: this.values 
                }],
                chart: {
                    type: 'line',  
                    height: 300,  
                    zoom: { enabled: true },
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
                        formatter: (value, timestamp, opts) => 
                            opts.dateFormatter(new Date(timestamp), 'dd MMM') 
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
                colors: this.colorCodes, 
                grid: {
                    padding: {
                        top: 0,
                        right: 5,
                        bottom: 0,
                    },
                    yaxis: {
                        lines: {
                            show: false 
                        }
                    },
                }
            };
        },
        
        getColorCodes() {
            return ['#A456F7', '#5380FB'];
        },
        
        renderChart() {
            let chart = new ApexCharts(this.$refs.workingHoursChart, this.options);
            chart.render(); 
        }
    }));
});

//Column with Data Labels Chart
document.addEventListener("alpine:init", () => {
    Alpine.data("taskActivitiesApp", () => ({
        series: [{
            name: 'Total Task',
            data: [3, 4, 8, 2, 6, 10, 8]
        }],
        labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        init() {
            let taskActivitiesChart = new ApexCharts(this.$refs.taskActivitiesChart, this.options);
            taskActivitiesChart.render();
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
                        borderRadius: 10,
                        dataLabels: {
                            position: 'top', // top, center, bottom
                        },
                    }
                },
                dataLabels: {
                    enabled: true,
                    offsetY: -20,
                    style: {
                        fontSize: '12px',
                        colors: ["#304758"]
                    }
                },

                xaxis: {
                    categories: this.labels,
                    axisBorder: {
                        show: false
                    },
                    axisTicks: {
                        show: false
                    },
                    crosshairs: {
                        fill: {
                            type: 'gradient',
                            gradient: {
                                colorFrom: '#D8E3F0',
                                colorTo: '#BED1E6',
                                stops: [0, 100],
                                opacityFrom: 0.4,
                                opacityTo: 0.5,
                            }
                        }
                    },
                    tooltip: {
                        enabled: true,
                    }
                },
                yaxis: {
                    axisBorder: {
                        show: false
                    },
                    axisTicks: {
                        show: false,
                    },
                    labels: {
                        show: true,
                    }
                },
                colors: this.getColorCodes(),
                title: {
                    text: 'Monthly Inflation in Argentina, 2002',
                    floating: true,
                    offsetY: 330,
                    align: 'center',
                    style: {
                        color: '#444'
                    }
                }
            };
        },
        getColorCodes() {
            return ['#358ffc', '#ec4899'];  // Example color codes for the chart
        }
    }));
});


// Ads danger chart
document.addEventListener("alpine:init", () => {
    Alpine.data("adsRevenueApp", () => ({
        series: [{
            name: 'Total Revenue',
            data: [31, 77, 44, 31, 63, 94, 105]
        }],
        labels: ['Jan', 'Feb', 'March', 'April', 'May', 'June', 'July'],
        
        init() {
            this.colorCodes = this.getColorCodes();
            
            const adsRevenueChart = new ApexCharts(this.$refs.adsRevenueChart, this.options);
            adsRevenueChart.render();
        },
                get options() {
            return {
                series: this.series,
                labels: this.labels,
                chart: {
                    defaultLocale: "en",
                    height: 140, 
                    type: "line",
                    zoom: {
                        enabled: false
                    },
                    toolbar: {
                        show: false,
                    },
                },
                dataLabels: {
                    enabled: false
                },
                stroke: {
                    width: 3,
                    curve: 'smooth',
                    dashArray: [10]
                },
                legend: {
                    tooltipHoverFormatter: function (val, opts) {
                        return val + ' - <strong>' + opts.w.globals.series[opts.seriesIndex][opts.dataPointIndex] + '</strong>';
                    }
                },
                markers: {
                    size: 0,
                    hover: {
                        sizeOffset: 5
                    }
                },
                grid: {
                    borderColor: this.colorCodes[1],
                    padding: {
                        top: -20,
                        right: 0,
                        bottom: 0,
                        left: 7
                    },
                    xaxis: {
                        lines: {
                            show: true
                        }
                    },
                    yaxis: {
                        lines: {
                            show: true
                        }
                    },
                },
                yaxis: {
                    show: false,
                },
                colors: this.colorCodes,
            };
        },

        getColorCodes() {
            return ['#ef4444', '#e3e3e3'];  // Example colors (red hues)
        }
    }));
});

// Ads primary chart
document.addEventListener("alpine:init", () => {
    Alpine.data("adsRevenueprimaryApp", () => ({
        series: [{
            name: 'Total Revenue',
            data: [31, 77, 44, 31, 63, 94, 105]
        }],
        labels: ['Jan', 'Feb', 'March', 'April', 'May', 'June', 'July'],
        
        init() {
            this.colorCodes = this.getColorCodes();
            
            const adsRevenueprimaryChart = new ApexCharts(this.$refs.adsRevenueprimaryChart, this.options);
            adsRevenueprimaryChart.render();
        },
                get options() {
            return {
                series: this.series,
                labels: this.labels,
                chart: {
                    defaultLocale: "en",
                    height: 140, 
                    type: "line",
                    zoom: {
                        enabled: false
                    },
                    toolbar: {
                        show: false,
                    },
                },
                dataLabels: {
                    enabled: false
                },
                stroke: {
                    width: 3,
                    curve: 'smooth',
                    dashArray: [10]
                },
                legend: {
                    tooltipHoverFormatter: function (val, opts) {
                        return val + ' - <strong>' + opts.w.globals.series[opts.seriesIndex][opts.dataPointIndex] + '</strong>';
                    }
                },
                markers: {
                    size: 0,
                    hover: {
                        sizeOffset: 5
                    }
                },
                grid: {
                    borderColor: this.colorCodes[1],
                    padding: {
                        top: -20,
                        right: 0,
                        bottom: 0,
                        left: 7
                    },
                    xaxis: {
                        lines: {
                            show: true
                        }
                    },
                    yaxis: {
                        lines: {
                            show: true
                        }
                    },
                },
                yaxis: {
                    show: false,
                },
                colors: this.colorCodes,
            };
        },

        getColorCodes() {
            return ['#6366f1', '#e3e3e3'];  // Example colors (red hues)
        }
    }));
});

document.addEventListener("alpine:init", () => {
    Alpine.data("salesRevenueApp", () => ({
        series: [{
            name: 'Total Revenue',
            data: [31, 40, 28, 51, 42, 119, 100]
        }],
        labels: ['Jan', 'Feb', 'March', 'April', 'May', 'June', 'July'],
        
        init() {
            this.colorCodes = this.getColorCodes();
            
            const salesRevenueChart = new ApexCharts(this.$refs.salesRevenueChart, this.options);
            salesRevenueChart.render();
        },
        
        get options() {
            return {
                series: this.series,
                labels: this.labels,
                chart: {
                    defaultLocale: "en",
                    height: 140, 
                    type: "line",
                    zoom: { enabled: false },
                    toolbar: { show: false },
                },
                dataLabels: { enabled: false },
                stroke: { 
                    width: 3, 
                    curve: 'smooth', 
                    dashArray: [10] 
                },
                legend: {
                    tooltipHoverFormatter: function (val, opts) {
                        return `${val} - <strong>${opts.w.globals.series[opts.seriesIndex][opts.dataPointIndex]}</strong>`;
                    }
                },
                markers: {
                    size: 0,
                    hover: { sizeOffset: 5 }
                },
                grid: {
                    borderColor: this.colorCodes[1],
                    padding: { top: -20, right: 0, bottom: 0, left: 7 },
                    xaxis: { lines: { show: true } },
                    yaxis: { lines: { show: true } },
                },
                yaxis: { show: false },
                colors: this.colorCodes,
            };
        },

        getColorCodes() {
            return ['#358ffc', '#e3e3e3'];  // Example colors (blue and light gray)
        }
    }));
});

document.addEventListener("alpine:init", () => {
    Alpine.data("labelColumnApp", () => ({
        series: [{
            name: 'Inflation',
            data: [2.3, 3.1, 4.0, 10.1, 4.0, 3.6, 3.2, 2.3, 1.4, 1.3, 1.9, 2.8]
        }],
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
        init() {
            let labelColumnChart = new ApexCharts(this.$refs.labelColumnChart, this.options);
            labelColumnChart.render();
        },
        get options() {
            return {
                series: this.series,
                chart: {
                    height: 268,
                    type: "bar",
                    toolbar: { show: false },
                },
                plotOptions: {
                    bar: {
                        columnWidth: '60%',
                        borderRadius: 5,
                        dataLabels: { position: 'top' },
                    }
                },
                dataLabels: { enabled: false },
                xaxis: {
                    categories: this.labels,
                    axisBorder: { show: false },
                    axisTicks: { show: false },
                },
                yaxis: {
                    axisBorder: { show: false },
                    axisTicks: { show: false },
                    labels: {
                        show: true,
                        formatter: function (val) {
                            return val + "%";
                        }
                    }
                },
                grid: {
                    xaxis: { lines: { show: false } },
                    yaxis: { lines: { show: false } },
                    padding: { top: -10, right: 1, bottom: 0, left: 0 },
                },
                colors: this.getColorCodes(),
            };
        },
        getColorCodes() {
            return ['#358ffc', '#e3e3e3']; // Example color codes (adjust to your theme)
        }
    }));
});

document.addEventListener("alpine:init", () => {
    Alpine.data("semiDonutApp", () => ({
        series: [48, 98],
        init() {
            let semiDonutChart = new ApexCharts(this.$refs.semiDonutChart, this.options);
            semiDonutChart.render();
        },
        get options() {
            return {
                series: this.series,
                chart: {
                    height: 200,
                    type: "donut",
                },
                dataLabels: {
                    enabled: false
                },
                plotOptions: {
                    pie: {
                        startAngle: -90,
                        endAngle: 90,
                        offsetY: 20,
                    },
                },
                legend: {
                    show: false
                },
                colors: this.getColorCodes(),
                grid: {
                    padding: {
                        top: -20,
                        bottom: -80
                    }
                },
            };
        },
        getColorCodes() {
            return ['#358ffc', '#ec4899'];  // Example color codes for the chart
        }
    }));
});



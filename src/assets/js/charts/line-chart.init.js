import { getColorCodes } from "../helpers/helper.js";

//Basic Charts
document.addEventListener("alpine:init", () => {
    Alpine.data("basicLineApp", () => ({
        values: [10, 41, 35, 51, 49, 62, 69, 91, 148],
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
            if (this.basicLineChart)
                this.basicLineChart.destroy();

            // Initialize new chart
            this.basicLineChart = new ApexCharts(this.$refs.basicLineChart, this.options);
            this.basicLineChart.render();
        },
        reloadChart() {
            // Handle the logic for resizing
            this.renderChart(); // Re-render chart on resize
        },
        formatCurrency: (x) => {
            return "$" + x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
        },
        get options() {
            return {
                series: [
                    {
                        name: "Series name",
                        data: this.values
                    }
                ],
                chart: {
                    defaultLocale: "en",
                    height: 300,
                    type: "line",
                    zoom: {
                        enabled: true
                    },
                },
                dataLabels: {
                    enabled: false
                },
                stroke: {
                    curve: 'straight'
                },
                grid: {
                    row: {
                        colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
                        opacity: 0.5
                    },
                },
                xaxis: {
                    title: {
                        text: "Xaxis"
                    },
                    categories: this.labels
                },
                tooltip: {
                    x: {
                        show: true
                    },
                    y: {
                        formatter: (val) => {
                            return this.formatCurrency(val);
                        }
                    }
                },
                colors: getColorCodes(this.$refs.basicLineChart.dataset), // Utilize the function to get hash color codes
                grid: {
                    padding: {
                        top: 0,
                        right: 5,
                        bottom: 0,
                    },
                }
            };
        }
    }));
});

//Line with Data Labels Charts
document.addEventListener("alpine:init", () => {
    Alpine.data("labelLineApp", () => ({
        series: [
            {
                name: "High - 2013",
                data: [28, 29, 33, 36, 32, 32, 33]
            },
            {
                name: "Low - 2013",
                data: [12, 11, 14, 18, 17, 13, 13]
            }
        ],
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
        init() {
            // Initial chart render
            this.renderChart();

            // Reload chart on window resize
            window.addEventListener('resize', this.reloadChart.bind(this));
        },
        renderChart() {
            // Destroy previous instance if exists
            if (this.labelLineChart)
                this.labelLineChart.destroy();

            // Initialize new chart
            this.labelLineChart = new ApexCharts(this.$refs.labelLineChart, this.options);
            this.labelLineChart.render();
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
                    height: 300,
                    type: "line",
                    dropShadow: {
                        enabled: true,
                        color: '#000',
                        top: 18,
                        left: 7,
                        blur: 10,
                        opacity: 0.2
                    },
                    toolbar: {
                        show: false
                    }
                },
                dataLabels: {
                    enabled: true,
                },
                stroke: {
                    curve: 'smooth'
                },
                grid: {
                    padding: {
                        top: -20,
                        right: 0,
                        bottom: 0,
                    },
                },
                legend: {
                    position: 'top',
                    horizontalAlign: 'right',
                    floating: true,
                    offsetY: -25,
                    offsetX: -5
                },
                xaxis: {
                    title: {
                        text: "Month"
                    },
                    categories: this.labels
                },
                yaxis: {
                    title: {
                        text: 'Temperature'
                    },
                    min: 5,
                    max: 40
                },
                colors: getColorCodes(this.$refs.labelLineChart.dataset), // Utilize the function to get hash color codes
            };
        }
    }));
});

//Zoomable Timeseries Charts
document.addEventListener("alpine:init", () => {
    Alpine.data("zoomableLineApp", () => ({
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
        init() {
            // Initial chart render
            this.renderChart();

            // Reload chart on window resize
            window.addEventListener('resize', this.reloadChart.bind(this));
        },
        renderChart() {
            // Destroy previous instance if exists
            if (this.zoomableLineChart)
                this.zoomableLineChart.destroy();

            // Initialize new chart
            this.zoomableLineChart = new ApexCharts(this.$refs.zoomableLineChart, this.options);
            this.zoomableLineChart.render();
        },
        reloadChart() {
            // Handle the logic for resizing
            this.renderChart(); // Re-render chart on resize
        },
        get options() {
            return {
                series: [
                    {
                        name: "XYZ MOTORS",
                        data: [{
                            x: new Date('2024-06-12').getTime(),
                            y: 140
                        }, {
                            x: new Date('2024-06-13').getTime(),
                            y: 147
                        }, {
                            x: new Date('2024-06-14').getTime(),
                            y: 150
                        }, {
                            x: new Date('2024-06-15').getTime(),
                            y: 154
                        }, {
                            x: new Date('2024-06-16').getTime(),
                            y: 160
                        }, {
                            x: new Date('2024-06-17').getTime(),
                            y: 165
                        }, {
                            x: new Date('2024-06-18').getTime(),
                            y: 162
                        }, {
                            x: new Date('2024-06-20').getTime(),
                            y: 159
                        }, {
                            x: new Date('2024-06-21').getTime(),
                            y: 164
                        }, {
                            x: new Date('2024-06-22').getTime(),
                            y: 160
                        }, {
                            x: new Date('2024-06-23').getTime(),
                            y: 165
                        }, {
                            x: new Date('2024-06-24').getTime(),
                            y: 169
                        }, {
                            x: new Date('2024-06-25').getTime(),
                            y: 172
                        }, {
                            x: new Date('2024-06-26').getTime(),
                            y: 177
                        }, {
                            x: new Date('2024-06-27').getTime(),
                            y: 173
                        }, {
                            x: new Date('2024-06-28').getTime(),
                            y: 169
                        }, {
                            x: new Date('2024-06-29').getTime(),
                            y: 163
                        }, {
                            x: new Date('2024-06-30').getTime(),
                            y: 158
                        }, {
                            x: new Date('2024-07-01').getTime(),
                            y: 153
                        }, {
                            x: new Date('2024-07-02').getTime(),
                            y: 149
                        }, {
                            x: new Date('2024-07-03').getTime(),
                            y: 144
                        }, {
                            x: new Date('2024-07-05').getTime(),
                            y: 150
                        }, {
                            x: new Date('2024-07-06').getTime(),
                            y: 155
                        }, {
                            x: new Date('2024-07-07').getTime(),
                            y: 159
                        }, {
                            x: new Date('2024-07-08').getTime(),
                            y: 163
                        }, {
                            x: new Date('2024-07-09').getTime(),
                            y: 156
                        }, {
                            x: new Date('2024-07-11').getTime(),
                            y: 151
                        }, {
                            x: new Date('2024-07-12').getTime(),
                            y: 157
                        }, {
                            x: new Date('2024-07-13').getTime(),
                            y: 161
                        }, {
                            x: new Date('2024-07-14').getTime(),
                            y: 150
                        }, {
                            x: new Date('2024-07-15').getTime(),
                            y: 154
                        }, {
                            x: new Date('2024-07-16').getTime(),
                            y: 160
                        }, {
                            x: new Date('2024-07-17').getTime(),
                            y: 165
                        }, {
                            x: new Date('2024-07-18').getTime(),
                            y: 162
                        }, {
                            x: new Date('2024-07-20').getTime(),
                            y: 159
                        }, {
                            x: new Date('2024-07-21').getTime(),
                            y: 164
                        }, {
                            x: new Date('2024-07-22').getTime(),
                            y: 160
                        }, {
                            x: new Date('2024-07-23').getTime(),
                            y: 165
                        }, {
                            x: new Date('2024-07-24').getTime(),
                            y: 169
                        }, {
                            x: new Date('2024-07-25').getTime(),
                            y: 172
                        }, {
                            x: new Date('2024-07-26').getTime(),
                            y: 177
                        }, {
                            x: new Date('2024-07-27').getTime(),
                            y: 173
                        }, {
                            x: new Date('2024-07-28').getTime(),
                            y: 169
                        }, {
                            x: new Date('2024-07-29').getTime(),
                            y: 163
                        }, {
                            x: new Date('2024-07-30').getTime(),
                            y: 162
                        }, {
                            x: new Date('2024-08-01').getTime(),
                            y: 158
                        }, {
                            x: new Date('2024-08-02').getTime(),
                            y: 152
                        }, {
                            x: new Date('2024-08-03').getTime(),
                            y: 147
                        }, {
                            x: new Date('2024-08-05').getTime(),
                            y: 142
                        }, {
                            x: new Date('2024-08-06').getTime(),
                            y: 147
                        }, {
                            x: new Date('2024-08-07').getTime(),
                            y: 151
                        }, {
                            x: new Date('2024-08-08').getTime(),
                            y: 155
                        }, {
                            x: new Date('2024-08-09').getTime(),
                            y: 159
                        }, {
                            x: new Date('2024-08-11').getTime(),
                            y: 162
                        }, {
                            x: new Date('2024-08-12').getTime(),
                            y: 157
                        }, {
                            x: new Date('2024-08-13').getTime(),
                            y: 161
                        }, {
                            x: new Date('2024-08-14').getTime(),
                            y: 166
                        }, {
                            x: new Date('2024-08-15').getTime(),
                            y: 169
                        }, {
                            x: new Date('2024-08-16').getTime(),
                            y: 172
                        }, {
                            x: new Date('2024-08-17').getTime(),
                            y: 177
                        }, {
                            x: new Date('2024-08-18').getTime(),
                            y: 181
                        }, {
                            x: new Date('2024-08-20').getTime(),
                            y: 178
                        }, {
                            x: new Date('2024-08-21').getTime(),
                            y: 173
                        }, {
                            x: new Date('2024-08-22').getTime(),
                            y: 169
                        }, {
                            x: new Date('2024-08-23').getTime(),
                            y: 163
                        }, {
                            x: new Date('2024-08-24').getTime(),
                            y: 159
                        }, {
                            x: new Date('2024-08-25').getTime(),
                            y: 164
                        }, {
                            x: new Date('2024-08-26').getTime(),
                            y: 168
                        }, {
                            x: new Date('2024-08-27').getTime(),
                            y: 172
                        }, {
                            x: new Date('2024-08-28').getTime(),
                            y: 169
                        }, {
                            x: new Date('2024-08-29').getTime(),
                            y: 163
                        }, {
                            x: new Date('2024-08-30').getTime(),
                            y: 162
                        }, {
                            x: new Date('2024-09-01').getTime(),
                            y: 158
                        }, {
                            x: new Date('2024-09-02').getTime(),
                            y: 152
                        }, {
                            x: new Date('2024-09-03').getTime(),
                            y: 147
                        }, {
                            x: new Date('2024-09-05').getTime(),
                            y: 142
                        }, {
                            x: new Date('2024-09-06').getTime(),
                            y: 147
                        }, {
                            x: new Date('2024-09-07').getTime(),
                            y: 151
                        }, {
                            x: new Date('2024-09-08').getTime(),
                            y: 155
                        }, {
                            x: new Date('2024-09-09').getTime(),
                            y: 159
                        }, {
                            x: new Date('2024-09-11').getTime(),
                            y: 162
                        }, {
                            x: new Date('2024-09-12').getTime(),
                            y: 157
                        }, {
                            x: new Date('2024-09-13').getTime(),
                            y: 161
                        }, {
                            x: new Date('2024-09-14').getTime(),
                            y: 166
                        }, {
                            x: new Date('2024-09-15').getTime(),
                            y: 169
                        }, {
                            x: new Date('2024-09-16').getTime(),
                            y: 172
                        }, {
                            x: new Date('2024-09-17').getTime(),
                            y: 177
                        }, {
                            x: new Date('2024-09-18').getTime(),
                            y: 181
                        }, {
                            x: new Date('2024-09-20').getTime(),
                            y: 178
                        }, {
                            x: new Date('2024-09-21').getTime(),
                            y: 173
                        }],
                    }
                ],
                chart: {
                    defaultLocale: "en",
                    height: 300,
                    type: "area",
                    stacked: false,
                    zoom: {
                        type: 'x',
                        enabled: true,
                        autoScaleYaxis: true
                    },
                    toolbar: {
                        autoSelected: 'zoom'
                    }
                },
                dataLabels: {
                    enabled: false
                },
                colors: getColorCodes(this.$refs.zoomableLineChart.dataset),
                markers: {
                    size: 0,
                },
                title: {
                    text: 'Stock Price Movement',
                    align: 'left'
                },
                grid: {
                    padding: {
                        top: -20,
                        right: 0,
                        bottom: 0,
                    },
                },
                fill: {
                    type: 'gradient',
                    gradient: {
                        shadeIntensity: 1,
                        inverseColors: false,
                        opacityFrom: 0.5,
                        opacityTo: 0,
                        stops: [0, 90, 100]
                    },
                },
                yaxis: {
                    labels: {
                        formatter: function (val) {
                            return (val / 1000000).toFixed(0);
                        },
                    },
                    title: {
                        text: 'Price'
                    },
                },
                xaxis: {
                    type: 'datetime',
                },
                tooltip: {
                    shared: false,
                    y: {
                        formatter: function (val) {
                            return (val / 1000000).toFixed(0)
                        }
                    }
                },
            };
        }
    }));
});

//stepline Charts
document.addEventListener("alpine:init", () => {
    Alpine.data("steplineLineApp", () => ({
        values: [34, 44, 54, 21, 12, 43, 33, 23, 66, 66, 58],
        init() {
            // Initial chart render
            this.renderChart();

            // Reload chart on window resize
            window.addEventListener('resize', this.reloadChart.bind(this));
        },
        renderChart() {
            // Destroy previous instance if exists
            if (this.steplineLineChart)
                this.steplineLineChart.destroy();

            // Initialize new chart
            this.steplineLineChart = new ApexCharts(this.$refs.steplineLineChart, this.options);
            this.steplineLineChart.render();
        },
        reloadChart() {
            // Handle the logic for resizing
            this.renderChart(); // Re-render chart on resize
        },
        formatCurrency: (x) => {
            return "$" + x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
        },
        get options() {
            return {
                series: [
                    {
                        data: this.values
                    }
                ],
                chart: {
                    defaultLocale: "en",
                    height: 300,
                    type: "line",
                    zoom: {
                        enabled: true
                    },
                },
                stroke: {
                    curve: 'stepline',
                },
                dataLabels: {
                    enabled: false
                },
                title: {
                    text: 'Stepline Chart',
                    align: 'left'
                },
                markers: {
                    hover: {
                        sizeOffset: 4
                    }
                },
                colors: getColorCodes(this.$refs.steplineLineChart.dataset),
                grid: {
                    padding: {
                        top: 0,
                        right: 5,
                        bottom: 0,
                    },
                }
            };
        }
    }));
});

//Gradient Charts
document.addEventListener("alpine:init", () => {
    Alpine.data("gradientLineApp", () => ({
        values: [4, 3, 10, 9, 29, 19, 22, 9, 12, 7, 19, 5, 13, 9, 17, 2, 7, 5],
        init() {
            // Initial chart render
            this.renderChart();

            // Reload chart on window resize
            window.addEventListener('resize', this.reloadChart.bind(this));
        },
        renderChart() {
            // Destroy previous instance if exists
            if (this.gradientLineChart)
                this.gradientLineChart.destroy();

            // Initialize new chart
            this.gradientLineChart = new ApexCharts(this.$refs.gradientLineChart, this.options);
            this.gradientLineChart.render();
        },
        reloadChart() {
            // Handle the logic for resizing
            this.renderChart(); // Re-render chart on resize
        },
        formatCurrency: (x) => {
            return "$" + x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
        },
        get options() {
            return {
                series: [
                    {
                        name: 'Sales',
                        data: this.values
                    }
                ],
                chart: {
                    defaultLocale: "en",
                    height: 300,
                    type: "line",
                    zoom: {
                        enabled: true
                    },
                },
                forecastDataPoints: {
                    count: 7
                },
                stroke: {
                    width: 5,
                    curve: 'smooth'
                },
                xaxis: {
                    type: 'datetime',
                    categories: ['1/11/2000', '2/11/2000', '3/11/2000', '4/11/2000', '5/11/2000', '6/11/2000', '7/11/2000', '8/11/2000', '9/11/2000', '10/11/2000', '11/11/2000', '12/11/2000', '1/11/2001', '2/11/2001', '3/11/2001', '4/11/2001', '5/11/2001', '6/11/2001'],
                    tickAmount: 10,
                    labels: {
                        formatter: function (value, timestamp, opts) {
                            return opts.dateFormatter(new Date(timestamp), 'dd MMM')
                        }
                    }
                },
                title: {
                    text: 'Forecast',
                    align: 'left',
                    style: {
                        fontSize: "16px",
                        color: '#666'
                    }
                },
                fill: {
                    type: 'gradient',
                    gradient: {
                        shade: 'dark',
                        gradientToColors: ['#FDD835'],
                        shadeIntensity: 1,
                        type: 'horizontal',
                        opacityFrom: 1,
                        opacityTo: 1,
                        stops: [0, 100, 100, 100]
                    },
                },
                yaxis: {
                    min: -10,
                    max: 40
                },
                
                colors: getColorCodes(this.$refs.gradientLineChart.dataset),
                grid: {
                    padding: {
                        top: 0,
                        right: 5,
                        bottom: 0,
                    },
                }
            };
        }
    }));
});

//Dashed Charts
document.addEventListener("alpine:init", () => {
    Alpine.data("dashedLineApp", () => ({
        series: [{
            name: "Session Duration",
            data: [45, 52, 38, 24, 33, 26, 21, 20, 6, 8, 15, 10]
        },
        {
            name: "Page Views",
            data: [35, 41, 62, 42, 13, 18, 29, 37, 36, 51, 32, 35]
        },
        {
            name: 'Total Visits',
            data: [87, 57, 74, 99, 75, 38, 62, 47, 82, 56, 45, 47]
        }
        ],
        labels: ['01 Jan', '02 Jan', '03 Jan', '04 Jan', '05 Jan', '06 Jan', '07 Jan', '08 Jan', '09 Jan', '10 Jan', '11 Jan', '12 Jan'],
        init() {
            // Initial chart render
            this.renderChart();

            // Reload chart on window resize
            window.addEventListener('resize', this.reloadChart.bind(this));
        },
        renderChart() {
            // Destroy previous instance if exists
            if (this.dashedLineChart)
                this.dashedLineChart.destroy();

            // Initialize new chart
            this.dashedLineChart = new ApexCharts(this.$refs.dashedLineChart, this.options);
            this.dashedLineChart.render();
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
                    height: 300,
                    type: "line",
                    zoom: {
                        enabled: false
                    },
                },
                dataLabels: {
                    enabled: false
                },
                stroke: {
                    width: [5, 7, 5],
                    curve: 'straight',
                    dashArray: [0, 8, 5]
                },
                title: {
                    text: 'Page Statistics',
                    align: 'left'
                },
                legend: {
                    tooltipHoverFormatter: function (val, opts) {
                        return val + ' - <strong>' + opts.w.globals.series[opts.seriesIndex][opts.dataPointIndex] + '</strong>'
                    }
                },
                markers: {
                    size: 0,
                    hover: {
                        sizeOffset: 6
                    }
                },
                grid: {
                    padding: {
                        top: -20,
                        right: 0,
                        bottom: 0,
                    },
                },
                tooltip: {
                    y: [
                        {
                            title: {
                                formatter: function (val) {
                                    return val + " (mins)"
                                }
                            }
                        },
                        {
                            title: {
                                formatter: function (val) {
                                    return val + " per session"
                                }
                            }
                        },
                        {
                            title: {
                                formatter: function (val) {
                                    return val;
                                }
                            }
                        }
                    ]
                },
                colors: getColorCodes(this.$refs.dashedLineChart.dataset),
            };
        }
    }));
});
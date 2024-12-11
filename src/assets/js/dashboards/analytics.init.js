import { getColorCodes } from "../helpers/helper";

//Sales revenue Charts
document.addEventListener("alpine:init", () => {
    Alpine.data("salesRevenueApp", () => ({
        series: [{
            name: 'Total Revenue',
            data: [31, 40, 28, 51, 42, 119, 100]
        }],
        labels: ['Jan', 'Feb', 'March', 'April', 'May', 'June', 'July'],
        init() {
            // Fetch color codes first
            this.colorCodes = getColorCodes(this.$refs.salesRevenueChart.dataset);

            // Initialize the chart with options
            let salesRevenueChart = new ApexCharts(this.$refs.salesRevenueChart, this.options);
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
                        return val + ' - <strong>' + opts.w.globals.series[opts.seriesIndex][opts.dataPointIndex] + '</strong>'
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
                colors: getColorCodes(this.$refs.salesRevenueChart.dataset),
            };
        }
    }));
});

//ads revenue Charts
document.addEventListener("alpine:init", () => {
    Alpine.data("adsRevenueApp", () => ({
        series: [{
            name: 'Total Revenue',
            data: [31, 77, 44, 31, 63, 94, 109]
        }],
        labels: ['Jan', 'Feb', 'March', 'April', 'May', 'June', 'July'],
        init() {
            // Fetch color codes first
            this.colorCodes = getColorCodes(this.$refs.adsRevenueChart.dataset);

            // Initialize the chart with options
            let adsRevenueChart = new ApexCharts(this.$refs.adsRevenueChart, this.options);
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
                        return val + ' - <strong>' + opts.w.globals.series[opts.seriesIndex][opts.dataPointIndex] + '</strong>'
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
                colors: getColorCodes(this.$refs.adsRevenueChart.dataset),
            };
        }
    }));
});

//Web Analytics Charts
document.addEventListener("alpine:init", () => {
    Alpine.data("webAnalyticsApp", () => ({
        series: [
            {
                name: 'Referral',
                data: [
                    {
                        x: 'Aug',
                        y: 43,
                    },
                    {
                        x: 'Sep',
                        y: 58,
                    },
                    {
                        x: 'Oct',
                        y: 66,
                    },
                    {
                        x: 'Nov',
                        y: 44,
                    },
                ],
            },
            {
                name: 'Direct',
                data: [
                    {
                        x: 'Aug',
                        y: 33,
                    },
                    {
                        x: 'Sep',
                        y: 43,
                    },
                    {
                        x: 'Oct',
                        y: 34,
                    },
                    {
                        x: 'Nov',
                        y: 53,
                    },
                ],
            },
            {
                name: 'Ads',
                data: [
                    {
                        x: 'Jan',
                        y: 55,
                    },
                    {
                        x: 'Feb',
                        y: 33,
                    },
                    {
                        x: 'Oct',
                        y: 54,
                    },
                    {
                        x: 'Nov',
                        y: 65,
                    },
                ],
            },
        ],
        init() {
            // Initial chart render
            this.renderChart();

            // Reload chart on window resize
            window.addEventListener('resize', this.reloadChart.bind(this));
        },
        renderChart() {
            // Destroy previous instance if exists
            if (this.webAnalyticsChart)
                this.webAnalyticsChart.destroy();

            // Initialize new chart
            this.webAnalyticsChart = new ApexCharts(this.$refs.webAnalyticsChart, this.options);
            this.webAnalyticsChart.render();
        },
        reloadChart() {
            // Handle the logic for resizing
            this.renderChart(); // Re-render chart on resize
        },
        get options() {
            return {
                series: this.series,
                chart: {
                    height: 315,
                    type: "line",
                },
                stroke: {
                    curve: 'smooth',
                    width: 3,
                },
                plotOptions: {
                    line: {
                        isSlopeChart: true,
                    },
                },
                dataLabels: {
                    background: {
                        enabled: true,
                    },
                    formatter(val, opts) {
                        const seriesName = opts.w.config.series[opts.seriesIndex].name
                        return val !== null ? seriesName : ''
                    },
                },
                legend: {
                    show: false,
                    position: 'bottom',
                    horizontalAlign: 'center',
                },
                grid: {
                    padding: {
                        bottom: -15,
                        right: 0
                    }
                },
                xaxis: {
                    axisBorder: {
                        show: false,
                    }
                },
                colors: getColorCodes(this.$refs.webAnalyticsChart.dataset), // Utilize the function to get hash color codes
            };
        }
    }));
});

//Average Online Sales Chart
document.addEventListener("alpine:init", () => {
    Alpine.data("averageOnlineSalesApp", () => ({
        series: [{
            name: 'Total Sales',
            data: [44, 55, 41, 67, 22, 43, 21, 33]
        }],
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Pears'],
        init() {
            // Initial chart render
            this.renderChart();

            // Reload chart on window resize
            window.addEventListener('resize', this.reloadChart.bind(this));
        },
        renderChart() {
            // Destroy previous instance if exists
            if (this.averageOnlineSalesChart)
                this.averageOnlineSalesChart.destroy();

            // Initialize new chart
            this.averageOnlineSalesChart = new ApexCharts(this.$refs.averageOnlineSalesChart, this.options);
            this.averageOnlineSalesChart.render();
        },
        reloadChart() {
            // Handle the logic for resizing
            this.renderChart(); // Re-render chart on resize
        },
        get options() {
            return {
                series: this.series,
                chart: {
                    height: 160,
                    type: 'bar',
                    sparkline: { enabled: !0 },
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
                colors: getColorCodes(this.$refs.averageOnlineSalesChart.dataset),
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
                        inverseColors: true,
                        opacityFrom: 0.85,
                        opacityTo: 0.85,
                        stops: [50, 0, 100]
                    },
                }
            };
        }
    }));
});

//Average Weekly Sales Chart
document.addEventListener("alpine:init", () => {
    Alpine.data("averageOnlineWeeklyApp", () => ({
        series: [{
            name: 'Total Sales',
            data: [22, 43, 21, 44, 55, 33, 41]
        }],
        labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        init() {
            // Initial chart render
            this.renderChart();

            // Reload chart on window resize
            window.addEventListener('resize', this.reloadChart.bind(this));
        },
        renderChart() {
            // Destroy previous instance if exists
            if (this.averageOnlineWeeklyChart)
                this.averageOnlineWeeklyChart.destroy();

            // Initialize new chart
            this.averageOnlineWeeklyChart = new ApexCharts(this.$refs.averageOnlineWeeklyChart, this.options);
            this.averageOnlineWeeklyChart.render();
        },
        reloadChart() {
            // Handle the logic for resizing
            this.renderChart(); // Re-render chart on resize
        },
        get options() {
            return {
                series: this.series,
                chart: {
                    height: 160,
                    type: 'bar',
                    sparkline: { enabled: !0 },
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
                colors: getColorCodes(this.$refs.averageOnlineWeeklyChart.dataset),
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
                        inverseColors: true,
                        opacityFrom: 0.85,
                        opacityTo: 0.85,
                        stops: [50, 0, 100]
                    },
                }
            };
        }
    }));
});

//Visit Browsers Chart
document.addEventListener("alpine:init", () => {
    Alpine.data("visitBrowsersApp", () => ({
        series: [44, 55, 41],
        labels: ['Chrome', 'Safari', 'Edge'],
        init() {
            // Initial chart render
            this.renderChart();

            // Reload chart on window resize
            window.addEventListener('resize', this.reloadChart.bind(this));
        },
        renderChart() {
            // Destroy previous instance if exists
            if (this.visitBrowsersChart)
                this.visitBrowsersChart.destroy();

            // Initialize new chart
            this.visitBrowsersChart = new ApexCharts(this.$refs.visitBrowsersChart, this.options);
            this.visitBrowsersChart.render();
        },
        reloadChart() {
            // Handle the logic for resizing
            this.renderChart(); // Re-render chart on resize
        },
        get options() {
            return {
                series: this.series,
                chart: {
                    height: 160,
                    type: "donut",
                },
                dataLabels: {
                    enabled: false
                },
                plotOptions: {
                    pie: {
                        startAngle: -90,
                        endAngle: 90,
                        offsetY: 10
                    }
                },
                labels: this.labels,
                colors: getColorCodes(this.$refs.visitBrowsersChart.dataset),
                fill: {
                    type: 'gradient',
                },
                grid: {
                    padding: {
                        bottom: -80
                    }
                },
                legend: {
                    position: 'bottom'
                }
            };
        }
    }));
});

//Traffic Source Chart
document.addEventListener("alpine:init", () => {
    Alpine.data("trafficSourceApp", () => ({
        series: [{
            name: 'Direct Traffic',
            data: [44, 55, 57, 56, 61, 58, 63, 60, 66]
        }, {
            name: 'Search Engine Traffic',
            data: [76, 85, 101, 98, 87, 105, 91, 114, 94]
        }],
        init() {
            // Initial chart render
            this.renderChart();

            // Reload chart on window resize
            window.addEventListener('resize', this.reloadChart.bind(this));
        },
        renderChart() {
            // Destroy previous instance if exists
            if (this.trafficSourceChart)
                this.trafficSourceChart.destroy();

            // Initialize new chart
            this.trafficSourceChart = new ApexCharts(this.$refs.trafficSourceChart, this.options);
            this.trafficSourceChart.render();
        },
        reloadChart() {
            // Handle the logic for resizing
            this.renderChart(); // Re-render chart on resize
        },
        get options() {
            return {
                series: this.series,
                chart: {
                    height: 145,
                    type: "bar",
                    sparkline: { enabled: !0 },
                },
                plotOptions: {
                    bar: {
                        horizontal: false,
                        columnWidth: '55%',
                        endingShape: 'rounded'
                    },
                },
                dataLabels: {
                    enabled: false
                },
                legend: {
                    show: true,
                    position: 'top',
                    horizontalAlign: 'start',
                    offsetY: -3,
                },
                stroke: {
                    show: true,
                    width: 2,
                    colors: ['transparent']
                },
                colors: getColorCodes(this.$refs.trafficSourceChart.dataset),
                xaxis: {
                    categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'],
                },
                grid: {
                    padding: {
                        top: 4,
                        right: 0,
                        left: 0,
                    }
                },
                tooltip: {
                    y: {
                        formatter: function (val) {
                            return "$" + val + "k"
                        }
                    }
                }
            };
        }
    }));
});

//Stacked Columns Chart
document.addEventListener("alpine:init", () => {
    Alpine.data("followersApp", () => ({
        series: [{
            name: 'Followers',
            data: [44, 55, 41, 67, 22, 43]
        }, {
            name: 'Unfollow',
            data: [13, 23, 20, 8, 13, 27]
        }],
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
        init() {
            // Initial chart render
            this.renderChart();

            // Reload chart on window resize
            window.addEventListener('resize', this.reloadChart.bind(this));
        },
        renderChart() {
            // Destroy previous instance if exists
            if (this.followersChart)
                this.followersChart.destroy();

            // Initialize new chart
            this.followersChart = new ApexCharts(this.$refs.followersChart, this.options);
            this.followersChart.render();
        },
        reloadChart() {
            // Handle the logic for resizing
            this.renderChart(); // Re-render chart on resize
        },
        get options() {
            return {
                series: this.series,
                chart: {
                    height: 360,
                    type: "bar",
                    stacked: true,
                    toolbar: {
                        show: false
                    },
                    zoom: {
                        enabled: true
                    }
                },
                colors: getColorCodes(this.$refs.followersChart.dataset),
                plotOptions: {
                    bar: {
                        columnWidth: '40%',
                        horizontal: false,
                        borderRadius: 13,
                    },
                },
                labels: this.labels,
                legend: {
                    position: 'bottom',
                },
                grid: {
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
                    padding: {
                        top: -20,
                        right: 0,
                        bottom: 0,
                    },
                }
            };
        }
    }));
});
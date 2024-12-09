import { getColorCodes } from "../helpers/helper.js";

//basic Chart
document.addEventListener("alpine:init", () => {
    Alpine.data("basiTreepmapApp", () => ({
        series: [
            {
                data: [
                    {
                        x: 'New Delhi',
                        y: 218
                    },
                    {
                        x: 'Kolkata',
                        y: 149
                    },
                    {
                        x: 'Mumbai',
                        y: 184
                    },
                    {
                        x: 'Ahmedabad',
                        y: 55
                    },
                    {
                        x: 'Bengaluru',
                        y: 84
                    },
                    {
                        x: 'Pune',
                        y: 31
                    },
                    {
                        x: 'Chennai',
                        y: 70
                    },
                    {
                        x: 'Jaipur',
                        y: 30
                    },
                    {
                        x: 'Surat',
                        y: 44
                    },
                    {
                        x: 'Hyderabad',
                        y: 68
                    },
                    {
                        x: 'Lucknow',
                        y: 28
                    },
                    {
                        x: 'Indore',
                        y: 19
                    },
                    {
                        x: 'Kanpur',
                        y: 29
                    }
                ]
            }
        ],
        init() {
            // Initial chart render
            this.renderChart();

            // Reload chart on window resize
            window.addEventListener('resize', this.reloadChart.bind(this));
        },
        renderChart() {
            // Destroy previous instance if exists
            if (this.basiTreepmapChart)
                this.basiTreepmapChart.destroy();

            // Initialize new chart
            this.basiTreepmapChart = new ApexCharts(this.$refs.basiTreepmapChart, this.options);
            this.basiTreepmapChart.render();
        },
        reloadChart() {
            // Handle the logic for resizing
            this.renderChart(); // Re-render chart on resize
        },
        get options() {
            return {
                series: this.series,
                chart: {
                    height: 300,
                    type: "treemap",
                },
                colors: getColorCodes(this.$refs.basiTreepmapChart.dataset),
                legend: {
                    show: false
                },
                title: {
                    text: 'Basic Treemap'
                }
            };
        }
    }));
});

//Treemap Multiple Series
document.addEventListener("alpine:init", () => {
    Alpine.data("multipleTreemapApp", () => ({
        series: [
            {
                name: 'Desktops',
                data: [
                    {
                        x: 'ABC',
                        y: 10
                    },
                    {
                        x: 'DEF',
                        y: 60
                    },
                    {
                        x: 'XYZ',
                        y: 41
                    }
                ]
            },
            {
                name: 'Mobile',
                data: [
                    {
                        x: 'ABCD',
                        y: 10
                    },
                    {
                        x: 'DEFG',
                        y: 20
                    },
                    {
                        x: 'WXYZ',
                        y: 51
                    },
                    {
                        x: 'PQR',
                        y: 30
                    },
                    {
                        x: 'MNO',
                        y: 20
                    },
                    {
                        x: 'CDE',
                        y: 30
                    }
                ]
            }
        ],
        init() {
            // Initial chart render
            this.renderChart();

            // Reload chart on window resize
            window.addEventListener('resize', this.reloadChart.bind(this));
        },
        renderChart() {
            // Destroy previous instance if exists
            if (this.multipleTreemapChart)
                this.multipleTreemapChart.destroy();

            // Initialize new chart
            this.multipleTreemapChart = new ApexCharts(this.$refs.multipleTreemapChart, this.options);
            this.multipleTreemapChart.render();
        },
        reloadChart() {
            // Handle the logic for resizing
            this.renderChart(); // Re-render chart on resize
        },
        get options() {
            return {
                series: this.series,
                chart: {
                    height: 300,
                    type: "treemap",
                },
                colors: getColorCodes(this.$refs.multipleTreemapChart.dataset),
                legend: {
                    show: false
                },
                title: {
                    text: 'Multi-dimensional Treemap',
                    align: 'center'
                }
            };
        }
    }));
});

//Color Range
document.addEventListener("alpine:init", () => {
    Alpine.data("colorRangeTreemapApp", () => ({
        series: [
            {
                data: [
                    {
                        x: 'INTC',
                        y: 1.2
                    },
                    {
                        x: 'GS',
                        y: 0.4
                    },
                    {
                        x: 'CVX',
                        y: -1.4
                    },
                    {
                        x: 'GE',
                        y: 2.7
                    },
                    {
                        x: 'CAT',
                        y: -0.3
                    },
                    {
                        x: 'RTX',
                        y: 5.1
                    },
                    {
                        x: 'CSCO',
                        y: -2.3
                    },
                    {
                        x: 'JNJ',
                        y: 2.1
                    },
                    {
                        x: 'PG',
                        y: 0.3
                    },
                    {
                        x: 'TRV',
                        y: 0.12
                    },
                    {
                        x: 'MMM',
                        y: -2.31
                    },
                    {
                        x: 'NKE',
                        y: 3.98
                    },
                    {
                        x: 'IYT',
                        y: 1.67
                    }
                ]
            }
        ],
        init() {
            // Initial chart render
            this.renderChart();

            // Reload chart on window resize
            window.addEventListener('resize', this.reloadChart.bind(this));
        },
        renderChart() {
            // Destroy previous instance if exists
            if (this.colorRangeTreemapChart)
                this.colorRangeTreemapChart.destroy();

            // Initialize new chart
            this.colorRangeTreemapChart = new ApexCharts(this.$refs.colorRangeTreemapChart, this.options);
            this.colorRangeTreemapChart.render();
        },
        reloadChart() {
            // Handle the logic for resizing
            this.renderChart(); // Re-render chart on resize
        },
        get options() {
            return {
                series: this.series,
                chart: {
                    height: 300,
                    type: "treemap",
                },
                legend: {
                    show: false
                },
                title: {
                    text: 'Treemap with Color scale'
                },
                dataLabels: {
                    enabled: true,
                    style: {
                        fontSize: '12px',
                    },
                    formatter: function (text, op) {
                        return [text, op.value]
                    },
                    offsetY: -4
                },
                colors: getColorCodes(this.$refs.colorRangeTreemapChart.dataset),
                plotOptions: {
                    treemap: {
                        enableShades: true,
                        shadeIntensity: 0.5,
                        reverseNegativeShade: true,
                        colorScale: {
                            ranges: [
                                {
                                    from: -6,
                                    to: 0,
                                    color: '#CD363A'
                                },
                                {
                                    from: 0.001,
                                    to: 6,
                                    color: '#52B12C'
                                }
                            ]
                        }
                    }
                }
            };
        }
    }));
});

//Distributed
document.addEventListener("alpine:init", () => {
    Alpine.data("distributedTreemapApp", () => ({
        series: [
            {
                data: [
                    {
                        x: 'New Delhi',
                        y: 218
                    },
                    {
                        x: 'Kolkata',
                        y: 149
                    },
                    {
                        x: 'Mumbai',
                        y: 184
                    },
                    {
                        x: 'Ahmedabad',
                        y: 55
                    },
                    {
                        x: 'Bangaluru',
                        y: 84
                    },
                    {
                        x: 'Pune',
                        y: 31
                    },
                    {
                        x: 'Chennai',
                        y: 70
                    },
                    {
                        x: 'Jaipur',
                        y: 30
                    },
                    {
                        x: 'Surat',
                        y: 44
                    },
                    {
                        x: 'Hyderabad',
                        y: 68
                    },
                    {
                        x: 'Lucknow',
                        y: 28
                    },
                    {
                        x: 'Indore',
                        y: 19
                    },
                    {
                        x: 'Kanpur',
                        y: 29
                    }
                ]
            }
        ],
        init() {
            // Initial chart render
            this.renderChart();

            // Reload chart on window resize
            window.addEventListener('resize', this.reloadChart.bind(this));
        },
        renderChart() {
            // Destroy previous instance if exists
            if (this.distributedTreemapChart)
                this.distributedTreemapChart.destroy();

            // Initialize new chart
            this.distributedTreemapChart = new ApexCharts(this.$refs.distributedTreemapChart, this.options);
            this.distributedTreemapChart.render();
        },
        reloadChart() {
            // Handle the logic for resizing
            this.renderChart(); // Re-render chart on resize
        },
        get options() {
            return {
                series: this.series,
                chart: {
                    height: 300,
                    type: "treemap",
                },
                legend: {
                    show: false
                },
                title: {
                    text: 'Distributed Treemap (different color for each cell)',
                    align: 'center'
                },
                colors: getColorCodes(this.$refs.distributedTreemapChart.dataset),
                plotOptions: {
                    treemap: {
                        distributed: true,
                        enableShades: false
                    }
                }
            };
        }
    }));
});
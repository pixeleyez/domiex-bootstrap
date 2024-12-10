import { getColorCodes } from "../helpers/helper.js";

document.addEventListener("alpine:init", () => {
    Alpine.data("basicBarApp", () => ({
        basicBarChart: null,
        series: [
            {
                data: [120, 200, 150, 80, 70, 110, 130],
                type: 'bar'
            }
        ],
        init() {
            // Reload chart on window resize
            window.addEventListener('resize', this.renderChart.bind(this));
        },
        renderChart() {
            // Handle the logic for resizing
            if (this.basicBarChart)
                this.basicBarChart.dispose();
            this.colorCodes = getColorCodes(this.$refs.basicBarChart.dataset);
            this.basicBarChart = echarts.init(this.$refs.basicBarChart, 'light');
            this.basicBarChart.setOption(this.options);
        },
        get options() {
            return {
                series: this.series,
                color: this.colorCodes,
                xAxis: {
                    type: 'category',
                    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
                },
                legend: {
                    textStyle: {
                        color: this.colorCodes[2]
                    }
                },
                yAxis: {
                    type: 'value',
                    splitLine: {
                        lineStyle: {
                            color: this.colorCodes[1] // Change this to the color you want for the horizontal lines
                        }
                    }
                },
                axisLine: {
                    lineStyle: {
                        color: this.colorCodes[1]
                    }
                },
                grid: {
                    top: '5%',
                    left: '5%',
                    right: '0%',
                    bottom: '6%',
                },
            };
        }
    }));
});

// });

//Axis Align with Tick
document.addEventListener("alpine:init", () => {
    Alpine.data("axisAlignBarApp", () => ({
        axisAlignBarChart: null,
        series: [
            {
                name: 'Direct',
                type: 'bar',
                barWidth: '60%',
                data: [10, 52, 200, 334, 390, 330, 220]
            }
        ],
        init() {
            // Reload chart on window resize
            window.addEventListener('resize', this.renderChart.bind(this));
        },
        renderChart() {
            // Handle the logic for resizing
            if (this.axisAlignBarChart)
                this.axisAlignBarChart.dispose();
            this.colorCodes = getColorCodes(this.$refs.axisAlignBarChart.dataset);
            this.axisAlignBarChart = echarts.init(this.$refs.axisAlignBarChart, 'light');
            this.axisAlignBarChart.setOption(this.options);
        },
        get options() {
            return {
                series: this.series,
                color: this.colorCodes,
                tooltip: {
                    trigger: 'axis',
                    axisPointer: {
                        type: 'shadow'
                    }
                },
                grid: {
                    top: '3%',
                    left: '2%',
                    right: '0%',
                    bottom: '2%',
                    containLabel: true
                },
                xAxis: [
                    {
                        type: 'category',
                        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
                        axisTick: {
                            alignWithLabel: true
                        }
                    }
                ],
                legend: {
                    textStyle: {
                        color: this.colorCodes[2]
                    }
                },
                axisLine: {
                    lineStyle: {
                        color: this.colorCodes[1]
                    }
                },
                yAxis: [
                    {
                        type: 'value',
                        splitLine: {
                            lineStyle: {
                                color: this.colorCodes[1] // Change this to the color you want for the horizontal lines
                            }
                        }
                    }
                ],
            }
        }

    }));
});

//Bar with Background
document.addEventListener("alpine:init", () => {
    Alpine.data("backgroundBarApp", () => ({
        backgroundBarChart: null,
        init() {
            // Reload chart on window resize
            window.addEventListener('resize', this.renderChart.bind(this));
        },
        renderChart() {
            // Handle the logic for resizing
            if (this.backgroundBarChart)
                this.backgroundBarChart.dispose();
            this.colorCodes = getColorCodes(this.$refs.backgroundBarChart.dataset);
            this.backgroundBarChart = echarts.init(this.$refs.backgroundBarChart, 'light');
            this.backgroundBarChart.setOption(this.options);
        },
        get options() {
            return {
                xAxis: {
                    type: 'category',
                    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
                },
                legend: {
                    textStyle: {
                        color: this.colorCodes[2]
                    }
                },
                yAxis: {
                    type: 'value',
                    splitLine: {
                        lineStyle: {
                            color: this.colorCodes[1] // Change this to the color you want for the horizontal lines
                        }
                    }
                },
                axisLine: {
                    lineStyle: {
                        color: this.colorCodes[1]
                    }
                },
                series: [
                    {
                        data: [120, 200, 150, 80, 70, 110, 130],
                        type: 'bar',
                        showBackground: true,
                        backgroundStyle: {
                            color: this.colorCodes[3]
                        }
                    }
                ],
                color: this.colorCodes,
                grid: {
                    top: '3%',
                    left: '2%',
                    right: '0%',
                    bottom: '2%',
                    containLabel: true
                },
            };
        }
    }));
});


//Set Style of Single Bar
document.addEventListener("alpine:init", () => {
    Alpine.data("singleBarApp", () => ({
        singleBarChart: null,
        init() {
            // Reload chart on window resize
            window.addEventListener('resize', this.renderChart.bind(this));
        },
        renderChart() {
            // Handle the logic for resizing
            if (this.singleBarChart)
                this.singleBarChart.dispose();
            this.colorCodes = getColorCodes(this.$refs.singleBarChart.dataset);
            this.singleBarChart = echarts.init(this.$refs.singleBarChart, 'light');
            this.singleBarChart.setOption(this.options);
        },
        get options() {
            return {
                xAxis: {
                    type: 'category',
                    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
                },
                yAxis: {
                    type: 'value'
                },
                grid: {
                    top: '3%',
                    left: '2%',
                    right: '0%',
                    bottom: '2%',
                    containLabel: true
                },
                series: [
                    {
                        data: [
                            120,
                            {
                                value: 200,
                                itemStyle: {
                                    color: this.colorCodes[1]
                                }
                            },
                            150,
                            80,
                            70,
                            110,
                            130
                        ],
                        type: 'bar'
                    }
                ],
                legend: {
                    textStyle: {
                        color: this.colorCodes[3]
                    }
                },
                axisLine: {
                    lineStyle: {
                        color: this.colorCodes[2]
                    }
                },
                yAxis: [
                    {
                        type: 'value',
                        splitLine: {
                            lineStyle: {
                                color: this.colorCodes[2] // Change this to the color you want for the horizontal lines
                            }
                        }
                    }
                ],
                color: this.colorCodes,
            };
        }
    }));
});


//World Population
document.addEventListener("alpine:init", () => {
    Alpine.data("worldPopulationBarApp", () => ({
        worldPopulationBarChart: null,
        series: [
            {
                name: '2011',
                type: 'bar',
                data: [18203, 23489, 29034, 104970, 131744, 630230]
            },
            {
                name: '2012',
                type: 'bar',
                data: [19325, 23438, 31000, 121594, 134141, 681807]
            }
        ],
        init() {
            // Reload chart on window resize
            window.addEventListener('resize', this.renderChart.bind(this));
        },
        renderChart() {
            // Handle the logic for resizing
            if (this.worldPopulationBarChart)
                this.worldPopulationBarChart.dispose();
            this.colorCodes = getColorCodes(this.$refs.worldPopulationBarChart.dataset);
            this.worldPopulationBarChart = echarts.init(this.$refs.worldPopulationBarChart, 'light');
            this.worldPopulationBarChart.setOption(this.options);
        },
        get options() {
            return {
                series: this.series,
                color: this.colorCodes,
                title: {
                    text: 'World Population',
                    textStyle: {
                        color: this.colorCodes[3]
                    }
                },
                tooltip: {
                    trigger: 'axis',
                    axisPointer: {
                        type: 'shadow'
                    }
                },
                legend: {
                    textStyle: {
                        color: this.colorCodes[3]
                    }
                },
                grid: {
                    left: '3%',
                    right: '4%',
                    bottom: '3%',
                    containLabel: true
                },
                xAxis: {
                    type: 'value',
                    boundaryGap: [0, 0.01],
                    splitLine: {
                        lineStyle: {
                            color: this.colorCodes[2] // Change this to the color you want for the horizontal lines
                        }
                    }
                },
                yAxis: {
                    type: 'category',
                    data: ['Brazil', 'Indonesia', 'USA', 'India', 'China', 'World'],
                },
            };
        }
    }));
});

//Stacked Bar with borderRadius
document.addEventListener("alpine:init", () => {
    Alpine.data("stackedBorderRadiusBarApp", () => ({
        stackedBorderRadiusBarChart: null,
        series: [
            {
                data: [120, 200, 150, 80, 70, 110, 130],
                type: 'bar',
                stack: 'a',
                name: 'a'
            },
            {
                data: [10, 46, 64, '-', 0, '-', 0],
                type: 'bar',
                stack: 'a',
                name: 'b'
            },
            {
                data: [30, '-', 0, 20, 10, '-', 0],
                type: 'bar',
                stack: 'a',
                name: 'c'
            },
            {
                data: [30, '-', 0, 20, 10, '-', 0],
                type: 'bar',
                stack: 'b',
                name: 'd'
            },
            {
                data: [10, 20, 150, 0, '-', 50, 10],
                type: 'bar',
                stack: 'b',
                name: 'e'
            }
        ],
        init() {
            // Reload chart on window resize
            window.addEventListener('resize', this.renderChart.bind(this));
        },
        renderChart() {
            // Handle the logic for resizing
            if (this.stackedBorderRadiusBarChart)
                this.stackedBorderRadiusBarChart.dispose();
            this.colorCodes = getColorCodes(this.$refs.stackedBorderRadiusBarChart.dataset);
            this.stackedBorderRadiusBarChart = echarts.init(this.$refs.stackedBorderRadiusBarChart, 'light');
            this.stackedBorderRadiusBarChart.setOption(this.options);
        },
        get options() {
            return {
                xAxis: {
                    type: 'category',
                    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
                },
                grid: {
                    top: '3%',
                    left: '3%',
                    right: '0%',
                    bottom: '3%',
                    containLabel: true
                },
                yAxis: {
                    type: 'value'
                },
                yAxis: [
                    {
                        type: 'value',
                        splitLine: {
                            lineStyle: {
                                color: this.colorCodes[3] // Change this to the color you want for the horizontal lines
                            }
                        }
                    }
                ],
                series: this.series,
                color: this.colorCodes,
            };
        }
    }));
});
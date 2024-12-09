import { getColorCodes } from "../helpers/helper.js";

//Basic
document.addEventListener("alpine:init", () => {
    Alpine.data("basicRadialbarApp", () => ({
        series: [70],
        labels: ['Cricket'],
        init() {
            // Initial chart render
            this.renderChart();

            // Reload chart on window resize
            window.addEventListener('resize', this.reloadChart.bind(this));
        },
        renderChart() {
            // Destroy previous instance if exists
            if (this.basicRadialbarChart)
                this.basicRadialbarChart.destroy();

            // Initialize new chart
            this.basicRadialbarChart = new ApexCharts(this.$refs.basicRadialbarChart, this.options);
            this.basicRadialbarChart.render();
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
                    type: "radialBar",
                },
                colors: getColorCodes(this.$refs.basicRadialbarChart.dataset),
                plotOptions: {
                    radialBar: {
                        hollow: {
                            size: '70%',
                        }
                    },
                },
                labels: this.labels,
            };
        }
    }));
});

//Multiple
document.addEventListener("alpine:init", () => {
    Alpine.data("multipleRadialbarApp", () => ({
        series: [44, 55, 67, 83],
        labels: ['Apples', 'Oranges', 'Bananas', 'Berries'],
        init() {
            // Initial chart render
            this.renderChart();

            // Reload chart on window resize
            window.addEventListener('resize', this.reloadChart.bind(this));
        },
        renderChart() {
            // Destroy previous instance if exists
            if (this.multipleRadialbarChart)
                this.multipleRadialbarChart.destroy();

            // Initialize new chart
            this.multipleRadialbarChart = new ApexCharts(this.$refs.multipleRadialbarChart, this.options);
            this.multipleRadialbarChart.render();
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
                    type: "radialBar",
                },
                plotOptions: {
                    radialBar: {
                        dataLabels: {
                            name: {
                                fontSize: '22px',
                            },
                            value: {
                                fontSize: '16px',
                            },
                            total: {
                                show: true,
                                label: 'Total',
                                formatter: function (w) {
                                    // By default this function returns the average of all series. The below is just an example to show the use of custom formatter function
                                    return 249
                                }
                            }
                        }
                    }
                },
                colors: getColorCodes(this.$refs.multipleRadialbarChart.dataset),
                labels: this.labels,
            };
        }
    }));
});

//Custom Angle Circle
document.addEventListener("alpine:init", () => {
    Alpine.data("customAngleRadialbarApp", () => ({
        series: [76, 67, 61, 90],
        labels: ['Vimeo', 'Messenger', 'Facebook', 'LinkedIn'],
        init() {
            // Initial chart render
            this.renderChart();

            // Reload chart on window resize
            window.addEventListener('resize', this.reloadChart.bind(this));
        },
        renderChart() {
            // Destroy previous instance if exists
            if (this.customAngleRadialbarChart)
                this.customAngleRadialbarChart.destroy();

            // Initialize new chart
            this.customAngleRadialbarChart = new ApexCharts(this.$refs.customAngleRadialbarChart, this.options);
            this.customAngleRadialbarChart.render();
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
                    type: "radialBar",
                },
                plotOptions: {
                    radialBar: {
                        offsetY: 0,
                        startAngle: 0,
                        endAngle: 270,
                        hollow: {
                            margin: 5,
                            size: '30%',
                            background: 'transparent',
                            image: undefined,
                        },
                        dataLabels: {
                            name: {
                                show: false,
                            },
                            value: {
                                show: false,
                            }
                        }
                    }
                },
                colors: getColorCodes(this.$refs.customAngleRadialbarChart.dataset),
                legend: {
                    show: true,
                    floating: true,
                    fontSize: '16px',
                    position: 'left',
                    offsetX: 160,
                    offsetY: 15,
                    labels: {
                        useSeriesColors: true,
                    },
                    markers: {
                        size: 0
                    },
                    formatter: function (seriesName, opts) {
                        return seriesName + ":  " + opts.w.globals.series[opts.seriesIndex]
                    },
                    itemMargin: {
                        vertical: 3
                    }
                },
                responsive: [{
                    breakpoint: 480,
                    options: {
                        legend: {
                            show: false
                        }
                    }
                }],
                labels: this.labels,
            };
        }
    }));
});

//Gradient
document.addEventListener("alpine:init", () => {
    Alpine.data("gradientRadialbarApp", () => ({
        series: [75],
        labels: ['Percent'],
        init() {
            // Initial chart render
            this.renderChart();

            // Reload chart on window resize
            window.addEventListener('resize', this.reloadChart.bind(this));
        },
        renderChart() {
            // Destroy previous instance if exists
            if (this.gradientRadialbarChart)
                this.gradientRadialbarChart.destroy();

            // Initialize new chart
            this.gradientRadialbarChart = new ApexCharts(this.$refs.gradientRadialbarChart, this.options);
            this.gradientRadialbarChart.render();
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
                    type: "radialBar",
                    toolbar: {
                        show: true
                    }
                },
                plotOptions: {
                    radialBar: {
                        startAngle: -135,
                        endAngle: 225,
                        hollow: {
                            margin: 0,
                            size: '70%',
                            image: undefined,
                            imageOffsetX: 0,
                            imageOffsetY: 0,
                            position: 'front',
                        },
                        track: {
                            strokeWidth: '67%',
                            margin: 0, // margin is in pixels
                        },

                        dataLabels: {
                            show: true,
                            name: {
                                offsetY: -10,
                                show: true,
                                color: '#888',
                                fontSize: '17px'
                            },
                            value: {
                                formatter: function (val) {
                                    return parseInt(val);
                                },
                                color: '#111',
                                fontSize: '36px',
                                show: true,
                            }
                        }
                    }
                },
                colors: getColorCodes(this.$refs.gradientRadialbarChart.dataset),
                fill: {
                    type: 'gradient',
                    gradient: {
                        shade: 'dark',
                        type: 'horizontal',
                        shadeIntensity: 0.5,
                        gradientToColors: ['#ABE5A1'],
                        inverseColors: true,
                        opacityFrom: 1,
                        opacityTo: 1,
                        stops: [0, 100]
                    }
                },
                stroke: {
                    lineCap: 'round'
                },
                labels: this.labels,
            };
        }
    }));
});

import user1 from "../../images/avatar/user-1.png";
import image1 from "../../images/gallery/img-01.jpg";
//Radialbars with Image
document.addEventListener("alpine:init", () => {
    Alpine.data("imageRadialbarApp", () => ({
        series: [67],
        labels: ['Volatility'],
        init() {
            // Initial chart render
            this.renderChart();

            // Reload chart on window resize
            window.addEventListener('resize', this.reloadChart.bind(this));
        },
        renderChart() {
            // Destroy previous instance if exists
            if (this.imageRadialbarChart)
                this.imageRadialbarChart.destroy();

            // Initialize new chart
            this.imageRadialbarChart = new ApexCharts(this.$refs.imageRadialbarChart, this.options);
            this.imageRadialbarChart.render();
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
                    type: "radialBar"
                },
                plotOptions: {
                    radialBar: {
                        hollow: {
                            margin: 15,
                            size: '70%',
                            image: user1,
                            imageWidth: 64,
                            imageHeight: 64,
                            imageClipped: false
                        },
                        dataLabels: {
                            name: {
                                show: false,
                                color: '#fff'
                            },
                            value: {
                                show: true,
                                color: '#333',
                                offsetY: 70,
                                fontSize: '22px'
                            }
                        }
                    }
                },
                fill: {
                    type: 'image',
                    image: {
                        src: [image1],
                    }
                },
                stroke: {
                    lineCap: 'round'
                },
                labels: this.labels,
            };
        }
    }));
});

//Stroked Gauge
document.addEventListener("alpine:init", () => {
    Alpine.data("strokedGaugeRadialbarApp", () => ({
        series: [75],
        labels: ['Median Ratio'],
        init() {
            // Initial chart render
            this.renderChart();

            // Reload chart on window resize
            window.addEventListener('resize', this.reloadChart.bind(this));
        },
        renderChart() {
            // Destroy previous instance if exists
            if (this.strokedGaugeRadialbarChart)
                this.strokedGaugeRadialbarChart.destroy();

            // Initialize new chart
            this.strokedGaugeRadialbarChart = new ApexCharts(this.$refs.strokedGaugeRadialbarChart, this.options);
            this.strokedGaugeRadialbarChart.render();
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
                    type: "radialBar",
                    offsetY: -10
                },
                plotOptions: {
                    radialBar: {
                        startAngle: -135,
                        endAngle: 135,
                        dataLabels: {
                            name: {
                                fontSize: '16px',
                                color: undefined,
                                offsetY: 120
                            },
                            value: {
                                offsetY: 76,
                                fontSize: '22px',
                                color: undefined,
                                formatter: function (val) {
                                    return val + "%";
                                }
                            }
                        }
                    }
                },
                colors: getColorCodes(this.$refs.strokedGaugeRadialbarChart.dataset),
                fill: {
                    type: 'gradient',
                    gradient: {
                        shade: 'dark',
                        shadeIntensity: 0.15,
                        inverseColors: false,
                        opacityFrom: 1,
                        opacityTo: 1,
                        stops: [0, 50, 65, 91]
                    },
                },
                stroke: {
                    dashArray: 4
                },
                labels: this.labels,
            };
        }
    }));
});

//Semi Circle Gauge
document.addEventListener("alpine:init", () => {
    Alpine.data("semiGaugeRadialbarApp", () => ({
        series: [76],
        labels: ['Average Results'],
        init() {
            // Initial chart render
            this.renderChart();

            // Reload chart on window resize
            window.addEventListener('resize', this.reloadChart.bind(this));
        },
        renderChart() {
            // Destroy previous instance if exists
            if (this.semiGaugeRadialbarChart)
                this.semiGaugeRadialbarChart.destroy();

            // Initialize new chart
            this.semiGaugeRadialbarChart = new ApexCharts(this.$refs.semiGaugeRadialbarChart, this.options);
            this.semiGaugeRadialbarChart.render();
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
                    type: "radialBar",
                    offsetY: -20,
                    sparkline: {
                        enabled: true
                    }
                },
                plotOptions: {
                    radialBar: {
                        startAngle: -90,
                        endAngle: 90,
                        track: {
                            background: "#e7e7e7",
                            strokeWidth: '97%',
                            margin: 5, // margin is in pixels
                        },
                        dataLabels: {
                            name: {
                                show: false
                            },
                            value: {
                                offsetY: -2,
                                fontSize: '22px'
                            }
                        }
                    }
                },
                colors: getColorCodes(this.$refs.semiGaugeRadialbarChart.dataset),
                grid: {
                    padding: {
                        top: -10
                    }
                },
                fill: {
                    type: 'gradient',
                    gradient: {
                        shade: 'light',
                        shadeIntensity: 0.4,
                        inverseColors: false,
                        opacityFrom: 1,
                        opacityTo: 1,
                        stops: [0, 50, 53, 91]
                    },
                },
                labels: this.labels,
            };
        }
    }));
});
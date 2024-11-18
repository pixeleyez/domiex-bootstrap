function bookEventModal() {
    return {
        totalTickets: 0,
        pricePerTicket: 599.00,
        totalAmount: 0,
        calculatePrice() {
            // Calculate total amount
            this.totalAmount = (this.totalTickets * this.pricePerTicket).toFixed(2);
        }
    };
}

//Invitation Chart
document.addEventListener("alpine:init", () => {
    Alpine.data("invitationApp", () => ({
        series: [87],
        labels: ['Accept Invitation'],
        colorCodes: [],

        init() {
            this.colorCodes = this.getColorCodes();
            let invitationChart = new ApexCharts(this.$refs.invitationChart, this.options);
            invitationChart.render();
        },


        get options() {
            return {
                series: this.series,
                chart: {
                    height: 300,
                    type: "radialBar",
                },
                colors: [this.colorCodes[0]],
                plotOptions: {
                    radialBar: {
                        hollow: {
                            size: '60%',
                        },
                        dataLabels: {
                            show: true,
                            name: {
                                fontWeight: '600'
                            },
                        }
                    },
                },
                fill: {
                    type: 'gradient',
                    gradient: {
                        shade: 'dark',
                        gradientToColors: [this.colorCodes[1]],
                        type: 'horizontal',
                        opacityFrom: 1,
                        opacityTo: 1,
                        stops: [0, 100],
                    },
                },
                stroke: {
                    lineCap: 'round'
                },
                labels: this.labels,
            };
        },
        
        getColorCodes() {
            return ['#358ffc', '#ec4899'];
        },
    }));
});

//Ticket sale Charts
document.addEventListener("alpine:init", () => {
    Alpine.data("ticketSaleApp", () => ({
        values: [10, 41, 35, 51, 49, 62, 69],
        labels: [
            "S", "M", "T", "W", "T", "F", "S",
        ],
        init() {
            let ticketSaleChart = new ApexCharts(this.$refs.ticketSaleChart, this.options);
            ticketSaleChart.render();
        },
        formatCurrency: (x) => {
            return "$" + x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
        },
        get options() {
            return {
                series: [{ name: "Ticket Sale", data: this.values }],
                chart: {
                    defaultLocale: "en",
                    height: 180,
                    type: "line",
                    zoom: {
                        enabled: true
                    },
                    toolbar: {
                        show: false
                    }
                },
                dataLabels: {
                    enabled: false
                },
                stroke: {
                    show: true,
                    curve: 'monotoneCubic',
                    lineCap: 'butt',
                    width: 3,
                    dashArray: 0,
                },
                xaxis: {
                    categories: this.labels
                },
                yaxis: {
                    show: false,
                },
                tooltip: {
                    x: {
                        show: true
                    },
                },
                colors: this.getColorCodes(),
                grid: {
                    padding: {
                        top: -10,
                        right: 0,
                        bottom: 0,
                    },
                    xaxis: {
                        lines: {
                            show: false
                        }
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
            return ['#358ffc', '#ec4899'];  // Colors for the line chart (blue and pink)
        }
    }));
});


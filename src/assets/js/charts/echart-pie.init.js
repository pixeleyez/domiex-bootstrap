import { getColorCodes } from "../helpers/helper";

//Basic Pie
document.addEventListener("alpine:init", () => {
  Alpine.data("basicPieApp", () => ({
    basicPieChart: null,
    init() {
      // Reload chart on window resize
      window.addEventListener('resize', this.renderChart.bind(this));
    },
    renderChart() {
      // Handle the logic for resizing
      if (this.basicPieChart)
        this.basicPieChart.dispose();
      this.colorCodes = getColorCodes(this.$refs.basicPieChart.dataset);
      this.basicPieChart = echarts.init(this.$refs.basicPieChart, 'light');
      this.basicPieChart.setOption(this.options);
    },
    get options() {
      return {
        color: this.colorCodes,
        tooltip: {
          trigger: 'item'
        },
        legend: {
          orient: 'vertical',
          left: 'left',
          textStyle: {
            color: this.colorCodes[6]
          }
        },
        grid: {
          bottom: '0%',
          containLabel: true
        },
        series: [
          {
            name: 'Access From',
            type: 'pie',
            radius: '50%',
            data: [
              { value: 1048, name: 'Search Engine' },
              { value: 735, name: 'Direct' },
              { value: 580, name: 'Email' },
              { value: 484, name: 'Union Ads' },
              { value: 300, name: 'Video Ads' }
            ],
            label: {
              color: this.colorCodes[6]
            },
            emphasis: {
              itemStyle: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
              }
            }
          }
        ]
      };
    }
  }));
});

//Doughnut Chart with Rounded Corner
document.addEventListener("alpine:init", () => {
  Alpine.data("doughnutRoundedPieApp", () => ({
    doughnutRoundedPieChart: null,
    init() {
      // Reload chart on window resize
      window.addEventListener('resize', this.renderChart.bind(this));
    },
    renderChart() {
      // Handle the logic for resizing
      if (this.doughnutRoundedPieChart)
        this.doughnutRoundedPieChart.dispose();
      this.colorCodes = getColorCodes(this.$refs.doughnutRoundedPieChart.dataset);
      this.doughnutRoundedPieChart = echarts.init(this.$refs.doughnutRoundedPieChart, 'light');
      this.doughnutRoundedPieChart.setOption(this.options);
    },
    get options() {
      return {
        color: this.colorCodes,
        tooltip: {
          trigger: 'item'
        },
        legend: {
          top: '0%',
          left: 'center',
          textStyle: {
            color: this.colorCodes[6]
          }
        },
        series: [
          {
            name: 'Access From',
            type: 'pie',
            radius: ['40%', '70%'],
            avoidLabelOverlap: false,
            itemStyle: {
              borderRadius: 10,
              borderColor: this.colorCodes[7],
              borderWidth: 2,
            },
            label: {
              show: false,
              position: 'center'
            },
            emphasis: {
              label: {
                show: true,
                fontSize: 15,
                fontWeight: 'bold'
              }
            },
            label: {
              color: this.colorCodes[6]
            },
            labelLine: {
              show: false
            },
            data: [
              { value: 1048, name: 'Search Engine' },
              { value: 735, name: 'Direct' },
              { value: 580, name: 'Email' },
              { value: 484, name: 'Union Ads' },
              { value: 300, name: 'Video Ads' }
            ]
          }
        ]
      };
    }
  }));
});

//Doughnut Chart
document.addEventListener("alpine:init", () => {
  Alpine.data("doughnutPieApp", () => ({
    doughnutPieChart: null,
    init() {
      // Reload chart on window resize
      window.addEventListener('resize', this.renderChart.bind(this));
    },
    renderChart() {
      // Handle the logic for resizing
      if (this.doughnutPieChart)
        this.doughnutPieChart.dispose();
      this.colorCodes = getColorCodes(this.$refs.doughnutPieChart.dataset);
      this.doughnutPieChart = echarts.init(this.$refs.doughnutPieChart, 'light');
      this.doughnutPieChart.setOption(this.options);
    },
    get options() {
      return {
        tooltip: {
          trigger: 'item'
        },
        legend: {
          top: '5%',
          left: 'center',
          textStyle: {
            color: this.colorCodes[6]
          }
        },
        series: [
          {
            name: 'Access From',
            type: 'pie',
            radius: ['40%', '70%'],
            avoidLabelOverlap: false,
            label: {
              show: false,
              position: 'center',
              color: this.colorCodes[6]
            },
            emphasis: {
              label: {
                show: true,
                fontSize: 15,
                fontWeight: 'bold'
              }
            },
            labelLine: {
              show: false
            },
            data: [
              { value: 1048, name: 'Search Engine' },
              { value: 735, name: 'Direct' },
              { value: 580, name: 'Email' },
              { value: 484, name: 'Union Ads' },
              { value: 300, name: 'Video Ads' }
            ]
          }
        ]
      };
    }
  }));
});

//Half Doughnut Chart
document.addEventListener("alpine:init", () => {
  Alpine.data("halfDouglasNutApp", () => ({
    halfDouglasNutChart: null,
    init() {
      // Reload chart on window resize
      window.addEventListener('resize', this.renderChart.bind(this));
    },
    renderChart() {
      // Handle the logic for resizing
      if (this.halfDouglasNutChart)
        this.halfDouglasNutChart.dispose();
      this.colorCodes = getColorCodes(this.$refs.halfDouglasNutChart.dataset);
      this.halfDouglasNutChart = echarts.init(this.$refs.halfDouglasNutChart, 'light');
      this.halfDouglasNutChart.setOption(this.options);
    },
    get options() {
      return {
        tooltip: {
          trigger: 'item'
        },
        legend: {
          top: '5%',
          left: 'center',
          textStyle: {
            color: this.colorCodes[6]
          }
        },
        series: [
          {
            name: 'Access From',
            type: 'pie',
            radius: ['40%', '70%'],
            center: ['50%', '70%'],
            // adjust the start and end angle
            startAngle: 180,
            endAngle: 360,
            label: {
              color: this.colorCodes[6]
            },
            data: [
              { value: 1048, name: 'Search Engine' },
              { value: 735, name: 'Direct' },
              { value: 580, name: 'Email' },
              { value: 484, name: 'Union Ads' },
              { value: 300, name: 'Video Ads' }
            ]
          }
        ]
      };
    }
  }));
});
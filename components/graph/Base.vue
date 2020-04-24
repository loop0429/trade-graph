<template>
  <apexchart
    type="area"
    height="400"
    :options="chartOptions"
    :series="series"
  />
</template>

<script>
export default {
  props: ['data', 'categories'],
  data() {
    return {
      series: [
        {
          name: 'start',
          data: []
        }
      ],
      chartOptions: {
        dataLabels: {
          enabled: false
        },
        stroke: {
          curve: 'smooth',
          width: 1
        },
        xaxis: {
          categories: []
        },
        yaxis: {
          labels: {
            formatter: (val) => {
              return val.toLocaleString()
            }
          }
        },
        tooltip: {
          y: {
            formatter: (val) => {
              return val.toLocaleString()
            }
          }
        }
      }
    }
  },
  created() {
    this.series = [...this.series].map((item) => {
      return {
        name: item.name,
        data: this.data
      }
    })
    this.chartOptions.xaxis.categories = this.categories
  }
}
</script>

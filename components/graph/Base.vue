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
  data() {
    return {
      series: [
        {
          name: 'start',
          data: [
            387112,
            373014,
            363493,
            357526,
            357235,
            361248,
            365603,
            369438,
            371365,
            362229,
            366981,
            365047,
            364672,
            359342,
            362202,
            363580,
            366677,
            372814,
            372913,
            372295,
            376588,
            370673
          ]
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
          categories: [
            '3/26',
            '3/27',
            '3/30',
            '3/31',
            '4/1',
            '4/2',
            '4/3',
            '4/6',
            '4/7',
            '4/8',
            '4/9',
            '4/10',
            '4/13',
            '4/14',
            '4/15',
            '4/16',
            '4/17',
            '4/20',
            '4/21',
            '4/22',
            '4/23',
            '4/24'
          ]
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
  }
}
</script>

<template>
  <!-- Set a larger height for the div containing the chart -->
  <div class="chart-container">
    <highcharts :options="chartOptions" :modules="['exporting']" class="hc"></highcharts>
  </div>
  <div class="investment-summary" v-if="investmentSummary">
    <strong>Total Investment: </strong> ${{ investmentSummary.totalInvestment.toFixed(2) }}
    <strong>Total Units Purchased: </strong> {{ investmentSummary.totalUnits.toFixed(4) }}
    <strong>Total Value: </strong> ${{ investmentSummary.totalValue.toFixed(2) }}
    <strong>Profit Percentage: </strong> {{ investmentSummary.profitPercent.toFixed(2) }}%
  </div>
  <!-- Add the warning message below the chart -->
  <div class="investment-warning">
    <strong>
      Investment in stocks and mutual funds involves risk and is subject to market volatility. The
      analysis does not account for commissions, fees, or taxes.
    </strong>
  </div>

</template>

<script lang="ts" setup>
import {onMounted, ref, watch} from 'vue'
import axios from 'axios'
import tickerService, {type TickerData} from "~/services/tickerService";

const props = defineProps<{
  ticker: string | null
  year: number | null
  amount: number | null
}>()

const investmentSummary = ref<{
  totalInvestment: number,
  totalUnits: number,
  totalValue: number,
  profitPercent: number
} | null>(null)

const chartOptions = ref({
  chart: {
    zoomType: 'x',
    resetZoomButton: {
      position: {
        align: 'right',
        verticalAlign: 'top',
        x: -10,
        y: 10
      }
    }
  },
  title: {
    text: ''
  },
  xAxis: {
    type: 'datetime',
    crosshair: true, // Enable crosshair on the x-axis
    labels: {
      format: '{value:%Y-%m-%d}', // Format the date labels
      style: {
        color: '' // This will be updated based on the theme
      }
    }
  },
  yAxis: [
    {
      title: {
        text: ''
      }
    },
    {
      title: {
        text: 'Profit %'
      },
      labels: {
        format: '{value}%',
        style: {
          color: '' // This will be updated based on the theme
        }
      }
    }
  ],
  tooltip: {
    shared: true // Share the tooltip between all series
  },
  series: [
    {
      data: [],
      name: `Price`,
      yAxis: 0
    }
  ]
})

const loadTickerData = async (ticker: string, year: number, amount: number) => {
  try {
    const response = await tickerService.fetchTickerData(ticker)
    // Timestamp for 1/1/2010
    const filterDate = new Date(`${year}-01-01`).getTime()

    // Filter the data to include only dates on or after 1/1/2010
    const filteredData = response.filter((item: any) => item.Date >= filterDate)

    let totalUnits = 0
    let totalCost = 0
    let totalValue = 0
    const seriesData = filteredData.map((item: TickerData) => {
      const cost = amount
      const units = parseFloat((cost / item.High).toFixed(4))
      totalUnits += units
      totalCost += cost
      totalValue = parseFloat((totalUnits * item.High).toFixed(4))
      return {
        Date: item.Date as number,
        price: parseFloat(item.High.toFixed(4)),
        totalUnits: parseFloat(totalUnits.toFixed(4)),
        totalCost: totalCost,
        totalValue: totalValue,
        profitPercent: parseFloat((((totalValue - totalCost) / totalCost) * 100).toFixed(4))
      }
    })

    // Prepare data series for the chart
    const priceData = seriesData.map((item: any) => [item.Date, item.price])
    const totalCostData = seriesData.map((item: any) => [item.Date, item.totalCost])
    const totalValueData = seriesData.map((item: any) => [item.Date, item.totalValue])
    const profitPercentData = seriesData.map((item: any) => [item.Date, item.profitPercent])

    chartOptions.value.series = [
      {

        data: priceData as never[],
        name: `Price`,
        yAxis: 0
      },
      {
        data: totalCostData as never[],
        name: `Total Cost`,
        yAxis: 0
      },
      {
        data: totalValueData as never[],
        name: `Total Value`,
        yAxis: 0
      },
      {
        data: profitPercentData as never[],
        name: `Profit Percentage`,
        yAxis: 1
      }
    ]

    chartOptions.value.title.text = `${ticker} Investment Starting ${year} with Daily Investment of $${amount}`

    investmentSummary.value = {
      totalInvestment: totalCost,
      totalUnits: totalUnits,
      totalValue: totalValue,
      profitPercent: parseFloat((((totalValue - totalCost) / totalCost) * 100).toFixed(2))
    }
  } catch (error) {
    console.error(`Error loading data for ${ticker}:`, error)
  }
}

onMounted(() => {
  if (props.ticker && props.year && props.amount) {
    loadTickerData(props.ticker, props.year, props.amount)
  }
})

watch([() => props.ticker, () => props.year, () => props.amount], ([newTicker, year, amount]) => {
  if (newTicker && year && amount) {
    loadTickerData(newTicker, year, amount)
  }
})
</script>

<style scoped>
.chart-container {
  height: 550px; /* Set a larger height for the chart */
}

.hc {
  width: 100%;
  height: 100%; /* Ensure the highcharts element takes up the full height of its container */
}

.investment-warning {
  margin-top: 20px;
  padding: 10px;
  font-size: 1.2rem;
  color: #d9534f; /* A red color to highlight the warning */
  background-color: #f9f2f4; /* Light background to make the warning stand out */
  border: 1px solid #d9534f;
  border-radius: 5px;
  text-align: center;
  font-weight: bold;
}

.investment-summary {
  text-align: center;
}
</style>

<template>
  <div class="content-container">
    <v-row class="stock-selectors">
      <v-col cols="2"></v-col>
      <v-col v-for="(selected, index) in selectedTickers" :key="index" cols="2">
        <v-select
            v-model="selectedTickers[index]"
            :items="tickerSymbols"
            item-value="value"
            item-title="value"
            label="Select Stock"
            density="comfortable"
            :menu-props="{ maxHeight: '200px' }"
            return-object
        />
      </v-col>
    </v-row>

    <div v-if="selectedTickersInfo.some(info => info)" class="comparison-container">
      <v-row>
        <v-col cols="2"></v-col>
        <v-col v-for="(tickerInfo, index) in selectedTickersInfo" :key="index" cols="2" class="stock-info-col">
          <h4>{{ selectedTickers[index]?.value }}</h4>
        </v-col>
      </v-row>
    </div>
    <div  class="comparison-container">
      <v-row>
        <v-col cols="2" class="metric-col"><h4>Market Cap</h4></v-col>
        <v-col v-if="selectedTickersInfo.some(info => info)" v-for="(tickerInfo, index) in selectedTickersInfo" :key="index" cols="2" class="stock-info-col">
          <div v-if="tickerInfo">{{ tickerInfo.market_cap.toFixed(2) }} M</div>
        </v-col>
      </v-row>
    </div>
    <div  class="comparison-container">
      <v-row>
        <v-col cols="2" class="metric-col"><h4>PE Ratio</h4></v-col>
        <v-col v-if="selectedTickersInfo.some(info => info)" v-for="(tickerInfo, index) in selectedTickersInfo" :key="index" cols="2" class="stock-info-col">
          <div v-if="tickerInfo">{{ tickerInfo.pe_ratio.toFixed(2) }}</div>
        </v-col>
      </v-row>
    </div>

    <div class="comparison-container">
      <v-row>
        <v-col cols="2" class="metric-col"><h4>ROE</h4></v-col>
        <v-col  v-if="selectedTickersInfo.some(info => info)" v-for="(tickerInfo, index) in selectedTickersInfo" :key="index" cols="2" class="stock-info-col">
          <div v-if="tickerInfo">{{ (tickerInfo.roe * 100).toFixed(2) }} %</div>
        </v-col>
      </v-row>
    </div>

    <div  class="comparison-container">
      <v-row>
        <v-col cols="2" class="metric-col"><h4>Debt to Equity</h4></v-col>
        <v-col v-if="selectedTickersInfo.some(info => info)" v-for="(tickerInfo, index) in selectedTickersInfo" :key="index" cols="2" class="stock-info-col">
          <div v-if="tickerInfo">{{ tickerInfo.debt_to_equity }}</div>
        </v-col>
      </v-row>
    </div>

    <div class="comparison-container">
      <v-row>
        <v-col cols="2" class="metric-col"><h4>Current Ratio</h4></v-col>
        <v-col v-if="selectedTickersInfo.some(info => info)" v-for="(tickerInfo, index) in selectedTickersInfo" :key="index" cols="2" class="stock-info-col">
          <div v-if="tickerInfo">{{ tickerInfo.current_ratio.toFixed(2) }}</div>
        </v-col>
      </v-row>
    </div>

    <div class="comparison-container">
      <v-row>
        <v-col cols="2" class="metric-col"><h4>Operating Margin</h4></v-col>
        <v-col v-if="selectedTickersInfo.some(info => info)"
               v-for="(tickerInfo, index) in selectedTickersInfo" :key="index" cols="2" class="stock-info-col">
          <div v-if="tickerInfo">{{ (tickerInfo.operating_margin * 100).toFixed(2) }} %</div>
        </v-col>
      </v-row>
    </div>

    <div  class="comparison-container">
      <v-row>
        <v-col cols="2" class="metric-col"><h4>Free Cash Flow</h4></v-col>
        <v-col v-if="selectedTickersInfo.some(info => info)"
               v-for="(tickerInfo, index) in selectedTickersInfo" :key="index" cols="2" class="stock-info-col">
          <div v-if="tickerInfo">{{ currencyService.formatLargeNumber(tickerInfo.free_cash_flow) }}</div>
        </v-col>
      </v-row>
    </div>

    <div class="comparison-container">
      <v-row>
        <v-col cols="2" class="metric-col"><h4>Trailing PEG Ratio</h4></v-col>
        <v-col v-if="selectedTickersInfo.some(info => info)"
               v-for="(tickerInfo, index) in selectedTickersInfo" :key="index" cols="2" class="stock-info-col">
          <div v-if="tickerInfo">{{ tickerInfo.trailing_peg_ratio }}</div>
        </v-col>
      </v-row>
    </div>

    <div  class="comparison-container">
      <v-row>
        <v-col cols="2" class="metric-col"><h4>Earnings Growth</h4></v-col>
        <v-col v-if="selectedTickersInfo.some(info => info)"
               v-for="(tickerInfo, index) in selectedTickersInfo" :key="index" cols="2" class="stock-info-col">
          <div v-if="tickerInfo">{{ (tickerInfo.earning_growth * 100).toFixed(2) }} %</div>
        </v-col>
      </v-row>
    </div>

    <div  class="comparison-container">
      <v-row>
        <v-col cols="2" class="metric-col"><h4>Revenue Growth</h4></v-col>
        <v-col v-if="selectedTickersInfo.some(info => info)"
               v-for="(tickerInfo, index) in selectedTickersInfo" :key="index" cols="2" class="stock-info-col">
          <div v-if="tickerInfo">{{ (tickerInfo.revenue_growth * 100).toFixed(2) }} %</div>
        </v-col>
      </v-row>
    </div>

    <div  class="comparison-container">
      <v-row>
        <v-col cols="2" class="metric-col"><h4>EBITDA Margin</h4></v-col>
        <v-col v-if="selectedTickersInfo.some(info => info)"
               v-for="(tickerInfo, index) in selectedTickersInfo" :key="index" cols="2" class="stock-info-col">
          <div v-if="tickerInfo">{{ (tickerInfo.ebitda_margin * 100).toFixed(2) }} %</div>
        </v-col>
      </v-row>
    </div>

    <div  class="comparison-container">
      <v-row>
        <v-col cols="2" class="metric-col"><h4>Price to Book</h4></v-col>
        <v-col v-if="selectedTickersInfo.some(info => info)"
               v-for="(tickerInfo, index) in selectedTickersInfo" :key="index" cols="2" class="stock-info-col">
          <div v-if="tickerInfo">{{ tickerInfo.price_to_book.toFixed(2) }}</div>
        </v-col>
      </v-row>
    </div>

    <div  class="comparison-container">
      <v-row>
        <v-col cols="2" class="metric-col"><h4>Institutional Holdings</h4></v-col>
        <v-col v-if="selectedTickersInfo.some(info => info)"
               v-for="(tickerInfo, index) in selectedTickersInfo" :key="index" cols="2" class="stock-info-col">
          <div v-if="tickerInfo">{{ (tickerInfo.held_percent_institution * 100).toFixed(2) }} %</div>
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref, watch } from "vue";
import symbolService from "~/services/symbolService";
import type { TickerItem, TickerInfo } from "~/services";
import tickerService from "~/services/tickerService";
import currencyService from "~/services/currencyService"

const selectedTickers = ref<(TickerItem | null)[]>(Array(5).fill(null));

// Array to hold detailed information about the selected stocks
const selectedTickersInfo = ref<(TickerInfo | null)[]>(Array(5).fill(null));

// Array to hold the available ticker symbols
const tickerSymbols = ref<TickerItem[]>([]);

// Function to load ticker symbols from the service
const loadTickerSymbols = async () => {
  try {
    tickerSymbols.value = await symbolService.fetchSymbols();
  } catch (error) {
    console.error('Error loading ticker symbols:', error);
  }
};

const handleChange = async (index: number) => {
  const selectedTicker = selectedTickers.value[index];
  if (selectedTicker) {
    try {
      const tickerData = await tickerService.fetchTickerInfo(selectedTicker.value);
      const latestInfo = tickerData.sort((a, b) => b.timestamp - a.timestamp)[0];
      selectedTickersInfo.value[index] = latestInfo || null;
    } catch (error) {
      console.error('Error fetching ticker info:', error);
      selectedTickersInfo.value[index] = null;
    }
  }
};

// Watch the selectedTickers array for changes
watch(
    selectedTickers,
    (newValues) => {
      newValues.forEach((ticker, index) => {
        handleChange(index);
      });
    },
    { deep: true }
);

// Load the ticker symbols when the component mounts
onMounted(() => {
  loadTickerSymbols();
});

useHead({
  title: 'Stock Comparison - Analyze and Compare Key Financial Metrics',
  meta: [
    {
      name: 'description',
      content: 'Compare key financial metrics such as Market Cap, PE Ratio, ROE, Debt to Equity, Operating Margin, and more for selected stocks. Make informed investment decisions by analyzing the strengths and weaknesses of multiple companies side by side.'
    },
    {
      name: 'keywords',
      content: 'stock comparison, market cap, PE ratio, ROE, financial metrics, investment analysis, compare stocks, stock performance, operating margin, free cash flow, debt to equity, financial health'
    }
  ]
});
</script>

<style scoped>
/* General container styling */
.content-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  font-family: Arial, sans-serif;
  line-height: 1.6;
}

/* Styling for the selectors */
.stock-selectors {
  padding-bottom: 30px;
}

/* Align metric column and stock info columns */
.comparison-container {
  display: flex;
  align-items: flex-start;
  margin-bottom: 10px; /* Add spacing between each row */
}

/* Ensure metric and stock columns are aligned */
.metric-col,
.stock-info-col {
  padding: 10px 5px;
  text-align: center; /* Center-align the content for better visual consistency */
  border-right: 1px solid #ccc;
}

.metric-col {
  background-color: #f5f5f5;
  font-weight: bold;
}

.stock-info-col {
  background-color: #fff;
}

/* Add even spacing and visual separation for better readability */
.stock-info-col div,
.metric-col h4 {
  padding: 8px 0;
  border-bottom: 1px solid #eee;
}

/* Adjust headers and metrics for better emphasis */
.stock-info-col h4,
.metric-col h4 {
  margin-bottom: 10px;
  font-size: 1.1em;
  font-weight: bold;
  color: #2c3e50;
}

/* Styling for the comparison metrics to ensure alignment */
.comparison-container h4,
.comparison-container div {
  font-size: 1rem;
}

h4 {
  color: #2c3e50;
}

/* Remove extra padding and margin from lists */
ul {
  list-style-type: none;
  padding-left: 0;
  margin: 0;
}

li {
  font-size: 1rem;
  padding: 5px 0;
}

</style>

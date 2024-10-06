<!-- src/views/HomeView.vue -->
<template>
  <PageLayout title="Dollar-Cost Averaging (DCA)" home-link="" prev-link="" next-link="">
    <template #content>
      <p>
        Dollar-Cost Averaging (DCA) is an investment strategy where an investor divides the total
        amount to be invested across periodic purchases of a target asset, regardless of its price.
        This approach helps mitigate the impact of market volatility by purchasing more shares when
        prices are low and fewer when prices are high.
      </p>

      <p>
        The primary benefit of DCA is that it removes emotional decision-making and the need to time
        the market, reducing the risk of making poor investment choices based on short-term market
        fluctuations. By consistently investing over time, DCA helps investors stay disciplined and
        focused on long-term growth, rather than trying to predict or react to market movements.
      </p>

      <hr/>

      <h2>Example</h2>
      <p>
        Imagine you have $1,200 to invest in a particular stock over a year. Instead of investing the
        entire amount at once, you invest $100 monthly. If the stock price fluctuates each month, you
        buy more shares when the price is low and fewer when the price is high, averaging out the
        purchase cost.
      </p>

      <p>
        In the era of no-fee trades, the barriers to regular investing have significantly diminished,
        opening the door for more investors to adopt strategies like Dollar-Cost Averaging (DCA).
        Imagine being able to build your wealth steadily by investing just $100 a day across a
        diversified group of stocks. This approach not only helps you capitalize on market
        opportunities but also minimizes risk through consistent investing.
      </p>

      <h2>Popular Stocks for Dollar Cost Averaging</h2>
      <div v-if="loading">Loading...</div>
      <div v-else>
        <div v-for="(tickers, market) in groupedTickerData" :key="market">
          <h2>In {{ market }}</h2>
          <!-- Display the market group name -->
          <ul>
            <li v-for="ticker in tickers" :key="ticker.value">
              <router-link :to="{ name: 'stocks-ticker', params: { ticker: ticker.value } }">
                {{ ticker.text }} ({{ ticker.value }})
              </router-link>
            </li>
          </ul>
        </div>
      </div>
    </template>
  </PageLayout>
</template>
<script lang="ts" setup>
import {ref, onMounted} from 'vue'
import PageLayout from '@/components/PageLayout.vue';
import symbolService, {type GroupedTickerItems} from '@/services/symbolService'

const groupedTickerData = ref<GroupedTickerItems>({})
const loading = ref(true)

// Fetch ticker data from the external symbol.json file
const tickerDataByGroup = async () => {
  try {
    groupedTickerData.value = await symbolService.fetchSymbolsByMarket()
  } catch (error) {
    console.error('Error fetching ticker data:', error)
  } finally {
    loading.value = false
  }
}

onMounted(tickerDataByGroup) // Fetch the data when the component is mounted
</script>
<style scoped>
.content {
  max-width: 900px;
  margin: 0 auto;
  padding: 20px;
  font-family: 'Arial', sans-serif;
  line-height: 1.6;
}

h1 {
  font-size: 2rem;
  margin-bottom: 20px;
}

h2 {
  font-size: 1.6rem;
  margin-top: 30px;
  margin-bottom: 15px;
}

p {
  font-size: 1.2rem;
  margin-bottom: 15px;
}

hr {
  margin: 30px 0;
  border: none;
  border-top: 2px solid #eee;
}

ul {
  list-style-type: none;
  padding-left: 0;
}

li {
  margin-bottom: 10px;
}

ul li a {
  color: #3498db;
  text-decoration: none;
  font-weight: bold;
}

ul li a:hover {
  text-decoration: underline;
}

ul li {
  font-size: 1.2rem;
}
</style>

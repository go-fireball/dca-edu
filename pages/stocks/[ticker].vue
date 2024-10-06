<!-- pages/stocks/[id].vue -->
<template>
  <div class="content">
    <!-- Pass the dynamic ID to the child component as a prop -->
    <Stock :ticker="ticker"/>
  </div>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router'
import Stock from '~/components/Stock.vue'

// Access the route parameter
const route = useRoute()
const ticker = route.params.ticker as string // Get the dynamic ID from the route

useHead({
  title: `${ticker} Stock Analysis and Historical Data`,
  meta: [
    { name: 'description', content: `Get detailed stock analysis, historical data, and performance for ${ticker}. Understand the value of your investments over time, with daily updates on profit percentages and stock trends.` },
    { name: 'keywords', content: `${ticker}, stock analysis, stock performance, investment, historical data, profit percentage, stock trends` }
  ]
});

</script>
<style scoped>
.content {
  margin-top: 5px; /* Adjust this value as needed */
  padding: 1rem;
}
</style>

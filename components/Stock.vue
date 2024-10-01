<!-- src/views/StockView.vue -->
<template>
  <div class="content">
    <TickerDropdown
        @update:selectedTicker="handleTickerUpdate"
        @update:selectedYear="handleYearUpdate"
        @update:selectedAmount="handleAmountUpdate"
        :selectedTicker="selectedTicker"
        :ticker="selectedTicker"
    />
    <!-- Pass the selectedTicker prop -->

    <!-- Display TickerChart only if selectedTicker is selected -->
    <TickerChart
        :ticker="selectedTicker"
        :year="selectedYear"
        :amount="selectedAmount"
        v-if="selectedTicker"
    />
  </div>
</template>

<script lang="ts" setup>
import { defineAsyncComponent, onMounted, ref, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
// Props from the route
const props = defineProps<{ ticker: string | null }>()
const TickerDropdown = defineAsyncComponent(() => import('@/components/TickerDropdown.vue'))

const TickerChart = defineAsyncComponent(() => import('@/components/TickerChart.vue'))

const selectedTicker = ref<string | null>()
const selectedYear = ref<number | null>(2010)
const selectedAmount = ref<number | null>(100)

// Router and route hooks
const router = useRouter()
const route = useRoute()

// Handle updates from dropdown
const handleTickerUpdate = (ticker: string | null) => {
  selectedTicker.value = ticker
  if (ticker) {
    // Update the URL to include the ticker symbol
    router.push({ name: 'stock', params: { ticker } })
  } else {
    // If no ticker is selected, remove it from the URL
    router.push({ name: 'stock' })
  }
}

const handleYearUpdate = (year: number | null) => {
  selectedYear.value = year
}

const handleAmountUpdate = (amount: number | null) => {
  selectedAmount.value = amount
}

// Watch for changes in the route and update the selected ticker accordingly
onMounted(() => {
  if (props.ticker) {
    handleTickerUpdate(props.ticker)
  }
})

// Watch the ticker prop for changes and update selectedTicker
watch(
    () => route.params.ticker,
    (newTicker) => {
      if (newTicker) {
        handleTickerUpdate(newTicker as string)
      }
    }
)
</script>

<style scoped>
.content {
  margin-top: 10px; /* Adjust this value as needed */
  padding: 1rem;
}
</style>
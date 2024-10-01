<template>
  <div class="content">
  <TickerDropdown :ticker="ticker" @update:selectedTicker="handleTickerUpdate"
                  @update:selectedYear="handleYearUpdate"
                  @update:selectedAmount="handleAmountUpdate"/>
    <!-- Display TickerChart only if selectedTicker is selected -->
    <TickerChart
        :ticker="ticker"
        :year="selectedYear"
        :amount="selectedAmount"
        v-if="selectedTicker"
    />
  </div>
</template>

<script setup lang="ts">

const props = defineProps<{ ticker: string | null }>()

// Router hook to navigate to different pages
const router = useRouter()

const selectedTicker = ref<string | null>()
const selectedYear = ref<number | null>(2010)
const selectedAmount = ref<number | null>(100)

// Handle updates from dropdown
const handleTickerUpdate = (ticker: string | null) => {
  selectedTicker.value = ticker
  if (ticker) {
    router.push({ name: 'stocks-ticker', params: { ticker: ticker } })
  } else {
    router.push({ name: 'stocks-ticker', params: { ticker: 'AAPL' } })
  }
}

const handleYearUpdate = (year: number | null) => {
  selectedYear.value = year
}

const handleAmountUpdate = (amount: number | null) => {
  selectedAmount.value = amount
}

</script>

<template>
  <div class="select-container">
    <div>
      <v-select
          v-model="selectedTicker"
          :items="tickerSymbols"
          density="comfortable"
          item-title="text"
          item-value="value"
          label="Select a Ticker"
          width="600px"
      ></v-select>
    </div>
    <div>
      <v-select
          v-model="selectedYear"
          :items="[2010, 2015, 2020]"
          density="comfortable"
          item-title="text"
          item-value="value"
          label="Investment Start"
          width="200px"
      ></v-select>
    </div>
    <div>
      <v-select
          v-model="selectedAmount"
          :items="[10, 25, 50, 100, 200, 300]"
          density="comfortable"
          item-title="text"
          item-value="value"
          label="Daily Amount"
          width="200px"
      ></v-select>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { onMounted, ref, watch } from 'vue'
import symbolService, { type TickerItem } from '@/services/symbolService'

// Define the refs for the ticker symbols and selected ticker
const props = defineProps<{ ticker: string | null | undefined }>()
const tickerSymbols = ref<TickerItem[]>([])
const selectedTicker = ref<string | null>(null)
const selectedYear = ref<number | null>(2010)
const selectedAmount = ref<number | null>(100)

// Emit event when a ticker is selected
const emit = defineEmits(['update:selectedTicker', 'update:selectedYear', 'update:selectedAmount'])
watch(selectedTicker, () => {
  emit('update:selectedTicker', selectedTicker.value)
})
watch(selectedYear, () => {
  emit('update:selectedYear', selectedYear.value)
})

watch(selectedAmount, () => {
  emit('update:selectedAmount', selectedAmount.value)
})

// Load the ticker symbols from the symbols.json file
const loadTickerSymbols = async () => {
  try {
    tickerSymbols.value = await symbolService.fetchSymbols() // Replace with the actual path to your symbols.json
  } catch (error) {
    console.error('Error loading ticker symbols:', error)
  }
}
// Fetch the ticker symbols when the component is mounted
onMounted(() => {
  if (props.ticker) {
    selectedTicker.value = props.ticker
  }
  loadTickerSymbols()
})
</script>

<style scoped>
.select-container {
  display: flex;
  gap: 20px; /* Optional: Adjusts the space between the two divs */
}
</style>

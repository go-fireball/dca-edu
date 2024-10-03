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
</script>
<style scoped>
.content {
  margin-top: 5px; /* Adjust this value as needed */
  padding: 1rem;
}
</style>

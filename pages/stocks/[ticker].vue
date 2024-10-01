<!-- pages/products/[id].vue -->
<template>
  <div>
    <h1>Product Page</h1>
    <!-- Pass the dynamic ID to the child component as a prop -->
    <Stock :ticker="ticker"/>
  </div>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router'
import ProductDetails from '~/components/Stock.vue'

// Access the route parameter
const route = useRoute()
const ticker = route.params.id // Get the dynamic ID from the route
</script>

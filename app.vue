<template>
  <v-app>
    <client-only>
      <v-app-bar app color="primary" dark>
        <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
        <v-toolbar-title>Grow Wise Investments</v-toolbar-title>
      </v-app-bar>

      <v-navigation-drawer v-model="drawer" app temporary rail expand-on-hover>
        <v-list density="compact" nav>
          <v-list-item :to="'/'" prepend-icon="mdi-home" title="Home"></v-list-item>
          <v-list-item :to="{ name: 'stocks'}" prepend-icon="mdi-yin-yang"
                       title="Stocks"></v-list-item>
          <v-list-item :to="{ name: 'stocks-ticker', params: { ticker: 'AAPL' } }" prepend-icon="mdi-chart-line"
                       title="Charts"></v-list-item>
          <v-list-item :to="{ name: 'market-today'}" prepend-icon="mdi-newspaper"
                       title="Market Today"></v-list-item>
          <v-list-item :to="{ name: 'analysis'}" prepend-icon="mdi-google-analytics"
                       title="Stock Analysis"></v-list-item>
          <v-list-item :to="{ name: 'tools'}" prepend-icon="mdi-tools"
                       title="Tools"></v-list-item>
          <v-list-item :to="{ name: 'glossary'}" prepend-icon="mdi-book-open-variant"
                       title="Glossary"></v-list-item>
        </v-list>
      </v-navigation-drawer>
    </client-only>
    <!-- The page content will be rendered here -->
    <v-main>
      <NuxtPage/>
    </v-main>
  </v-app>
</template>

<script setup lang="ts">
import {ref} from 'vue'

const drawer = ref(false)
</script>

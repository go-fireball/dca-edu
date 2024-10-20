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
    <v-footer color="primary" dark>
      <v-row justify="center" no-gutters>
        <v-btn
            v-for="link in links"
            :key="link.name"
            :to="link.to"
            class="mx-2"
            color="white"
            variant="text"
        >
          {{ link.label }}
        </v-btn>
      </v-row>
    </v-footer>
  </v-app>
</template>

<script setup lang="ts">
import {ref} from 'vue'
const links = [
  { name: 'home', label: 'Home', to: '/' },
  { name: 'stocks', label: 'Stocks', to: { name: 'stocks' } },
  { name: 'charts', label: 'Charts', to: { name: 'stocks-ticker', params: { ticker: 'AAPL' } } },
  { name: 'analysis', label: 'Stock Analysis', to: { name: 'analysis' } },
  { name: 'tools', label: 'Tools', to: { name: 'tools' } },
  { name: 'glossary', label: 'Glossary', to: { name: 'glossary' } }
];
const drawer = ref(false)
</script>

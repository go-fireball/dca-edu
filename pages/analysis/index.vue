<template>
  <PageLayout title="Stock Analysis Overview" prev-link="" home-link="" next-link="">

    <template #content>

      <p>Explore detailed stock analysis for individual companies to make informed investment decisions. Each stock
        analysis includes key financial metrics such as Price-to-Earnings (P/E) ratio, performance trends from previous
        quarters, and comprehensive financial health reports. Additionally, the analysis compares stocks with others
        from the same sector, offering valuable insights into their competitive standing. Click the links below to
        access in-depth analysis for your preferred stocks and get a clearer understanding of their potential for growth
        or risk in today's market.
      </p>

      <ul>
        <li>
          <router-link :to="{ path: '/analysis/nvda' }">NVDA</router-link>
        </li>
      </ul>

    </template>
  </PageLayout>
</template>

<script setup lang="ts">
import PageLayout from '@/components/PageLayout.vue';
</script>

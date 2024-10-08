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
          <router-link :to="{ path: '/analysis/tesla' }">Tesla, Inc. (TSLA)</router-link>
        </li>
        <li>
          <router-link :to="{ path: '/analysis/palantir' }">Palantir Technologies Inc. (PLTR)</router-link>
        </li>
        <li>
          <router-link :to="{ path: '/analysis/asml' }">ASML Holding N.V. (ASML)</router-link>
        </li>
        <li>
          <router-link :to="{ path: '/analysis/amzn' }">Amazon.com, Inc. (AMZN)</router-link>
        </li>
        <li>
          <router-link :to="{ path: '/analysis/google' }">Alphabet Inc. (GOOG)</router-link>
        </li>
        <li>
          <router-link :to="{ path: '/analysis/msft' }">Microsoft Corporation (MSFT)</router-link>
        </li>
        <li>
          <router-link :to="{ path: '/analysis/dpz' }">Domino's Pizza, Inc. (DPZ)</router-link>
        </li>
        <li>
          <router-link :to="{ path: '/analysis/nflx' }">Netflix, Inc. (NFLX)</router-link>
        </li>
        <li>
          <router-link :to="{ path: '/analysis/aapl' }">Apple Inc. (AAPL)</router-link>
        </li>
        <li>
          <router-link :to="{ path: '/analysis/nvda' }">NVIDIA (NVDA)</router-link>
        </li>
        <li>
          <router-link :to="{ path: '/analysis/divislab-ns' }">Divi's Laboratories Ltd (DIVISLAB.NS)</router-link>
        </li>
      </ul>

    </template>
  </PageLayout>
</template>

<script setup lang="ts">
import PageLayout from '@/components/AnalysisPageLayout.vue';

useHead({
  title: 'Stock Analysis Overview - Financial Insights and Market Comparison',
  meta: [
    {
      name: 'description',
      content: 'Explore detailed stock analysis for individual companies, including key financial metrics like Price-to-Earnings (P/E) ratio, performance trends, and competitive sector comparisons. Learn more about the growth potential or risks of stocks like Amazon, Microsoft, Netflix, and others.'
    },
    {
      name: 'keywords',
      content: 'stock analysis, financial metrics, P/E ratio, stock performance, sector comparison, Amazon, Microsoft, Netflix, Alphabet, ASML, NVIDIA'
    }
  ]
});
</script>

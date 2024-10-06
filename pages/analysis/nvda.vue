<template>
  <PageLayout next-link="" home-link="" prev-link="" title="NVIDIA (NVDA) Stock Analysis">
    <template #content>
      <div>
        <div v-if="stockInfo">
          <p>
            NVIDIA Corporation (NVDA) continues to dominate the tech sector with a
            market capitalization of {{ formatMarketCap(stockInfo.market_cap) }}. The stock
            exhibits a high Price-to-Earnings (P/E) ratio of {{ stockInfo.pe_ratio.toFixed(2) }},
            reflecting strong investor confidence in its future earnings potential, despite
            its premium valuation. With a Return on Equity (ROE) of
            {{ (stockInfo.roe * 100).toFixed(2) }}%, NVIDIA demonstrates exceptional
            efficiency in generating returns for its shareholders. Its debt-to-equity ratio
            stands at a manageable {{ stockInfo.debt_to_equity }}, suggesting a balanced use
            of debt to finance growth while maintaining financial stability.
          </p>
          <p>
            The company's current ratio of {{ stockInfo.current_ratio }} highlights its
            ability to comfortably cover short-term liabilities, while an impressive
            operating margin of {{ (stockInfo.operating_margin * 100).toFixed(2) }}%
            underscores its profitability. NVIDIA's free cash flow of over
            {{ formatCurrency(stockInfo.free_cash_flow) }} positions it strongly for
            reinvestment and strategic expansion. The stock's trailing PEG ratio of
            {{ stockInfo.trailing_peg_ratio }} indicates that its valuation is aligned with
            its anticipated growth.
          </p>
          <p>
            NVIDIA has experienced robust earnings growth of
            {{ (stockInfo.earning_growth * 100).toFixed(2) }}% alongside a revenue growth
            rate of {{ (stockInfo.revenue_growth * 100).toFixed(2) }}%, driven by demand
            in AI, gaming, and data center markets. With an EBITDA margin of
            {{ (stockInfo.ebitda_margin * 100).toFixed(2) }}%, the company maintains a
            highly profitable operating structure. Additionally, the stock is heavily
            favored by institutional investors, with
            {{ (stockInfo.held_percent_institution * 100).toFixed(2) }}% of its shares
            held by institutional stakeholders.
          </p>
          <p>
            This analysis provides a snapshot of NVIDIA’s financial health and competitive
            position in the tech sector, offering insights into the stock’s potential for
            long-term growth.
          </p>
        </div>
        <div v-else>
          <p>Loading stock analysis...</p>
        </div>
      </div>
    </template>

  </PageLayout>
</template>

<script setup lang="ts">
import {onMounted, ref} from 'vue'
import PageLayout from '@/components/PageLayout.vue';
import tickerService, {type TickerInfo} from "~/services/tickerService.js";

const stockInfo = ref<TickerInfo | null>(null);

onMounted(async () => {
  stockInfo.value = await tickerService.fetchTickerInfo('nvda');
});
const formatCurrency = async (value: number) => {
  return new Intl.NumberFormat('en-US', {style: 'currency', currency: 'USD'}).format(value);
}

const formatMarketCap = (value: number) => {
  if (value >= 1000) {
    return (value / 1000).toFixed(2) + ' trillion USD';
  }
  return value.toFixed(2) + ' billion USD';
};
</script>

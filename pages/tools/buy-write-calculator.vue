<template>
  <PageLayout
      next-link=""
      home-link="/tools"
      prev-link=""
      title="Under Construction">

    <template #content>
<!--        <p>Under Construction</p>-->
    </template>
  </PageLayout>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue';
import PageLayout from '@/components/AnalysisPageLayout.vue';

const form = reactive({
  symbol: 'NVDA',
  buyPrice: 129.11,
  strikePrice: 135,
  premium: 7.75,
  buyDate: '2024-10-08',
  strikeDate: '2024-09-20',
  numberOfOptions: 1,
  fees: 0.66
});

const results = ref({});

const calculateResults = () => {
  const optionCount = 100;
  const totalPremium = form.premium * optionCount - form.fees;
  const buyPriceTotal = form.buyPrice * optionCount;
  const profitAmount = (form.strikePrice - form.buyPrice) * optionCount + totalPremium;
  const profitPerOption = profitAmount / form.numberOfOptions;
  const premiumRate = ((totalPremium / buyPriceTotal) * 365) / 32;
  const profitRate = ((profitAmount / buyPriceTotal) * 365) / 32;

  results.value = {
    totalPremium: totalPremium.toFixed(2),
    profitPerOption: profitPerOption.toFixed(2),
    profitAmount: profitAmount.toFixed(2),
    premiumRate: (premiumRate * 100).toFixed(2),
    profitRate: (profitRate * 100).toFixed(2)
  };
};

// Initial calculation
calculateResults();
</script>

<style scoped>
.calculator-container {
  max-width: 600px;
  margin: 0 auto;
}

.form-group {
  margin-bottom: 1rem;
}

.form-group label {
  display: block;
  font-weight: bold;
}

.form-group input {
  width: 100%;
  padding: 0.5rem;
}

.results-section {
  margin-top: 2rem;
}
</style>

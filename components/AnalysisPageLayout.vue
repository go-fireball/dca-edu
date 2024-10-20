<!-- components/PageLayout.vue -->
<template>
  <div class="content-container">
    <h1>{{ title }}</h1>
    <slot name="content"></slot>
    <div class="nav-buttons">
      <a v-if="prevLink" :href="prevLink" class="button">Prev</a>
      <a v-if="homeLink" :href="homeLink" class="button">Home</a>
      <a v-if="nextLink" :href="nextLink" class="button">Next</a>
    </div>
    <hr/>
    <div>
      <p><strong>Disclaimer:</strong> The information provided here is for educational and informational purposes only.
        While we strive to ensure the accuracy and reliability of the data, we do not make any guarantees regarding its
        completeness or accuracy.
        The analysis and metrics provided should not be considered as investment advice, and any actions taken based on
        this information are at your own risk.
        We do not assume responsibility for any financial losses or other damages incurred from the use of this data.
        Please consult with a qualified financial advisor before making any investment decisions.
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Props {
  title: string;
  prevLink: string;
  homeLink: string;
  nextLink: string;
}

const props = defineProps<Props>();
useHead({
  title: props.title
});
</script>
<style>
.content-container {
  max-width: 900px;
  margin: 0 auto;
  padding: 20px;
  font-family: Arial, sans-serif;
  line-height: 1.6;
}

.content-container h1,
.content-container h2 {
  color: #2c3e50;
  margin-top: 20px;
}

.content-container h3,
.content-container h4 {
  color: #2c3e50;
  margin-top: 15px;
}

p {
  margin-top: 15px;
  margin-bottom: 20px; /* Increase this value for more space between paragraphs */
}

.nav-buttons {
  text-align: center;
  margin-top: 40px;
  margin-bottom: 40px;
}

.nav-buttons .button {
  text-decoration: none;
  color: white;
  background-color: #2c3e50;
  padding: 10px 20px;
  border-radius: 5px;
  margin: 0 10px;
  display: inline-block;
}

.nav-buttons .button:hover {
  background-color: #34495e;
}
</style>

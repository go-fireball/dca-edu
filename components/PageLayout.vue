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
  </div>
</template>

<script setup lang="ts">
interface Props {
  title: string;
  prevLink: string;
  homeLink: string;
  nextLink: string;
}

defineProps<Props>();
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
}

p {
  margin-top: 20px;
  margin-bottom: 30px; /* Increase this value for more space between paragraphs */
}

.nav-buttons {
  text-align: center;
  margin-top: 40px;
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

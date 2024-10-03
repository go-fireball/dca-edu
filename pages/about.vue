<template>
  <div class="content-container">
  <h1>We are still working on this</h1>
  <div class="nav-buttons">
    <a href="/investing/intro" class="button">Home</a>
  </div>
  </div>
</template>
<script setup lang="ts">
</script>

<style scoped>
.content-container {
  max-width: 900px;
  margin: 0 auto;
  padding: 20px;
  font-family: Arial, sans-serif;
  line-height: 1.6;
}

h1,
h2 {
  color: #2c3e50;
}

p,
ul {
  margin-bottom: 20px;
}

ul {
  list-style-type: disc;
  padding-left: 20px;
}

ul li {
  margin-bottom: 10px;
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
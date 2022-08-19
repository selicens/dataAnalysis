<script setup lang="ts">
import Analysis from "./components/Analysis.vue";
</script>

<template>
  <Suspense>
    <template #default>
      <Analysis/>
    </template>
    <template #fallback>
      <h1>Loading...</h1>
    </template>
  </Suspense>
</template>

<style scoped>
  html, body, #app{
    padding: 0;
    margin: 0;
    height: 100%;
    width: 100%;
  }
</style>

<script setup lang="ts">
import Index from "./views/Index.vue";
</script>

<template>
  <Suspense>
    <Index />
    <template #fallback>loading...</template>
  </Suspense>
</template>

<style scoped></style>

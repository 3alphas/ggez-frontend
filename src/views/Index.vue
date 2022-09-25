<script lang="ts" setup>
import { fetchIndex } from "../api";

const items = await fetchIndex();
</script>

<template>
  {{ JSON.stringify(items) }}
</template>

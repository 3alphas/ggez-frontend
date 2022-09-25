<script lang="ts" setup>
const props = defineProps({
  name: String,
});
</script>

<template>
  <article class="directory">
    {{ props.name }}
  </article>
</template>

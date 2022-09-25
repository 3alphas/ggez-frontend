<script lang="ts" setup>
import { fetchIndex } from "../api";
import Directory from "../components/Directory.vue";
import File from "../components/File.vue";

const { files, directories } = await fetchIndex();
</script>

<template>
  <Directory v-for="directory in directories" :name="directory.name" />
  <File v-for="file in files" :name="file.name" />
</template>

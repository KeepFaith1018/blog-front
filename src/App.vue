<script setup lang="ts">
import { useConfigStore } from '@/stores'
const configStore = useConfigStore()
</script>

<template>
  <router-view to="/" :data-theme="configStore.theme"></router-view>
</template>

<style scoped></style>

<script setup lang="ts">
import { computed, defineProps } from 'vue'

const props = defineProps<{
  backgroundImage: string
}>()
const bgStyle = computed(() => ({
  background: `url(${props.backgroundImage}) no-repeat center bottom / cover`,
}))
</script>

<template>
  <footer :style="bgStyle">
    <div class="copyright">©2023 - 2024 By Faith</div>
    <div>冀ICP备2023029432号-1</div>
  </footer>
</template>

<style scoped lang="scss">
footer {
  width: 100vw;
  height: 13vh;
  color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 1.5rem;

  .copyright {
    margin-bottom: 0.5rem;
  }
}
</style>

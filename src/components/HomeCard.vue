<script setup lang="ts">
const props = defineProps(['isReverse'])
console.log(props)
</script>
<template>
  <div :class="props.isReverse ? 'card-container row-reverse ' : 'card-container'">
    <div class="card-img">图片</div>
    <div class="card-info">介绍</div>
  </div>
</template>
<style scoped lang="scss">
.card-container {
  margin: 0 0 2rem;
  width: 100%;
  height: 24rem;
  background-color: var(--color-bg);
  border-radius: 0.8rem;
  display: flex;
  flex-direction: row;
  .card-img {
    width: 40%;
  }
  .card-info {
    width: 60%;
  }
}
.row-reverse {
  flex-direction: row-reverse;
}
</style>

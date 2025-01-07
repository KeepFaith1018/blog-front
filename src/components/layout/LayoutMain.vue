<script setup lang="ts"></script>
<template>
  <main>
    <div class="left-aside">
      <slot name="left-aside"></slot>
    </div>
    <div class="right-aside">
      <slot name="right-aside"></slot>
    </div>
  </main>
</template>
<style scoped lang="scss">
main {
  position: relative;
  width: 120rem;
  margin: 0 auto;
  padding: 4rem 1.5rem;
  color: var(--color-text);
  display: flex;
  justify-content: space-between;
  .left-aside {
    width: 85rem;
  }
  .right-aside {
    margin-left: 2rem;
    width: 33rem;
  }
}
</style>

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
<style lang="scss">
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
  @media screen and (max-width: 1260px) {
    & {
      width: 100%;
      flex-direction: column;
    }
    .left-aside {
      width: 100%;
    }
    .right-aside {
      margin-left: 0;
      margin-top: 2rem;
      width: 100%;
    }
  }
}
</style>

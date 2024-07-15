<template>
  <div class="main">
    <header-components />
  </div>
</template>

<script setup lang="ts">
import HeaderComponents from './components/header-components.vue'
</script>

<style scoped>
.main {
  overflow: hidden;
  width: 100%;
  height: 100%;
  background: url('@/assets/bg.png') no-repeat;
  background-size: 100% 100%;
}
</style>

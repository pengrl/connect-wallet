<template>
  <div class="header">
    <div class="logo"></div>
    <nav-components />
    <connect-components />
  </div>
</template>

<script setup lang="ts">
import navComponents from './nav-components.vue'
import connectComponents from './connect-components.vue'
</script>

<style scoped>
.header {
  margin: 43px auto 0;
  width: 1367px;
  height: 50px;
  display: flex;
  justify-content: space-between;
}
.logo {
  width: 179px;
  height: 38px;
  background: url('@/assets/logo.png') no-repeat;
  background-size: cover;
}
</style>

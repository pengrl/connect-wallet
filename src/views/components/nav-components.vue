<template>
  <div class="nav">
    <div
      class="nav-item"
      v-for="item in nav"
      :key="item"
      :class="{ active: activeItem === item }"
      @click="activeItem = item"
    >
      {{ item }}
      <!-- <img src="@/assets/vector.png" width="10px" alt="vector" v-if="item !== 'Home'" /> -->
    </div>
    <div class="language">
      <img src="@/assets/language.png" alt="language" />
      <img src="@/assets/vector.png" width="10px" alt="vector" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const nav = ['Home', 'Gallery', 'Buy', 'More', 'Socials']

const activeItem = ref('Home')
</script>

<style scoped>
.nav {
  width: 812px;
  height: 46px;
  border-radius: 23px;
  background: rgba(160, 160, 160, 0.2);
  backdrop-filter: blur(2px);
  display: flex;
  align-items: center;
  padding: 0 37px 0 7px;
  justify-content: space-between;
}

.nav-item {
  width: 87px;
  height: 35px;
  border-radius: 23px;
  text-align: center;
  line-height: 35px;
  cursor: pointer;
}

.language {
  display: flex;
  align-items: center;
  cursor: pointer;
}

.active {
  background-color: #010101;
  color: #ffac03;
}
</style>

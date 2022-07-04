<template>
  <div class="hamburger">
    <div class="hamburger-contaier">
      <svg-icon icon="hamburger-opened"></svg-icon>
    </div>
    <el-breadcrumb separator="/" class="breadcrumb">
      <template v-for="(item, index) in breadcrumbData" :key="index">
        <el-breadcrumb-item
          v-if="index !== breadcrumbData.length - 1"
          :to="{ path: item.path }"
        >
          {{ item.meta.title }}</el-breadcrumb-item
        >
        <el-breadcrumb-item v-else>{{ item.meta.title }}</el-breadcrumb-item>
      </template>
    </el-breadcrumb>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
const route = useRoute()
console.log('rpute=>>', route)
const breadcrumbData = computed(() => {
  return route.matched.filter((item) => item.meta.title && item.meta.icon)
})
console.log('item', breadcrumbData, '66')
</script>

<style lang="scss" scoped>
.hamburger {
  display: flex;
  .hamburger-contaier {
    width: 50px;
    height: 50px;
    line-height: 50px;
    text-align: center;
    cursor: pointer;
    transition: 0.2s;
  }
  .breadcrumb {
    height: 100%;
    line-height: 50px;
    font-size: 15px;
  }
  .hamburger-contaier:hover {
    background-color: rgba(0, 0, 0, 0.2);
  }
}
</style>

<template>
  <template v-if="item && !item.children">
    <el-menu-item :index="item.path">
      <el-icon>
        <svg-icon :icon="item.meta.icon"></svg-icon>
      </el-icon>
      {{ item.meta.title }}
    </el-menu-item>
  </template>
  <template v-if="item.children && item.children.length > 0">
    <el-sub-menu :index="item.path">
      <template #title>
        <el-icon>
          <svg-icon :icon="item.meta.icon"></svg-icon>
        </el-icon>
        <span>{{ item.meta.title }}</span>
      </template>
      <MenuItem
        v-for="item in item.children"
        :key="item.path"
        :item="item"
      ></MenuItem>
    </el-sub-menu>
  </template>
</template>

<script setup>
import { defineProps } from 'vue'

defineProps({
  item: {
    type: Object,
    default: () => {}
  }
})
</script>

<style lang="scss" scoped></style>

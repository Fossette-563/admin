<template>
  <div>
    <el-menu
      active-text-color="#fff"
      background-color="rgb(48, 65, 86)"
      default-active=""
      text-color="#bfcbd9"
      unique-opened
      router
    >
      <MenuItem
        v-for="item in menuList"
        :key="item.path"
        :item="item"
      ></MenuItem>
    </el-menu>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import MenuItem from './MenuItem'
import { useRouter } from 'vue-router'
// 引入过滤空children的文件
import { filterMenuData } from '../../utils/menu'
import { filterRouters, generateMenus } from '@/utils/router'
const router = useRouter()
console.log('router', router.getRoutes())
// 去除空children
const menuList = computed(() => {
  const routes = filterRouters(router.getRoutes())
  return filterMenuData(generateMenus(routes))
})
</script>

<style lang="scss" scoped></style>

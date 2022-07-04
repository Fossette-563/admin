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
// 所有的路由列表
console.log('router', router.getRoutes())

const menuList = computed(() => {
  // 传递所有的一级路由
  const routes = filterRouters(router.getRoutes())
  // 传递chirdren数据并去除空的children
  return filterMenuData(generateMenus(routes))
})
</script>

<style lang="scss" scoped>
el-menu {
  border-right: none;
}
</style>

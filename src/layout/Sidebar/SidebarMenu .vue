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
import MenuItem from './MenuItem'
import { reactive } from 'vue'
import { useRouter } from 'vue-router'
import { filterMenuData } from '../../utils/menu'

const router = useRouter()
const data = [
  {
    path: '/profile',
    name: 'profile',
    meta: {
      title: '个人中心',
      icon: 'personnel'
    }
  },
  {
    path: '/chart',
    name: 'chart',
    meta: {
      title: '数据可视化',
      icon: 'tree'
    }
  },
  {
    path: '/user',
    name: 'user',
    redirect: '/user/manage',
    meta: {
      title: '用户',
      icon: 'personnel'
    },
    children: [
      {
        path: '/user/manage',
        name: 'manage',
        meta: {
          title: '员工管理',
          icon: 'personnel-manage'
        }
      },
      {
        path: '/user/role',
        name: 'role',
        meta: {
          title: '角色列表',
          icon: 'role'
        }
      },
      {
        path: '/user/permission',
        name: 'permission',
        meta: {
          title: '权限列表',
          icon: 'permission'
        }
      }
    ]
  },
  {
    path: '/article',
    name: 'article',
    meta: {
      title: '文章',
      icon: 'article'
    },
    redirect: '/article/ranking',
    children: [
      {
        path: '/article/ranking',
        name: 'ranking',
        meta: {
          title: '文章排名',
          icon: 'article-ranking'
        }
      },
      {
        path: '/article/create',
        name: 'create',
        meta: {
          title: '创建文章',
          icon: 'article-create'
        }
      }
    ]
  }
]
console.log('router', router.getRoutes())

const menuList = reactive(filterMenuData(data))
</script>

<style lang="scss" scoped></style>

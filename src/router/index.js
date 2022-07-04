import { createRouter, createWebHashHistory } from 'vue-router'
import layout from '@/layout'
import ArticleRanking from './modules/ArticleRanking'
import UserManage from './modules/UserManage'
import RoteList from './modules/RoleList'
import PermissionList from './modules/PermissionList'
import ArticleCreate from './modules/ArticleCreate'
// 公有路由
const publicRoutes = [
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/login')
  },
  {
    path: '/',
    component: layout,
    redirect: '/profile',
    children: [
      {
        path: '/profile',
        name: 'profile',
        component: () => import('../views/profile/profile.vue'),
        meta: {
          title: '个人中心',
          icon: 'personnel'
        }
      },
      {
        path: '/chart',
        name: 'chart',
        component: () => import('../views/chart/chart.vue'),
        meta: {
          title: '数据可视化',
          icon: 'tree'
        }
      },
      {
        path: '/404',
        name: '404',
        component: () => import('../views/error-page/404')
      },
      {
        path: '/401',
        name: '401',
        component: () => import('../views/error-page/401')
      }
    ]
  }
]
// 私有路由表

export const privateRoutes = [
  UserManage,
  ArticleCreate,
  ArticleRanking,
  RoteList,
  PermissionList
]

const router = createRouter({
  history: createWebHashHistory(),
  routes: publicRoutes
})

export default router
// {
//   path: '/user',
//   name: 'user',
//   component: layout,
//   redirect: '/user/manage',
//   meta: {
//     title: '用户',
//     icon: 'personnel'
//   },
//   children: [
//     {
//       path: '/user/manage',
//       name: 'manage',
//       component: () => import('../views/user/manage.vue'),
//       meta: {
//         title: '员工管理',
//         icon: 'personnel-manage'
//       }
//     },
//     {
//       path: 'user/info/:id',
//       name: 'info',
//       component: () => import('../views/user/info')
//     },
//     {
//       path: 'user/import',
//       name: 'import',
//       component: () => import('../views/user/import')
//     },
//     {
//       path: '/user/role',
//       name: 'role',
//       component: () => import('../views/user/role.vue'),
//       meta: {
//         title: '角色列表',
//         icon: 'role"'
//       }
//     },
//     {
//       path: '/user/permission',
//       name: 'permission',
//       component: () => import('../views/user/permission.vue'),
//       meta: {
//         title: '权限列表',
//         icon: 'permission'
//       }
//     }
//   ]
// },
// {
//   path: '/article',
//   name: 'article',
//   component: () => layout,
//   meta: {
//     title: '文章',
//     icon: 'article'
//   },
//   redirect: '/article/ranking',
//   children: [
//     {
//       path: '/article/ranking',
//       name: 'ranking',
//       component: () => import('../views/article/ranking.vue'),
//       meta: {
//         title: '文章排名',
//         icon: 'article-ranking'
//       }
//     },
//     {
//       path: '/article/create',
//       name: 'create',
//       component: () => import('../views/article/create.vue'),
//       meta: {
//         title: '创建文章',
//         icon: 'article-create'
//       }
//     },
//     {
//       path: '/article/:id',
//       name: 'article-detail',
//       component: () => import('../views/article/article-detail.vue')
//     }
//   ]
// }

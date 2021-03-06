import Layout from '../../layout'

export default {
  path: '/user',
  name: 'userManage',
  redirect: '/user/manage',
  component: Layout,
  meta: {
    title: '用户',
    icon: 'personnel'
  },
  children: [
    {
      path: '/user/manage',
      component: () => import('../../views/user/manage'),
      meta: {
        title: '员工管理',
        icon: 'personnel-manage'
      }
    },
    {
      path: '/user/info/:id',
      name: 'userInfo',
      component: () => import('../../views/user/info'),
      meta: {
        title: '员工信息'
      }
    },
    {
      path: '/user/import',
      name: 'import',
      component: () => import('../../views/user/import.vue'),
      meta: {
        title: 'Excel导入'
      }
    }
  ]
}

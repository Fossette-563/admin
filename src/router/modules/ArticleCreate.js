import Layout from '../../layout'

export default {
  path: '/article',
  component: Layout,
  name: 'articleCreate',
  meta: {
    title: '文章',
    icon: 'article'
  },
  children: [
    {
      path: '/article/create',
      component: () => import('../../views/article/create'),
      meta: {
        title: '创建文章',
        icon: 'article-create'
      }
    }
  ]
}

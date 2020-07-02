export default [
  {
    path: '/order-list',
    name: 'orderList',
    meta: {
      title: '订单列表',
      breadcrumb: ['订单管理', '订单列表'],
    },
    component: () => import('@/views/shop/list/TableList.vue'),
  },
  {
    path: '/order/:id',
    name: 'orderProfile',
    meta: {
      title: '订单详情',
      breadcrumb: ['店铺订单管理', '订单详情'],
    },
    component: () => import('@/views/shop/list/ItemProfile.vue'),
  },
  {
    path: '/sku',
    name: 'skuList',
    meta: {
      title: '店铺sku管理',
      breadcrumb: ['店铺sku管理'],
    },
    component: () => import('@/views/sku/TableList.vue'),
  },
  {
    path: '/user',
    name: 'userList',
    meta: {
      title: '店铺人员管理',
      breadcrumb: ['店铺人员管理'],
    },
    component: () => import('@/views/user/TableList.vue'),
  },
]

export default [
  {
    path: '/order-list',
    name: 'orderList',
    meta: {
      title: '订单列表',
      breadcrumb: ['订单管理', '订单列表'],
    },
    component: () => import('@/views/order/list/TableList.vue'),
  },
  {
    path: '/order/:id',
    name: 'orderProfile',
    meta: {
      title: '订单详情',
      breadcrumb: ['店铺订单管理', '订单详情'],
    },
    component: () => import('@/views/order/list/ItemProfile.vue'),
  },
]

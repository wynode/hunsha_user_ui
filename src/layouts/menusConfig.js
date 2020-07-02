export default (/* vm */) => {
  return [
    {
      title: '店铺订单管理',
      icon: 'el-icon-s-order',
      router: { name: 'orderList' },
    },
    {
      title: '店铺Sku管理',
      icon: 'el-icon-s-goods',
      router: { name: 'skuList' },
    },
    {
      title: '店铺人员管理',
      icon: 'el-icon-user-solid',
      router: { name: 'userList' },
    },
  ]
}

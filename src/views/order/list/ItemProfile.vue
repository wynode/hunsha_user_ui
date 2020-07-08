<template>
  <div>
    <el-card class="profile_second_card">
      <component :is="activeTab"></component>
    </el-card>
  </div>
</template>

<script>
import { dateFormat } from '@/utils/dateFormat'
// import { fetchAdminShopOrder } from '@/apis'
import { get } from 'lodash'
import { showFields } from './formConfig'

export default {
  name: 'ShopProfile',

  components: {
    sku: () => import('@/views/order/sku/TableList'),
  },

  data() {
    return {
      activeTab: 'sku',
      orderData: {},
    }
  },

  computed: {
    showFields() {
      return showFields(this)
    },
  },

  methods: {
    getValue(obj, name) {
      return get(obj, name)
    },
    dateFormat(date) {
      return dateFormat(date)
    },
  },

  // mounted() {
  //   // const { id } = this.$route.params
  //   // fetchAdminShopOrder({ orderId: id }).then((data) => {
  //   //   this.orderData = data.result
  //   // })
  // },
}
</script>

<style lang="scss">
.admin_profile_top_info {
  padding: 10px 0;
  margin-top: -6px;
  ul {
    color: #333;
    display: flex;
    span {
      color: #999;
      font-size: 14px;
    }
    li {
      margin-top: 6px;
      min-width: 240px;
      margin-right: 40px;
    }
  }
}
.profile_second_card {
  margin-top: 15px;
  .el-card {
    border: none;
  }
  .profile_second_tabs {
    .el-card__body {
      margin-left: -15px;
      margin-right: -15px;
    }
  }
}
</style>

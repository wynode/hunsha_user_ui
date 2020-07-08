<template>
  <div v-if="showList">
    <el-card>
      <Txcel
        element-loading-text="数据加载中"
        class="Txcel"
        :data="tableList"
        :columns="tableListCols"
        :pager="false"
      />
    </el-card>
  </div>
  <div v-else>
    <el-card class="profile_second_card">
      <component :is="activeTab" :tableList="tableList"></component>
    </el-card>
  </div>
</template>

<script>
// import tableMixins from '@/mixins/table'
import { getOrderList } from '@/apis'
import { tableListCols } from './tableConfig'
import { filterFields, showFields } from './formConfig'
import { dateFormat } from '@/utils/dateFormat'
// import { fetchAdminShopOrder } from '@/apis'
import { get } from 'lodash'

// const table = tableMixins({
//   pagerInit: { page: 1, page_size: 10 },
// })

export default {
  name: 'adminOrderList',

  // mixins: [table],

  components: {
    sku: () => import('@/views/order/sku/TableList'),
  },

  data() {
    return {
      shopName: '',
      shopUserName: '',
      tableList: [],
      activeTab: 'sku',
      orderData: {},
      showList: true,
    }
  },

  computed: {
    getValue(obj, name) {
      return get(obj, name)
    },
    dateFormat(date) {
      return dateFormat(date)
    },
    showFields() {
      return showFields(this)
    },
    tableListCols() {
      return tableListCols(this)
    },

    filterFields() {
      return filterFields(this)
    },
  },

  // methods: {
  //   getPath() {
  //     const { shopId, shopName, shopUserId, shopUserName } = this.$route.query
  //     this.shopName = shopName
  //     this.shopUserName = shopUserName
  //     if (shopId || shopUserId) {
  //       this.$nextTick(() => {
  //         const { getForm, setForm } = this.$refs.effectForm
  //         setForm('shopId', Number(shopId))
  //         setForm('shopUserId', Number(shopUserId))
  //         const data = getForm()
  //         this.fetchTableList(data)
  //       })
  //     } else {
  //       this.fetchTableList()
  //     }
  //   },
  // },

  // watch: {
  //   $route: 'getPath',
  // },

  mounted() {
    const { code, name, phone } = this.$route.query
    if (code) {
      getOrderList({
        verifyCode: code,
        customerName: name,
        customerPhone: phone,
      }).then((data) => {
        this.showList = false
        this.tableList = data.result
      })
    } else {
      this.$router.push({ name: 'login ' })
    }
  },
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

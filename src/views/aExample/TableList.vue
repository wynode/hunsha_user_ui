<template>
  <div>
    <el-card>
      <el-button size="small" type="primary" class="Mb20 Mr20" @click="addItem">
        新增
      </el-button>

      <Txcel
        v-loading="mixTableLoading"
        element-loading-text="数据加载中"
        class="Txcel"
        :data="tableList"
        :columns="tableListCols"
        :pager="{
          page: pager.page,
          page_size: pager.page_size,
          layout: 'total,prev,pager,next,jumper',
          total: tableTotal,
        }"
        @change="handleTableChange"
      />
    </el-card>
  </div>
</template>

<script>
import tableMixins from '@/mixins/table'
import {
  // fetchShop,
  fetchShopList,
  postShop,
  patchShop,
  deleteShop,
} from '@/apis'
import { tableListCols } from './tableConfig'
import EditForm from './EditForm'

const table = tableMixins({
  pagerInit: { page: 1, page_size: 10 },
})

export default {
  name: 'ShopList',

  mixins: [table],

  data() {
    return {}
  },

  computed: {
    fetchTableListMethod() {
      return fetchShopList
    },

    tableListCols() {
      return tableListCols(this)
    },
  },

  methods: {
    addItem() {
      this.$createDialog(
        {
          title: '新增店铺',
          width: '600px',
          onSubmit: async (instance, slotRef) => {
            if (slotRef.$refs.effectForm) {
              const { effectForm } = slotRef.$refs
              if (await effectForm.useValidator()) {
                const form = slotRef.$refs.effectForm.getForm()
                await postShop(form)
                this.fetchTableList(this.filtersCache)
                this.$notify.success('新增成功')
                instance.close()
              }
            }
          },
        },
        () => <EditForm />
      ).show()
    },

    modifyItem(row) {
      this.$createDialog(
        {
          title: '更新店铺',
          width: '600px',
          validate: false,
          onSubmit: async (instance, slotRef) => {
            const form = slotRef.$refs.effectForm.getForm()
            await patchShop({
              upId: row.upId,
              ...form,
            })
            this.fetchTableList(this.filtersCache)
            this.$notify.success('修改成功')
            instance.close()
          },
        },
        () => <EditForm meta={row} />
      ).show()
    },

    async deleteItem(row) {
      const ifDel = await this.$confirm('请确认此删除操作, 是否继续?', '提示', {
        type: 'warning',
      }).catch(() => {
        this.$notify.info('操作取消')
        return false
      })

      if (ifDel) {
        await deleteShop({ upId: row.upId })
        this.$notify.success('删除成功')
        this.fetchTableList(this.filtersCache)
      }
    },
  },

  mounted() {
    this.fetchTableList()
  },
}
</script>

<style></style>

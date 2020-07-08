<template>
  <div class="order_sku_profile">
    <el-card v-for="sku in skuList" :key="sku.orderSkuId">
      <div class="table_sku">
        <div class="ts_item">
          <span>订单服装编号：{{ sku.orderNumber }}</span>
        </div>
        <div class="order_sku_tupian ts_item">
          <!-- <img :src="imgUrl + sku.thumb" alt="" /> -->
          <el-popover trigger="hover" placement="right">
            <img
              style="max-width: 500px; max-height: 600px"
              :src="imgUrl + sku.thumb"
              alt=""
            />
            <p slot="reference">
              <img
                :src="imgUrl + sku.thumb"
                alt=""
                style="cursor: pointer;"
                @click="goSkuProfile(sku)"
              />
            </p>
          </el-popover>
          <div class="ost_right">
            <!-- <div>
              <span>分类：{{ sku.categoryInfo.categoryName }}</span>
              <span>
                男装/女装：{{ sku.categoryInfo.gender == 1 ? '男装' : '女装' }}
              </span>
            </div> -->
            <div>
              <span>服装名称：{{ sku.skuName }}</span>
            </div>
            <div class="ost_right_1">
              <span>服装编号：{{ sku.skuCode }}</span>
            </div>
          </div>
        </div>
        <div class="ts_item">
          <span>订单类型：{{ sku.dealType | translate('dealType') }}</span>
          <template v-if="sku.dealType == 2">
            <span>租赁周期：{{ sku.rentNum || 0 }}天</span>
            <span>租赁押金：{{ sku.rentDepositNum || 0 }}元</span>
          </template>
        </div>
        <div class="ts_item">
          <span>
            客户身高：{{
              sku.customerHeight ? `${sku.customerHeight}cm` : '无'
            }}
          </span>
          <span>
            客户体重：{{
              sku.customerWeight ? `${sku.customerWeight}kg` : '无'
            }}
          </span>
        </div>
        <div class="ts_item">
          <span>
            衣长：{{ sku.clothesLength ? `${sku.clothesLength}cm` : '无' }}
          </span>
          <span>
            袖长：{{ sku.sleeveLength ? `${sku.sleeveLength}cm` : '无' }}
          </span>
          <span>
            肩宽：{{ sku.shoulderWidth ? `${sku.shoulderWidth}cm` : '无' }}
          </span>
          <span>胸围：{{ sku.bust ? `${sku.bust}cm` : '无' }}</span>
        </div>
        <div class="ts_item">
          <span>
            中腰：{{ sku.middleWaisted ? `${sku.middleWaisted}cm` : '无' }}
          </span>
          <span>下摆：{{ sku.hem ? `${sku.hem}cm` : '无' }}</span>
          <span>马甲：{{ sku.vest ? `${sku.vest}cm` : '无' }}</span>
          <span>
            裤长：{{ sku.trousersLength ? `${sku.trousersLength}cm` : '无' }}
          </span>
        </div>
        <div class="ts_item">
          <span>腰围：{{ sku.waistLine ? `${sku.waistLine}cm` : '无' }}</span>
          <span>臀围：{{ sku.hipLine ? `${sku.hipLine}cm` : '无' }}</span>
          <span>
            大腿：{{ sku.thighLength ? `${sku.thighLength}cm` : '无' }}
          </span>
          <span>
            小腿：{{ sku.shankLength ? `${sku.shankLength}cm` : '无' }}
          </span>
        </div>
        <div class="ts_item">
          <span>
            订单状态：
            <i :style="statusColor(sku)">
              {{ getStatus(sku.status, sku.dealType) }}
            </i>
          </span>

          <span>下单时间：{{ dateFormat(sku.addTime * 1000) }}</span>
        </div>
        <div class="ts_item" v-if="sku.status > 0">
          <span>物流类型：{{ sku.expressName }}</span>
          <span>物流单号：{{ sku.expressValue }}</span>
        </div>
        <div class="ts_item">
          <span>单价：{{ sku.price / 100 }}元</span>
          <span>数量：{{ sku.skuNum }}件</span>
          <span>合计：{{ sku.totalPrice / 100 }}元</span>
        </div>
        <!-- <div class="ts_item">
          <span>备注：{{ sku.note }}</span>
        </div> -->
        <div class="ts_item">
          <span>
            异常备注：
            <i style="color:#F56C6C">{{ sku.abnormalNote }}</i>
          </span>
        </div>
      </div>
    </el-card>
  </div>
</template>

<script>
import { IMG_URL } from '@/config'
import { getStatus } from '@/utils/common'
import { dateFormat } from '@/utils/dateFormat'
export default {
  name: 'adminOrderListSku',

  props: {
    skuList: {
      type: Array,
      default: () => [],
    },
  },

  data() {
    return {}
  },

  computed: {
    imgUrl() {
      return IMG_URL
    },
  },

  methods: {
    getStatus(value, type) {
      return getStatus(value, type)
    },
    dateFormat(value) {
      return dateFormat(value)
    },

    // goSkuProfile(row) {
    //   this.$createDialog(
    //     {
    //       fullscreen: true,
    //       footer: false,
    //     },
    //     () => <ShowForm meta={row.skuInfo} />
    //   ).show()
    //   // this.$router.push({ name: 'showSku' })
    // },

    statusColor(sku) {
      if (sku.status === 10) {
        return 'color: #67C23A'
      } else if (sku.status === 0) {
        return 'color: #F56C6C'
      } else if (sku.status === -1 || sku.status === -2) {
        return 'color: #E6A23C'
      }
    },
  },
}
</script>

<style lang="scss">
.order_sku_profile {
  .table_sku {
    width: 1000px;
    margin: 0 auto;

    div {
      min-height: 40px;
      line-height: 40px;
      border-bottom: 1px solid rgba(220, 220, 220, 0.4);
    }
    span {
      margin-right: 40px;
      margin-left: 15px;
      display: inline-block;
    }
    div:first-child {
      span {
        font-weight: bold;
        white-space: nowrap;
      }
    }
    div:nth-child(2n) {
      background: #f5f5f5;
      // background-image: linear-gradient(to right, #fff, #f5f5f5, #f5f5f5, #fff);
    }
  }
  .el-popover__reference {
    background: #fff;
  }
  .order_sku_tupian {
    display: flex;
    span {
      min-width: 120px;
      margin-right: 0;
    }
    img {
      margin-top: 1px;
      width: 123px;
      margin-left: -15px;
      height: 123px;
      object-fit: contain;
      background: #fff;
    }
    .ost_right {
      width: 100%;
      border-bottom: 0;
      div {
        span {
          font-weight: normal;
        }
      }
      div:nth-child(2n) {
        background: #fff;
      }
      .ost_right_1 {
        border-bottom: 0;
      }
    }
  }
  .el-card {
    box-shadow: none !important;
    margin-bottom: 10px;
    padding-bottom: 30px;
    border-bottom: 1px dashed #dcdcdc;
    .el-card__body {
      display: flex;
    }
  }
}
</style>

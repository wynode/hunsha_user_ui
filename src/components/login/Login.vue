<template>
  <div class="mo_div">
    <div v-if="showOrderList" class="mo_main">
      <div>
        <h1>尊敬的 {{ customerName }}:</h1>

        <h2>近30日订单列表</h2>
      </div>

      <div>
        <el-card
          v-for="item in tableList"
          :key="item.customerName"
          @click="showForm(item)"
          class="Mt15"
        >
          <div slot="header" @click="showForm(item)">
            <span>订单号：{{ item.orderNumber }}</span>
          </div>
          <div @click="showForm(item)">
            <ul>
              <li>
                客户名称：
                <span>{{ item.customerName }}</span>
              </li>
              <li>
                客户手机号码：
                <span>{{ item.customerPhone }}</span>
              </li>
              <li>
                客户微信：
                <span>{{ item.customerWeiXin }}</span>
              </li>
              <li>
                客户资料备注：
                <span>{{ item.customerNote }}</span>
              </li>
              <li>
                收货方式：
                <span>{{ item.receiveGoodsType }}</span>
              </li>
              <li>
                收货地址：
                <span>{{ item.customerNote }}</span>
              </li>
              <li>
                订单录入时间：

                <span>{{ dateFormat(item.addTime * 1000) }}</span>
              </li>
              <li>
                预期收货时间：
                <span>{{ dateFormat(item.receiveGoodsTime * 1000) }}</span>
              </li>
              <div style="display: flex">
                <li style="min-width: 100px">
                  订单价格统计：
                </li>
                <div>
                  <li style="min-width: 150px">
                    租赁：
                    <span>{{ item.rentTotalPrice / 100 || 0 }}元</span>
                  </li>
                  <li style="min-width: 150px">
                    出售：
                    <span>{{ item.saleTotalPrice / 100 || 0 }}元</span>
                  </li>
                  <li style="min-width: 150px">
                    定制：

                    <span>{{ item.customizeTotalPrice / 100 || 0 }}元</span>
                  </li>
                  <li style="min-width: 150px">
                    合计：
                    <span>{{ item.totalPrice / 100 }}元</span>
                  </li>
                </div>
              </div>
            </ul>
          </div>
        </el-card>
      </div>
    </div>
    <!-- <div v-else-if="showTableList">
      <component :is="table"></component>
    </div> -->
    <div class="login" :class="{ mo_login: isMobile }" v-else>
      <el-card class="box-card">
        <div slot="header" class="clearfix">
          <span>客户查询</span>
        </div>
        <EffectForm
          ref="effectForm"
          size="medium"
          label-width="auto"
          cancelText="重置"
          :label-position="isMobile ? 'top' : 'left'"
          @submit="handleLogin"
          @cancel="handleFilterResetFn"
        >
          <EffectFormField
            v-for="field in LoginFields"
            v-bind="field"
            :key="field.name"
          />
          <el-form-item
            label="验证码"
            prop="verifyCode"
            class="verify_code_item"
            :error="errorMsg"
          >
            <div class="verify_code" v-on:keyup.enter="handleLoginFn">
              <el-input v-model="verifyCode"></el-input>
              <img
                :src="verifyCodeUrl"
                alt=""
                class="verify_code_img"
                @click="fetchVerifyCodeFn"
              />
            </div>
          </el-form-item>
        </EffectForm>
      </el-card>
    </div>
  </div>
</template>

<script>
// import store from 'store2'
// import { USER_INFO } from '@/config'
import { getVerify, getOrderList } from '@/apis'
import { dateFormat } from '@/utils/dateFormat'
import orderTable from '@/views/order/list/TableList'
import { LoginFields } from './formConfig'
import ShowForm from './ShowForm'
/* eslint-disable */
export default {
  data() {
    return {
      // key: value,
      url: 'https://sso.yunaq.com/captcha/',
      verifyCode: '',
      verifyCodeUrl: '',
      verifyCodeTime: '',
      verifyCodeHash: '',
      errorMsg: '',
      customerName: '',
      showOrderList: false,
      showTableList: false,
      orderNumber: '',
      tableList: [],
      table: 'orderTable',
    }
  },
  components: {
    orderTable,
  },

  computed: {
    LoginFields() {
      return LoginFields(this)
    },

    isMobile() {
      let flag = navigator.userAgent.match(
        /(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i
      )
      return flag
    },
  },

  methods: {
    dateFormat(value) {
      return dateFormat(value)
    },
    handleLoginFn() {
      const form = this.$refs.effectForm.form
      this.handleLogin(form)
    },
    handleFilterResetFn() {
      this.verifyCode = ''
      this.handleFilterReset()
    },
    handleLogin(form) {
      if (!this.verifyCode) {
        this.errorMsg = '请填入验证码'
        return
      }
      if (this.verifyCode.length != 4) {
        this.errorMsg = '验证码的长度必须是4'
        return
      }

      getOrderList({
        ...form,
        verifyCode: this.verifyCode,
      })
        .then((data) => {
          this.tableList = data.result
          // store.set(USER_INFO, form.customerName)
          this.customerName = form.customerName
          if (this.tableList.length) {
            if (this.isMobile) {
              this.showOrderList = true
            } else {
              // this.showTableList = true
              this.$router.push({
                name: 'orderList',
                query: {
                  code: this.verifyCode,
                  phone: form.customerPhone,
                  name: form.customerName,
                },
              })
            }
          } else {
            this.$message.warning('未查询到客户订单信息')
          }
        })
        .catch(() => {
          this.errorMsg = ''
        })
      this.errorMsg = ''
    },

    fetchVerifyCodeFn() {
      getVerify().then((data) => {
        this.verifyCodeUrl = data.result.verifyCode || ''
        this.verifyCodeTime = data.result.verifyCodeTime
        this.verifyCodeHash = data.result.verifyCodeHash
      })
    },

    showForm(item) {
      this.$createDialog(
        {
          fullscreen: true,
          footer: false,
        },
        () => (
          <ShowForm
            tableList={item.orderSkuList}
            orderNumber={item.orderNumber}
          />
        )
      ).show()
    },
  },

  mounted() {
    // const mvp = document.getElementById('testViewport')
    // mvp.setAttribute('content', 'width=1020')
    this.fetchVerifyCodeFn()
  },
}
</script>

<style lang="scss">
.verify_code_item {
  position: relative;
  &::before {
    content: '*';
    color: #f04038;
    margin-right: 4px;
    position: absolute;
    top: 10px;
    left: 13px;
  }
}
.login {
  padding: 20px 20px;
  max-width: 500px;
  margin: 0 auto;

  .effect_btn_group {
    display: flex;
    justify-content: center;
  }

  .verify_code {
    display: flex;
  }
  .verify_code_img {
    max-width: 160px;
    height: 36px;
    cursor: pointer;
    margin-left: 20px;
    margin-right: 38px;
  }
}

.mo_login {
  font-size: 18px;
  .el-form-item__label {
    font-size: 16px;
  }
  .verify_code_item {
    .el-form-item__label {
      margin-left: 20px;
    }
    &::before {
      content: '*';
      color: #f04038;
      margin-right: 4px;
      position: absolute;
      top: 10px;
      left: 0;
    }
  }
}

.mo_main {
  padding: 20px;
  h1 {
    font-size: 18px;
  }
  h2 {
    text-align: center;
    font-size: 16px;
  }
  span {
    color: #333;
  }
}
</style>

<template>
  <el-container class="Hst">
    <el-header class="Df Aic bgh Header">
      <!-- <p :class="{ top_title_flex: !menuCollapse }" class="top_title">
        <a href="/" class="Lhcr Curp">
          <img
            src="./logo.png"
            alt=""
            style="width: 30px; height: 30px;margin-left: -20px; margin-right: 8px"
          />
        </a>
        客户订单查看
      </p> -->

      <el-dropdown class="Mla" trigger="click">
        <div v-if="userName" class="Curp">
          <span>尊敬的{{ userName }}</span>
          <i class="el-icon-arrow-down el-icon--right"></i>
        </div>
        <div v-else class="Curp">
          <a href="/login">请登录</a>
        </div>

        <el-dropdown-menu slot="dropdown">
          <!-- <el-dropdown-item class="Px0">logo
            <a class="Db Px20" href="/changepwd/">修改密码</a>
          </el-dropdown-item> -->
          <el-dropdown-item class="Px0">
            <a class="Db Px20" href="/logout">退出</a>
          </el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </el-header>

    <el-container class="Ovh" style="margin-top: -1px">
      <!-- <el-aside :width="menuCollapse ? '65px' : '216px'" class="Posr Pb56">
        <div class="menu_container">
          <div class="menu_scroll">
            <el-menu
              router
              :default-active="getActiveRouter()"
              :collapse="menuCollapse"
              :collapse-transition="false"
              background-color="#20222A"
              text-color="#fff"
              active-text-color="#fff"
              class="Hst BasicWrapperMenu"
            >
              <AsideMenu
                v-for="(item, index) in menuItems"
                :key="index"
                :item="item"
              />
            </el-menu>
          </div>
        </div>

        <div class="Df Aic Posa B0 Start0 End0 CollapseContainer">
          <i
            style="color:#009688;"
            class="Px16 Fz24 Curp"
            :class="[menuCollapse ? 'el-icon-s-unfold' : 'el-icon-s-fold']"
            @click="menuCollapse = !menuCollapse"
          ></i>
        </div>
      </el-aside> -->

      <el-main class="bg" id="main_anchor" style="margin-top: 1px">
        <!-- <HeaderBoard
          v-if="breadMeta"
          class="SubHeader"
          :title="breadMeta.title"
          :items="breadMeta.breadcrumb"
        /> -->
        <div class="kehu_header">客户订单查询系统</div>
        <router-view />
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
// import { mapGetters } from 'vuex'
// import AsideMenu from '@/components/AsideMenu.vue'
// import HeaderBoard from '@/components/HeaderBoard.vue'
import menusConfig from './menusConfig'
// import store from 'store2'
// import { AUTH_TOKEN } from '@/config'

export default {
  name: 'BasicWrapper',

  components: {
    // AsideMenu,
    // HeaderBoard,
  },

  data() {
    return {
      menuCollapse: false,
    }
  },

  computed: {
    // ...mapGetters('user', ['username', 'isLoggedIn']),

    menuItems() {
      return menusConfig(this)
    },

    breadMeta() {
      const { meta } = this.$route
      return meta.title
        ? { title: meta.title, breadcrumb: meta.breadcrumb }
        : null
    },

    userName() {
      return this.$route.query ? this.$route.query.name : ''
    },
  },

  methods: {
    // getUsername() {
    //   console.log(this.$router.query.name)
    //   debugger
    //   return this.$router.query.name
    // },

    getActiveRouter() {
      return this.$route.name
    },
  },

  // created() {
  //   // const token = store.get(AUTH_TOKEN)
  //   // if (!token) {
  //   //   window.location.replace('/login')
  //   // }
  // },
}
</script>

<style lang="scss">
.bgh {
  // background-color: #0b6fd6;
  background-color: #fff;
}

.el-main {
  padding: 15px;
}

.kehu_header {
  font-size: 20px;
  text-align: center;
  margin-top: -15px;
  background: #fff;
  margin-left: -15px;
  margin-right: -15px;
  padding: 10px;
  margin-bottom: 10px;
}

#main_anchor {
  min-width: 1200px;
  overflow-x: hidden;

  .el-card {
    box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
    color: #666;
    overflow: visible;
  }

  .el-card__header {
    padding: 12px 16px;
  }

  .el-card__body {
    padding: 10px 15px;
  }
}

.menu_container {
  height: 100%;
  width: 216px;
  overflow-x: hidden;
  .menu_scroll {
    width: 236px;
    height: 100%;
    overflow-x: hidden;
    .el-menu {
      width: 215px;
    }
  }
}
.bg {
  background-color: #f2f2f2;
}

.Header {
  height: 54px !important;
  border-bottom: 1px solid #e6e6e6;
  // border-bottom: none;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  .logo {
    width: 136px;
    height: 38px;
    color: #845bea;
  }
}

.SubHeader {
  margin: -24px -20px 16px;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
}

.CollapseContainer {
  height: 56px;
  border-right: 1px solid #e6e6e6;
  background-color: rgb(32, 34, 42);
}

.BasicWrapperMenu {
  ::-webkit-scrollbar {
    display: none;
  }

  .el-submenu .svgIcon {
    vertical-align: middle;
    margin-right: 5px;
    width: 24px;
    text-align: center;
    font-size: 18px;
    color: #909399;
  }

  .el-submenu .el-menu-item {
    padding: 0;
    min-width: 150px;
    padding-left: 60px !important;
  }

  .el-submenu {
    .el-submenu {
      .el-submenu__title {
        span {
          margin-left: 20px;
        }
      }
      .el-menu-item {
        span {
          margin-left: 14px;
        }
      }
    }
  }

  .el-menu-item {
    &:hover {
      background-color: rgb(0, 150, 136, 0.6) !important;
    }
  }

  .el-menu-item.is-active {
    color: #fff;
    background-color: #009688 !important;
  }
}

.top_title_flex {
  width: 215px;
  background-color: #20222a;
  height: 100%;
  margin-left: -20px;
  text-align: center;
  font-size: 16px;
  color: rgba(255, 255, 255, 0.8);
  justify-content: center;
}

.top_title {
  font-size: 16px;
  // padding-top: 16px;
  display: flex;
  align-items: center;
}
</style>

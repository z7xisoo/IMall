<template>
  <div class="login-wrap">
    <div class="header">
      <div class="name">
        <span>IMall</span>
      </div>
      <div class="br">————</div>
      <div class="info">Vue 展示框架
      </div>
    </div>
    <template v-if="showLogIn">
      <div class="content">
        <el-tabs v-model="componentName">
          <el-tab-pane label="扫码登录" name="ScanCode" />
          <el-tab-pane label="账户登录" name="AccountPwd" />
          <el-tab-pane label="打赏作者" name="Reward" />
        </el-tabs>
        <div class="log-in">
          <component :is="componentName" :updateKey="scanCodeKey" />
        </div>
        <div class="other">
          <el-link :underline="false" @click="showRegistered = true">注册账户</el-link>
          <el-link
            v-if="componentName === 'ScanCode'"
            :underline="false"
            @click="scanCodeKey++"
            class="forget"
          >刷新二维码</el-link>
          <el-link
            v-else-if="componentName === 'AccountPwd'"
            :underline="false"
            @click="handleRecover"
            class="forget"
          >忘记密码？</el-link>
          <el-link v-else :underline="false" href="https://github.com/LINXIROI" class="forget">关注作者</el-link>
        </div>
      </div>

      <div class="bottom">
        <span></span>
        <Eevee />
      </div>
    </template>
    <!-- 其他组件 start-->

    <!-- 注册 -->
    <Registered v-if="showRegistered" @goBack="handleGoBack" />

    <!-- 其他组件 end-->
  </div>
</template>
<script>
import Reward from "./view/Reward";
import ScanCode from "./view/ScanCode";
import AccountPwd from "./view/AccountPwd";
import Registered from "./components/Registered";
import Eevee from "./view/Eevee";
export default {
  name: "Login",
  components: {
    Reward,
    ScanCode,
    AccountPwd,
    Eevee,
    Registered
  },
  computed: {
    showLogIn() {
      return !this.showRegistered;
    }
  },
  data() {
    return {
      componentName: "AccountPwd",
      scanCodeKey: 0,
      showRegistered: false
    };
  },
  mounted() {},
  methods: {
    handleGoBack() {
      this.showRegistered = false;
    },
    handleRecover() {
      new Promise((resolve, reject) => {
        setTimeout(function() {
          resolve("foo");
        }, 300);
      })
        .then(() => {
          this.$notify({
            title: "那就这样吧～",
            showClose: false,
            position: "top-left"
          });
        })
        .then(() => {
          this.$notify({
            title: "再爱都曲终人散了",
            showClose: false,
            position: "top-left"
          });
        })
        .then(() => {
          this.$notify({
            title: "那就这样吧～",
            showClose: false,
            position: "top-left"
          });
        })
        .then(() => {
          this.$notify({
            title: "再爱都无法挣扎",
            showClose: false,
            position: "top-left"
          });
        });
    }
  }
};
</script>
<style lang="scss" scoped>
.login-wrap {
  width: 100%;
  height: 100%;
  overflow: hidden;
  background-color: #00ac80;
  background-image: linear-gradient(-58deg, yellow 15%, #00ac80 5%, #00ac80);
  justify-content: space-between;
  display: flex;
  flex-direction: column;
  align-items: center;
  .header {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 60px;
    border-bottom: 2px solid #e5e5e5;
    & .name,
    .br,
    .info {
      margin: 0 5px;
      color: orange;
      & > span {
        font-size: 24px;
      }
    }
    & .name {
      font-size: 18px;
    }
    & .br {
      color: red;
      font-weight: bolder;
    }
    & .info {
      color: #e5e5e5;
    }
  }
  .content {
    width: 360px;
    & .log-in {
      width: 360px;
      height: 240px;
      padding-bottom: 15px;
    }
  }
  .bottom {
    width: 100%;
    padding: 0 5%;
    display: flex;
    justify-content: space-between;
  }
  .other {
    height: 40px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #00ac80;
    background-image: linear-gradient(-90deg, rgba(yellow, 0.8) 5%, #fff);
    padding: 0 20px;
    border-radius: 0 0 8px 8px;
  }
}
</style>

<style lang="scss">
.login-wrap {
  .content {
    .el-tabs__item.is-top {
      background-color: rgba(#fff, 0.9);
      width: 120px;
      text-align: center;
    }
    .el-link--default {
      &.forget {
        .el-link--inner {
          color: #c49052;
        }
      }
      .el-link--inner {
        color: #00ac80;
      }
    }
  }
}
</style>
<template>
  <div class="global">
    <slot></slot>
  </div>
</template>

<script>
import { createNamespacedHelpers } from "Vuex";
const { mapState, mapActions } = createNamespacedHelpers("global");

export default {
  name: "Global",
  computed: {
    // ...mapState({
    // menu: "authority"
    // })
    ...mapState(["menu", "role"])
  },
  watch: {
    // 监听路由变化  TO34T5Y90
    $route: {
      async handler(v) {
        if (localStorage.getItem("token")) {
          await this.getConfiguration();
        }
        this.updateRouter();
      }
    }
  },
  data() {
    return {};
  },
  mounted() {
    // 当浏览器刷新时
    // 可以重定向，登出
    // 也可以重新请求基础信息如:用户信息 用户权限
    if (localStorage.getItem("token")) {
      this.getConfiguration();
    }
  },
  beforeDestroy() {},
  methods: {
    ...mapActions(["getConfiguration"]),
    // 路由权限判断  TO34T5Y90
    updateRouter() {
      if (
        !["/", "/404", "/403", "/login"].includes(this.$route.path) &&
        !this.role.includes(this.$route.meta.role)
      ) {
        this.$message({
          message: "没有该路由没权限or没有配置路由对应模块!",
          type: "error"
        });
        this.$router.replace("/");
      }
    }
  }
};
</script>

<style lang="scss">
</style>
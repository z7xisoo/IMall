<template>
  <Global>
    <transition name="fade" mode="out-in">
      <router-view />
    </transition>
  </Global>
</template>

<script>
import Global from "src/modules/global";
export default {
  name: "App",
  components: {
    Global
  }
};
</script>

<style lang="scss">
@import "./style/reset.css";
.el-form-item__label {
  color: #e8a106 !important;
}
.el-loading-mask {
  background-color: rgba(yellow, 0.7) !important;
}
.immove {
  .el-dialog {
    margin: 0 !important;
  }
}
</style>
<template>
  <div class="home">
    <el-menu
      class="el-menu-demo"
      mode="horizontal"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
      :default-active="activeIndex"
    >
      <template v-for="(t,k) in menu">
        <el-submenu v-if="t.submenu" :key="k" :index="t.moduleName">
          <template slot="title">{{ t.moduleName }}</template>
          <el-menu-item
            v-for="(t,k) in t.submenu"
            :key="k"
            :index="t.moduleName"
            @click="handleRouter(t.path)"
          >{{ t.moduleName }}</el-menu-item>
        </el-submenu>
        <el-menu-item
          v-else
          :key="k"
          :index="t.moduleName"
          @click="handleRouter(t.path)"
        >{{ t.moduleName }}</el-menu-item>
      </template>
    </el-menu>
  </div>
</template>

<script>
import { createNamespacedHelpers } from "Vuex";
const { mapState,mapGetters } = createNamespacedHelpers("global");
export default {
  name: "Home",
  computed: {
    // ...mapState({
    // menu: "authority"
    // }),
    ...mapState(["menu"]),
    ...mapGetters(["isHavePermission"]),
    activeIndex() {
      return this.$route.name;
    }
  },
  watch: {
    // "$route":{
    //   handler(item){
    //     this.activeIndex = item.name;
    //   },
    //   immediate:true
    // }
  },
  data() {
    return {
      // activeIndex:""
    };
  },
  mounted() {
    // 按钮权限-是否拥有首页查看权限
    console.log(this.isHavePermission(["home","view"]));
  },
  methods: {
    handleRouter(path) {
      if (path !== this.activeIndex) this.$router.push(path);
    }
  }
};
</script>

<style lang="scss">
</style>
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
    <div v-dragdata="{url}">
      <el-image :src="url" style="width: 100px; height: 100px" fit="fit"></el-image>
    </div>
    <div v-dragdata="url">{{ url }}</div>
    <a
      v-dragdata="{url:'http://www.baidu.com'}"
      href="http://www.baidu.com"
      target="_blank"
      rel="noopener noreferrer"
    >百度</a>
    <div
      v-drag="handleDrap"
      v-immove
      :style="{width:'600px',height:'400px',background:'#00ac80'}"
      class="“drag-wrap”"
    >可拖拽，接受拖拽元素值的wrap</div>

    <el-button type="text" @click="dialogVisible = true">点击打开 可拖拽的 Dialog</el-button>

    <el-dialog v-immove title="提示" :visible.sync="dialogVisible" width="300px" :before-close="handleClose">
      <span>这是一段信息</span>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import { createNamespacedHelpers } from "Vuex";
const { mapState, mapGetters } = createNamespacedHelpers("global");
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
      url:
        "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",
      input: "",
      dialogVisible: false
      // activeIndex:""
    };
  },
  mounted() {
    // 按钮权限-是否拥有首页查看权限
    console.log(this.isHavePermission(["home", "view"]),"是否拥有首页查看权限?");
  },
  methods: {
    handleRouter(path) {
      if (path !== this.activeIndex) this.$router.push(path);
    },
    handleDrap(data) {
      console.log(data, "拖拽获取的元素");
    },
    handleClose(done) {
      this.$confirm("确认关闭？")
        .then(_ => {
          done();
        })
        .catch(_ => {});
    }
  }
};
</script>

<style lang="scss">
</style>
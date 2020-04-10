<template>
  <div class="account-pwd">
    <el-form ref="form" label-position="top" :model="form" label-width="80px">
      <el-form-item
        label="账户(手机号or邮箱)"
        prop="account"
        :rules="form.account.includes('@') && [
        { required: true, message: '请输入邮箱地址', trigger: 'blur' },
        { type: 'email', message: '请输入正确的邮箱地址', trigger: 'blur' }
      ]|| [
        { required: true, validator:(rule, value, callback) => { 
          if(!(/^1(3|4|5|6|7|8|9)\d{9}$/.test(value))){
            callback('请输入正确的手机号码!')
            return;
          }
            callback()
         }, trigger:'blur' }
      ]"
      >
        <el-input v-model.trim="form.account" placeholder="请输入账户" clearable></el-input>
      </el-form-item>
      <el-form-item
        label="密码(登录密码or支付密码)"
        prop="pwd"
        :rules="[
        { required: true, message: '请输入密码', trigger: 'blur' },
      ]"
      >
        <el-input
          v-model.trim="form.pwd"
          :type="passwordType"
          :show-password="showPassword"
          placeholder="请输入密码"
        >
          <el-button @click="handleSubmit('form')" slot="append" icon="el-icon-position"></el-button>
        </el-input>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { createNamespacedHelpers } from "Vuex";
const { mapActions } = createNamespacedHelpers("global");

export default {
  name: "AccountPwd",
  data() {
    return {
      form: {
        account: "",
        pwd: ""
      },
      showPassword: true
    };
  },
  computed: {
    passwordType() {
      return this.showPassword ? "password" : "text";
    }
  },
  methods: {
    ...mapActions(["getConfiguration","getToken"]),
    handleSubmit(name) {
      this.getToken().then(() => {
        this.$router.push("/home");
      });
      // this.$refs[name].validate(valid => {
      //   if (valid) {
      //     if (!localStorage.getItem('MyInfo')) {
      //       this.$message({
      //         message: "还未注册用户，请先注册用户!",
      //         type: "warning"
      //       });
      //       return
      //     }
      //     const { account,pwd,payCode } = JSON.parse(localStorage.getItem('MyInfo'));
      //     const { account:oA,pwd:oW } = this.form;
      //     // !account || !pwd || !payCode
      //     if (account === oA && ( pwd === oW || payCode === oW)) {
      //       this.$message({
      //         message: "登录成功，接下来进行动态路由配置及菜单配置",
      //         type: "success"
      //       });
      //       this.$router.push("/home");
      //       this.getAuthority().then((res) => {
      //       })
      //     }else{
      //       this.$message({
      //         message: "账号或密码错误!",
      //         type: "error"
      //       });
      //     }
      //   }
      // });
    }
  }
};
</script>

<style lang="scss" scoped>
</style>
<style lang="scss">
</style>
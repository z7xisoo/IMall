<template>
  <div class="registered">
    <div class="top">注册账户</div>
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
        label="登录密码"
        prop="pwd"
        :rules="[
        { required: true, message: '请输入登录密码', trigger: 'blur' },
      ]"
      >
        <el-input v-model.trim="form.pwd" type="password" placeholder="请输入登录密码"></el-input>
      </el-form-item>
      <el-form-item
        label="重复密码"
        prop="pwd2"
        :rules="[
        { required: true, message: '请确认登录密码', trigger: 'blur' },
        { required: true, validator:(rule, value, callback) => { 
          if(form.pwd !== form.pwd2){
            callback('两次密码输入不一致，请重新输入!')
            return;
          }
            callback()
         }, trigger:'blur' }
        
      ]"
      >
        <el-input v-model.trim="form.pwd2" type="password" placeholder="请确认登录密码"></el-input>
      </el-form-item>
      <el-form-item
        label="支付密码"
        prop="payCode"
        class="pay-code"
        :rules="[
        { required: true, message: '请设置六位支付密码', trigger: 'blur' },
        { min:6, message: '请设置六位支付密码', trigger: 'blur' },
      ]"
      >
        <PayCode :code.sync="codeValue" />
      </el-form-item>
    </el-form>
    <div class="bottom">
      <el-button type="text" icon="el-icon-arrow-left" @click="goBackLogIn">返回登录</el-button>
      <el-button type="text" @click="handleSubmit('form')">
        注册账户
        <i class="el-icon-arrow-right el-icon--right"></i>
      </el-button>
    </div>
  </div>
</template>

<script>
import PayCode from "../PayCode";
export default {
  name: "Registered",
  data() {
    return {
      form: {
        account: "",
        pwd: "",
        pwd2: "",
        payCode: ""
      },
      showPassword: true,
      codeValue: ""
    };
  },
  components: {
    PayCode
  },
  computed: {
    passwordType() {
      return this.showPassword ? "password" : "text";
    }
  },
  watch: {
    codeValue: {
      handler(value) {
        this.form.payCode = value;
      }
    }
  },
  methods: {
    handleSubmit(name) {
      this.$refs[name].validate(valid => {
        if (valid) {
          let obj = Object.assign({}, this.form);
          delete obj.pwd2;
          localStorage.setItem("MyInfo", JSON.stringify(obj));
          this.$message({
            message: "注册成功!",
            type: "success"
          });
          this.goBackLogIn();
        }
      });
    },
    goBackLogIn() {
      this.$emit("goBack");
    }
  }
};
</script>

<style lang="scss" scoped>
.registered {
  width: 360px;
  margin: auto 0;
  padding-bottom: 100px;
  box-sizing: border-box;
  .top {
    font-size: 18px;
    text-align: center;
    color: #fff;
    line-height: 36px;
    height: 36px;
    border-bottom: 1px solid #fff;
    margin-bottom: 10px;
  }
  .bottom {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
}
</style>
<style lang="scss">
</style>
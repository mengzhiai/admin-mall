<!--
 * @Date: 2021-02-10 23:25:14
 * @Description: 登录
 * @LastEditors: jun
 * @LastEditTime: 2021-03-13 10:58:36
 * @FilePath: \admin-mall\src\views\login\index.vue
-->
<template>
<div class="login">
  <div class="header flex max-box">
    <div class="logo">
      <img src="https://account.xiaomi.com/static/res/7f6f2f5/account-static/respassport/acc-2014/img/mistore_logo.png" alt="" />
    </div>
    <div class="title">商城后台管理系统</div>
  </div>
  <div class="content">
    <div class="login-box">
      <div class="nav-tab flex-center">
        <div class="link">账号登录</div>
        <div class="link">扫码登录</div>
      </div>
      <el-form class="login-form" :model="loginForm" ref="loginForm" :rules="rules" label-width="0" size="large">
        <el-form-item prop="userName">
          <el-input v-model="loginForm.userName"></el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input type="password" v-model="loginForm.password" @keyup.enter.native="loginFun"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="loginFun" style="width: 100%">登录</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</div>
</template>

<script>
import {
  login
} from "@/api/login";
export default {
  data() {
    return {
      loginForm: {
        userName: '',
        password: ''
      },
      rules: {
        userName: [{
          required: true,
          message: "请输入用户名",
          trigger: "blur",
        }],
        password: [{
          required: true,
          message: "请输入密码",
          trigger: "blur",
        }],
      },
    };
  },
  methods: {
    loginFun() {
      this.$refs.loginForm.validate((valid) => {
        login(this.loginForm).then((res) => {
          if (res.code === 200) {
            localStorage.setItem('token', "Bearer " + res.data);
            this.$router.push({
              name: 'home'
            })
            this.$message.success(res.msg);
          }
        });
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.header {
  >div {
    width: calc(100% / 3);
  }

  .title {
    line-height: 100px;
    font-size: 40px;
    text-align: center;
  }
}

.content {
  width: 100%;
  background-color: #ebfdff;
  padding-top: 200px;
  height: calc(100vh - 150px);
  box-sizing: border-box;
}

.login-box {
  width: 410px;
  margin: 0 auto;
  background-color: #fff;

  .nav-tab {
    padding: 27px 0 24px;
    text-align: center;
    font-size: 24px;
    color: #666;

    .link {
      width: 50%;

      &:nth-child(1) {
        border-right: 3px solid #e0e0e0;
      }
    }
  }
}

.login-form {
  padding: 20px;

  .el-button {
    background-color: #ff6700;
  }
}
</style>

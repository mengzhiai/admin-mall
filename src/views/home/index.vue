<!--
 * @Date: 2021-02-12 23:55:32
 * @Description: 主页
 * @LastEditors: jun
 * @LastEditTime: 2021-03-13 13:09:38
 * @FilePath: \admin-mall\src\views\home\index.vue
-->
<template>
<div class="home">
  <div class="header">
    <div>商城后台管理系统</div>
  </div>
  <div class="container flex">
    <div class="menu">
      <el-menu class="menu-list" @open="handleOpen" @close="handleClose" background-color="#545c64" text-color="#fff" active-text-color="#ffd04b">
        <el-submenu :index="item.menuIndex" v-for="(item, index) in menuList" :key="index">
          <template slot="title">{{ item.name }}</template>
          <el-menu-item class="item" :index="ele.childrenIndex" v-for="(ele, i) in item.children" :key="i" @click="clickMenu(ele)">{{ ele.childName }}</el-menu-item>
        </el-submenu>
      </el-menu>
    </div>
    <div class="main">
      <div class="crumbs">
        <el-breadcrumb separator="/">
          <el-breadcrumb-item>首页</el-breadcrumb-item>
          <el-breadcrumb-item v-for="(item,i) in $route.meta.crumbsList" :key="i">{{item.title}}</el-breadcrumb-item>
          <!-- <el-breadcrumb-item v-for="(item,i) in $route.meta" :key="i" :to="{path: item.url}">{{item.title}}</el-breadcrumb-item> -->
        </el-breadcrumb>
      </div>
      <div class="router-view"><router-view></router-view></div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  data() {
    return {
      menuList: [{
          menuIndex: "1",
          name: "商品管理",
          children: [{
              childrenIndex: "1-1",
              childName: "产品管理",
              nameVal: "product",
            },
            {
              childrenIndex: "1-2",
              childName: "分类管理",
              nameVal: "category",
            },
          ],
        },
        {
          menuIndex: "2",
          name: "订单管理",
          children: [{
              childrenIndex: "2-1",
              childName: "订单类别",
            },
            {
              childrenIndex: "2-2",
              childName: "订单处理",
            },
          ],
        },
        {
          menuIndex: "3",
          name: "设置",
          children: [{
              childrenIndex: "3-1",
              childName: "员工管理",
              nameVal: "employee",
            },
            {
              childrenIndex: "3-2",
              childName: "用户管理",
              nameVal: "userManagement",
            },
          ],
        },
      ],
    };
  },
  methods: {
    handleOpen() {},
    handleClose() {},

    clickMenu(ele) {
      this.$router.push({
        name: ele.nameVal,
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.header {
  text-align: center;
  line-height: 60px;
  color: #fff;
  font-size: 20px;
  background-color: #57606f;
  margin-bottom: 1px;
}


.container {
  .menu {
    width: 300px;
  }
  .main {
    width: calc(100% - 300px - 5px);
    height: calc(100vh - 61px);
    margin-left: 5px;
    background-color: #F5F7F9;
  }
}
.crumbs {
  // height: 30px;
  padding: 0 10px;
  box-shadow: 0 1px 4px #ccc;
  .el-breadcrumb {
    line-height: 40px;
  }
}

.router-view {
  margin: 10px 0;
}


.menu-list {
  .item {
    cursor: pointer;
  }
}
</style>

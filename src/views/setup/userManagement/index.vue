<!--
 * @Date: 2021-03-06 14:06:50
 * @Description: 员工管理
 * @LastEditors: jun
 * @LastEditTime: 2021-03-06 21:37:16
 * @FilePath: \admin-mall\src\views\setup\employee\index.vue
-->
<template>
<div class="employee xm-container">
  <el-form class="search" :model="searchForm" ref="searchForm" label-width="80px" :inline="true" size="small">
    <el-form-item label="员工姓名:">
      <el-input v-model="searchForm.keywords" placeholder="关键字"></el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="search">搜索</el-button>
      <el-button type="default" @click="reset">重置</el-button>
    </el-form-item>
  </el-form>
  <div class="xm-content">
    <tableList ref="tableList" @editRow="editRow"></tableList>
    <paging :pageSize="tablePage.pageSize" :totalNum="tablePage.total" :currentPage="tablePage.currentPage" @currentChange="currentChange"></paging>
  </div>
</div>
</template>

<script>
import tableList from './tableList';
import paging from '@/components/paging/paging';
import {
  userList
} from "@/api/user";
export default {
  components: {
    tableList,
    paging
  },
  data() {
    return {
      searchForm: {

      },
      tablePage: {}
    }
  },
  mounted() {
    this.getList();
  },
  methods: {
    getList() {
      let parmas = {
        page: 1,
        limit: 10
      }
      userList(parmas).then(res => {
        if (res.code === 200) {
          this.$refs.tableList.tableData = res.data.rows;
        }
      })
    },
    search() {

    },
    reset() {

    },
    currentChange(val) {

    },

    editRow(row) {

    }
  }
}
</script>

<style lang="scss" scoped>

</style>

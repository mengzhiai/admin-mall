<!--
 * @Date: 2021-03-06 14:17:36
 * @Description: 员工管理table
 * @LastEditors: jun
 * @LastEditTime: 2021-03-06 21:52:03
 * @FilePath: \admin-mall\src\views\setup\userManagement\tableList.vue
-->
<template>
<div class="table-list">
  <el-table :data="tableData" border stripe height="calc(100vh - 280px)">
    <el-table-column prop="userName" label="姓名" min-width="100">
    </el-table-column>
    <el-table-column prop="test" label="性别" min-width="100">
    </el-table-column>
    <el-table-column prop="test" label="状态" min-width="100">
    </el-table-column>
    <el-table-column prop="createTime" label="注册时间" min-width="100">
    </el-table-column>
    <el-table-column prop="" label="操作" width="150" fixed="right">
      <template slot-scope="scope">
        <el-button type="primary" size="small" @click="editRow(scope.row.id, 'edit')">编辑</el-button>
        <el-button type="danger" size="small" @click="editRow(scope.row.id, 'delete')">删除</el-button>
      </template>
    </el-table-column>
  </el-table>
</div>
</template>

<script>
export default {
  data() {
    return {
      tableData: []
    }
  },
  methods: {
    editRow(row) {
      
    }
  }
}
</script>

<style lang="scss" scoped>

</style>

<!--
 * @Date: 2021-02-14 12:26:53
 * @Description: table
 * @LastEditors: jun
 * @LastEditTime: 2021-03-11 00:57:51
 * @FilePath: \admin-mall\src\views\productManagement\category\tableList.vue
-->
<template>
<div class="xm-table">
  <el-table :data="tableData" border stripe height="calc(100vh - 280px)">
    <el-table-column prop="name" label="分类名称" min-width="100"></el-table-column>
    <el-table-column prop="productName" label="分类数量" min-width="100"></el-table-column>
    <el-table-column prop="createTime" label="创建时间" min-width="100"></el-table-column>
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
      tableData: [],
    };
  },
  methods: {
    editRow(id, type) {
      this.$emit("editRow", id, type);
    },
  },
};
</script>

<style lang="scss" scoped>
</style>

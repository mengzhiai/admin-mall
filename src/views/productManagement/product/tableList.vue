<!--
 * @Date: 2021-02-14 12:26:53
 * @Description: table
 * @LastEditors: jun
 * @LastEditTime: 2021-02-21 00:10:17
 * @FilePath: \admin-mall\src\views\productManagement\product\tableList.vue
-->
<template>
<div class="xm-table">
  <el-table :data="tableData" border stripe height="calc(100vh - 280px)">
    <el-table-column prop="productName" label="产品名称" min-width="100">
    </el-table-column>
    <el-table-column prop="test" label="产品编号" min-width="100">
    </el-table-column>
    <el-table-column prop="img" label="缩略图" min-width="100">
      <template slot-scope="scope">
        <viewer>
          <img :src="scope.row.img" />
        </viewer>
      </template>
    </el-table-column>
    <el-table-column prop="productPrice" label="产品价格" min-width="100">
    </el-table-column>
    <el-table-column prop="categoryId" label="产品分类" min-width="100">
    </el-table-column>
    <el-table-column prop="" label="添加日期" min-width="100">
    </el-table-column>
    <el-table-column prop="" label="状态" min-width="100"> </el-table-column>
    <el-table-column prop="" label="操作" width="150">
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

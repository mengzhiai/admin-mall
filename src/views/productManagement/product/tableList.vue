<!--
 * @Date: 2021-02-14 12:26:53
 * @Description: table
 * @LastEditors: jun
 * @LastEditTime: 2021-06-14 19:45:10
 * @FilePath: \admin-mall\src\views\productManagement\product\tableList.vue
-->
<template>
<div class="xm-table">
  <el-table :data="tableData" border stripe height="calc(100vh - 280px)">
    <el-table-column prop="productName" label="产品名称" min-width="100">
    </el-table-column>
    <el-table-column prop="test" label="商品编号" min-width="100">
    </el-table-column>
    <el-table-column label="缩略图" min-width="100">
      <template slot-scope="scope">
        <viewer>
          <img class="img-icon" :src="scope.row.img" />
        </viewer>
      </template>
    </el-table-column>
    <el-table-column prop="productPrice" label="商品价格" min-width="100">
    </el-table-column>
    <el-table-column label="产品分类" min-width="100">
      <template slot-scope="scope">
        <span>{{getType(scope.row.category)}}</span>
      </template>
    </el-table-column>
    <el-table-column prop="createTime" label="添加日期" min-width="100">
    </el-table-column>
    <el-table-column label="状态" min-width="100">
      <template slot-scope="scope">
        <span>{{getStatus(scope.row.status)}}</span>
      </template>
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
      tableData: [],
    };
  },
  methods: {
    editRow(id, type) {
      this.$emit("editRow", id, type);
    },

    // 获取分类列表
    getType(val) {
      console.log('val', val);
      let list = this.$parent.categoryList;
      console.log('list', list);
      let strVal = list.find((item) => val === item.id);
      return strVal.name;
    },

    getStatus(val) {
      let list = this.$parent.statusList;
      let item =  list.find((item) => item.id === val);
      return item.name
    }
  },
};
</script>

<style lang="scss" scoped>
.img-icon {
  width: 100px;
  height: 100px;
  cursor: pointer;
}
</style>

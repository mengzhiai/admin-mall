<!--
 * @Date: 2021-07-30 01:00:48
 * @Description: 订单管理
 * @LastEditors: jun
 * @LastEditTime: 2021-07-30 01:38:41
 * @FilePath: \admin-mall\src\views\orderManage\orderList\orderIndex.vue
-->
<template>
<div class="xm-container">

  <div class="table-list">
    <el-table :data="tableData" border stripe>
      <el-table-column label="订单id" min-width="100">
      </el-table-column>
      <el-table-column label="订单编号" min-width="100">
      </el-table-column>
      <el-table-column label="创建时间" width="170">
      </el-table-column>
    </el-table>
  </div>

</div>
</template>

<script>
import { orderList } from '@/api/order'
export default {
  data() {
    return {
      tableData: []
    }
  },
  mounted() {
    this.getList();
  },
  methods: {
    getList() {
      orderList().then(res => {
        if(res.code === 200) {
          this.tableData = res.data;
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>

</style>

<!--
 * @Date: 2021-07-04 00:20:53
 * @Description: 
 * @LastEditors: jun
 * @LastEditTime: 2021-07-04 02:25:41
 * @FilePath: \admin-mall\src\views\carouselManage\bannerCarousel\bannerIndex.vue
-->
<template>
<div class="nav-carousel xm-container">
  <el-form class="search" :model="searchForm" ref="searchForm" label-width="80px" :inline="true" size="small">
    <el-form-item label="标题:">
      <el-input v-model="searchForm.title" placeholder="请输入标题"></el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="primary">搜索</el-button>
      <el-button>重置</el-button>
    </el-form-item>
  </el-form>
  <div class="table-list">
    <el-table :data="tableData" border stripe height="calc(100vh - 280px)">
      <el-table-column prop="" label="id" min-width="100">
      </el-table-column>
      <el-table-column prop="" label="标题" min-width="100">
      </el-table-column>
      <el-table-column prop="" label="状态" min-width="100">
        <template slot-scope="scope">
          <el-switch v-model="scope.row.status" active-color="#409eff" inactive-color="#cccccc" active-value="100" inactive-value="0">
          </el-switch>
        </template>
      </el-table-column>
      <el-table-column prop="" label="开始时间" width="160">
      </el-table-column>
      <el-table-column prop="" label="结束时间" width="160">
      </el-table-column>
      <el-table-column prop="" label="创建时间" width="160">
      </el-table-column>
      <el-table-column prop="" label="跳转位置" min-width="160">
      </el-table-column>
      <el-table-column label="操作" width="180" fixed="right">
        <template slot-scope="scope">
          <el-button type="primary" size="small" @click="editRow(scope.row, 'edit')">编辑</el-button>
          <el-button type="primary" size="small" @click="editRow(scope.row, 'delete')">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</div>
</template>

<script>
import {
  bannerList
} from '@/api/carousel'
export default {
  data() {
    return {
      searchForm: {

      },
      tableData: [{}]
    }
  },
  mounted() {
    this.getList();
  },
  methods: {
    getList() {
      let params = {
        page: 1,
        limit: 10
      }
      bannerList(params).then(res => {
        if(res.code === 200) {
          this.tableData = res.data.rows;
        }
      })
    },
    editRow(row) {

    }
  }
}
</script>

<style lang="scss" scoped>

</style>

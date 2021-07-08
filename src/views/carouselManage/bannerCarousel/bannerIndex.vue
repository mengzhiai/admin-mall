<!--
 * @Date: 2021-07-04 00:20:53
 * @Description: 
 * @LastEditors: jun
 * @LastEditTime: 2021-07-09 00:44:56
 * @FilePath: \admin-mall\src\views\carouselManage\bannerCarousel\bannerIndex.vue
-->
<template>
<div class="nav-carousel xm-container">
  <el-form class="search" :model="searchForm" ref="searchForm" label-width="120px" :inline="true" size="small">
    <el-form-item label-width="0">
      <el-button type="primary" @click="addBanner">添加</el-button>
    </el-form-item>
    <el-form-item label="标题:">
      <el-input v-model="searchForm.keyword" placeholder="请输入标题"></el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="getList">搜索</el-button>
      <el-button @click="reset">重置</el-button>
    </el-form-item>
  </el-form>
  <div class="table-list" v-loading="commonLoading">
    <el-table :data="tableData" border stripe height="calc(100vh - 280px)">
      <el-table-column prop="id" label="id" min-width="100">
      </el-table-column>
      <el-table-column prop="title" label="标题" min-width="100">
      </el-table-column>
      <el-table-column label="缩略图" width="120">
        <template slot-scope="scope">
          <viewer>
            <img class="img-icon" :src="scope.row.img" />
          </viewer>
        </template>
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
      <el-table-column prop="createTime" label="创建时间" width="160">
      </el-table-column>
      <el-table-column prop="" label="跳转位置" min-width="160">
      </el-table-column>
      <el-table-column label="操作" width="180" fixed="right">
        <template slot-scope="scope">
          <el-button type="primary" size="small" @click="editRow(scope.row.id, 'edit')">编辑</el-button>
          <el-button type="danger" size="small" @click="editRow(scope.row.id, 'delete')">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
  <el-dialog title="新增/编辑" :visible.sync="editDialog" width="600px">
    <edit ref="edit" v-if="editDialog"></edit>
    <div class="flex-center">
      <el-button size="small" @click="editDialog = false">取消</el-button>
      <el-button type="primary" size="small" @click="saveData">确定</el-button>
    </div>
  </el-dialog>

</div>
</template>

<script>
import edit from './edit.vue'
import {
  bannerList,
  addBanner,
  bannerDetail,
  updateBanner,
  deleteBanner
} from '@/api/carousel'
export default {
  components: {
    edit
  },
  data() {
    return {
      searchForm: {
        keyword: ''
      },
      tableData: [],
      editDialog: false
    }
  },
  mounted() {
    this.getList();
  },
  methods: {
    getList() {
      let params = {
        page: 1,
        limit: 10,
        keyword: this.searchForm.keyword
      }
      this.loadingStatus(true);
      bannerList(params).then(res => {
        this.loadingStatus(false);
        if (res.code === 200) {
          this.tableData = res.data;
        }
      })
    },

    reset() {
      this.searchForm.keyword = '';
      this.getList();
    },

    addBanner() {
      this.editDialog = true;
    },

    editRow(id, type) {
      if (type === 'edit') {
        this.editDialog = true;
        this.getDetail(id);
      } else if (type === 'delete') {
        this.getDelete(id);
      }
    },

    getDetail(id) {
      bannerDetail(id).then(res => {
        if (res.code === 200) {
          this.$refs.edit.editForm = res.data;
        }
      })
    },

    getDelete(id) {
      deleteBanner(id).then(res => {
        if (res.code === 200) {
          this.getList();
          this.$message.success(res.msg);
        }
      })
    },

    saveData() {
      let flag = this.$refs.edit.validateFrom();
      let params = this.$refs.edit.editForm;

      if (!flag) {
        this.$message.warning('请将必填项填写完整');
        return
      }

      if (!params.id) {
        addBanner(params).then(res => {
          if (res.code === 200) {
            this.getList();
            this.editDialog = false;
            this.$message.success(res.msg);
          }
        })
      } else {
        updateBanner(params).then(res => {
          this.getList();
          this.editDialog = false;
          this.$message.success(res.msg);
        })
      }
    }

  }
}
</script>

<style lang="scss" scoped>

</style>

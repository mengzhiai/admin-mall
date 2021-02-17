<!--
 * @Date: 2021-02-10 22:53:38
 * @Description: 产品管理
 * @LastEditors: jun
 * @LastEditTime: 2021-02-18 01:06:48
 * @FilePath: \admin-mall\src\views\productManagement\product\productIndex.vue
-->
<template>
<div class="product xm-container">
  <el-form class="search" :model="searchForm" ref="searchForm" label-width="80px" :inline="true" size="small">
    <el-form-item label="商品搜索:">
      <el-input v-model="searchForm.keywords" placeholder="关键字"></el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="search">搜索</el-button>
      <el-button type="default" @click="reset">重置</el-button>
    </el-form-item>
    <el-form-item label-width="200">
      <el-button type="primary" @click="addFun">添加商品</el-button>
    </el-form-item>
  </el-form>
  <div class="xm-content">
    <tableList ref="tableList" @editRow="editRow"></tableList>
    <paging :pageSize="tablePage.pageSize" :totalNum="tablePage.total" :currentPage="tablePage.currentPage" @currentChange="currentChange"></paging>
  </div>
  <el-dialog title="添加/编辑" :visible.sync="editDialog" width="800px" :close-on-click-modal="false">
    <edit ref="edit" v-if="editDialog"></edit>
    <div class="flex-center">
      <el-button type="default" size="medium" @click="editDialog=false">取消</el-button>
      <el-button type="primary" size="medium" @click="saveData">保存</el-button>
    </div>
  </el-dialog>

</div>
</template>

<script>
import tableList from './tableList';
import paging from '@/components/paging/paging';
import edit from './edit'
import {
  productList,
  productAdd,
  productDetail,
  productUpdate,
  productDelete
} from '@/api/product'
export default {
  components: {
    tableList,
    paging,
    edit
  },
  data() {
    return {
      searchForm: {
        keywords: ''
      },
      tableData: [{
        test: 1
      }],
      tablePage: {

      },
      editDialog: false
    };
  },
  mounted() {
    this.getList(1);
  },
  methods: {
    getList(page) {
      let params = {
        page: page,
        limit: 15,
        keywords: this.searchForm.keywords
      }
      productList(params).then(res => {
        if (res.code == 200) {
          this.$refs.tableList.tableData = res.data.rows;
          this.tableData = res.data.rows;
          this.tablePage = {
            page: page,
            currentPage: page,
            total: res.data.count,
            pageSize: 15
          }
        }
      })
    },

    search() {
      this.getList(1);
    },

    reset() {
      this.searchForm.keywords = '';
      this.search();
    },

    currentChange(val) {
      this.getList(val);
    },

    // 删除
    deleteRow(id) {
      this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        let params = {
          id
        }
        productDelete(params).then(res => {
          if (res.code === 200) {
            this.getList(1);
            this.$message.success(res.msg);
          }
        })
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消删除'
        });
      });
    },

    // 添加商品
    addFun() {
      this.editDialog = true;
    },

    // 编辑/删除
    editRow(id, type) {
      if (type === 'edit') {
        this.getDetail(id);
      } else if(type === 'delete') {
        this.deleteRow(id);
      }
    },

    // 编辑
    getDetail(id) {
      this.editDialog = true;
      productDetail(id).then(res => {
        if (res.code === 200) {
          this.$refs.edit.editForm = res.data;
        }
      })
    },

    // 保存
    saveData() {
      let val = this.$refs.edit.validateFrom();
      let params = this.$refs.edit.editForm;
      if (!val) {
        this.$message.warning('请将必填项填写完整');
        return
      }

      if (!params.id) {
        // 新建
        productAdd(params).then(res => {
          if (res.code === 200) {
            this.getList(1);
            this.editDialog = false;
            this.$message.success(res.msg);
          }
        })
      } else {
        // 编辑
        productUpdate(params).then(res => {
          if(res.code === 200) {
            this.getList(1);
            this.editDialog = false;
            this.$message.success(res.msg);
          }
        })
      }

    },

  }
};
</script>

<style lang="scss" scoped>
</style>

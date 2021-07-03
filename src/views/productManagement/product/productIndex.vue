<!--
 * @Date: 2021-02-10 22:53:38
 * @Description: 产品管理
 * @LastEditors: jun
 * @LastEditTime: 2021-07-04 00:08:16
 * @FilePath: \admin-mall\src\views\productManagement\product\productIndex.vue
-->
<template>
<div class="product xm-container">
  <el-form class="search" :model="searchForm" ref="searchForm" label-width="80px" :inline="true" size="small">
    <el-form-item>
      <el-button type="primary" @click="addFun">添加商品</el-button>
    </el-form-item>
    <el-form-item label="商品搜索:" label-width="150px">
      <el-input v-model="searchForm.keywords" placeholder="关键字搜索" clearable></el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="search">搜索</el-button>
      <el-button type="default" @click="reset">重置</el-button>
    </el-form-item>
  </el-form>
  <tableList ref="tableList" @editRow="editRow"></tableList>
  <paging :pageSize="tablePage.pageSize" :totalNum="tablePage.total" :currentPage="tablePage.currentPage" @currentChange="currentChange"></paging>
  <el-dialog title="添加/编辑" :visible.sync="editDialog" width="1000px" :close-on-click-modal="false">
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
  productDelete,
  classifyList
} from '@/api/product';
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
      categoryList: [],
      editDialog: false,
      statusList: [{
          id: 1,
          name: '在售'
        },
        {
          id: 2,
          name: '下架'
        },
        {
          id: 3,
          name: '无货'
        },
        {
          id: 4,
          name: '预约'
        }
      ],
      imgData: {
        token: "",
        bucket: "azm",
        key: "mall" + new Date().getTime(),
      },
    };
  },
  mounted() {
    this.getCategoryList();
    this.getList(1);
  },
  methods: {
    // 获取分类列表
    getCategoryList() {
      let params = {
        page: 1,
        limit: 20,
        keywords: ''
      }
      classifyList(params).then(res => {
        if (res.code === 200) {
          this.categoryList = res.data.rows;
        }
      })
    },
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
      this.$nextTick(() => {
        this.$refs.edit.categoryList = this.categoryList;
      })
    },

    // 编辑/删除
    editRow(id, type) {
      if (type === 'edit') {
        this.getDetail(id);
      } else if (type === 'delete') {
        this.deleteRow(id);
      }
    },

    // 编辑
    getDetail(id) {
      this.editDialog = true;
      productDetail(id).then(res => {
        if (res.code === 200) {
          this.$nextTick(() => {
            this.$refs.edit.editForm = res.data;
            this.$refs.edit.categoryList = this.categoryList;
          })
        }
      })
    },

    // 保存
    saveData() {
      let val = this.$refs.edit.validateFrom();
      let params = this.$refs.edit.editForm;
      let list = this.$refs.edit.getPicList();
      console.log('params', params);
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
          if (res.code === 200) {
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

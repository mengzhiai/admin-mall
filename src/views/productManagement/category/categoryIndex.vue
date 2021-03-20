<!--
 * @Date: 2021-02-13 13:43:53
 * @Description: 分类管理
 * @LastEditors: jun
 * @LastEditTime: 2021-03-20 23:44:20
 * @FilePath: \admin-mall\src\views\productManagement\category\categoryIndex.vue
-->
<template>
<div class="product xm-container">
  <el-form class="search" :model="searchForm" ref="searchForm" label-width="80px" :inline="true" size="small">
    <el-form-item>
      <el-button type="primary" @click="add">添加分类</el-button>
    </el-form-item>
    <el-form-item label="分类名称:" label-width="150px">
      <el-input v-model="searchForm.keywords" placeholder="请输入分类名称" clearable></el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="getList(1)">搜索</el-button>
      <el-button type="default" @click="reset">重置</el-button>
    </el-form-item>
  </el-form>
  <tableList ref="tableList" @editRow="editRow"></tableList>
  <paging :pageSize="tablePage.pageSize" :totalNum="tablePage.total" :currentPage="tablePage.currentPage" @currentChange="currentChange"></paging>
  <el-dialog :title="dialogTitle" :visible.sync="editDialog" width="600px">
    <edit ref="edit" v-if="editDialog"></edit>
    <span class="flex-center">
      <el-button size="small" @click="editDialog = false">取消</el-button>
      <el-button size="small" type="primary" @click="sumbit">确定</el-button>
    </span>
  </el-dialog>
</div>
</template>

<script>
import tableList from "./tableList";
import paging from '@/components/paging/paging';
import edit from './edit';
import {
  classifyList,
  addClassify
} from "@/api/product";
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
      tablePage: {},
    };
  },
  mounted() {
    this.getList(1);
  },
  methods: {
    getList(page) {
      let params = {
        page: page,
        limit: 10,
        keywords: this.searchForm.keywords
      }
      classifyList(params).then(res => {
        if (res.code === 200) {
          let data = res.data;
          this.$refs.tableList.tableData = data.rows;
          this.tablePage = {
            total: data.count,
            pageSize: 10,
            currentPage: page
          }
        }
      })
    },

    reset() {
      this.searchForm.keywords = '';
      this.getList(1);
    },

    currentChange(val) {
      this.getList(val);
    },

    // 添加
    add() {
      this.editDialog = true;
    },

    // 添加/编辑商品
    sumbit() {
      let params = this.$refs.edit.editForm;
      addClassify(params).then(res => {
        if(res.code === 200) {
          this.getList(1);
          this.editDialog = false;
          this.$message.success(res.msg);
        }
      })
    },

    /**
     * @description: 
     * @param {*} id
     * @param {*} type: edit: 编辑, goods: 管理商品,   delete: 删除
     * @return {*}
     */
    editRow(id, type) {
      if(type === '编辑') {
        getDetail(id);
      } else if(type === 'goods') {
        this.$router.push({
          name: 'goodsList',
          query: {
            id:id
          }
        })
      }
    },


    // 详情
    getDetail(id) {

    }
  },
};
</script>

<style lang="scss" scoped>
</style>

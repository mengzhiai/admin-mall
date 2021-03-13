<!--
 * @Date: 2021-03-13 13:03:23
 * @Description: 管理商品
 * @LastEditors: jun
 * @LastEditTime: 2021-03-13 14:09:18
 * @FilePath: \admin-mall\src\views\productManagement\category\detail\goodsList.vue
-->
<template>
<div class="goods-list">
  <tableList ref="tableList"></tableList>
  <paging :pageSize="tablePage.pageSize" :totalNum="tablePage.total" :currentPage="tablePage.currentPage" @currentChange="currentChange"></paging>
</div>
</template>

<script>
import tableList from '../../product/tableList';
import paging from '@/components/paging/paging';
import {
  goodsList,
  classifyList
} from '@/api/product'
export default {
  components: {
    tableList,
    paging
  },
  data() {
    return {
      categoryList: [],
      tablePage: {},
      classifId: ''
    }
  },
  mounted() {
    this.classifId = this.$route.query.id;
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
      goodsList(this.classifId).then(res => {
        if (res.code == 200) {
          this.$refs.tableList.tableData = res.data;
        }
      })
    },

    currentChange(val) {
      this.getList(val);
    }

  }
}
</script>

<style lang="scss" scoped>

</style>

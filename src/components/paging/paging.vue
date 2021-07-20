<!--
 * @Date: 2021-02-14 12:30:44
 * @Description: 分页组件
 * @LastEditors: jun
 * @LastEditTime: 2021-07-21 00:32:40
 * @FilePath: \admin-mall\src\components\paging\paging.vue
-->
<template>
<div class="xm-page">
  <el-pagination @current-change="currentChange" :current-page.sync="currentPage" :page-size="pageSize" layout="total, prev, pager, next, jumper" :total="totalNum" background>
  </el-pagination>
</div>
</template>

<script>
export default {
  props: {
    currentPage: {
      type: Number,
      default: 1
    },
    pageSize: {
      type: Number,
      default: 15
    },
    totalNum: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {}
  },
  methods: {
    currentChange(val) {
      this.$emit('currentChange', val);
    }
  }
}
</script>

<style lang="scss" scoped>
.xm-page {
  padding-top: 10px;
}
</style>

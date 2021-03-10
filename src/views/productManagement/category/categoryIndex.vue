<!--
 * @Date: 2021-02-13 13:43:53
 * @Description: 分类管理
 * @LastEditors: jun
 * @LastEditTime: 2021-03-11 00:56:24
 * @FilePath: \admin-mall\src\views\productManagement\category\categoryIndex.vue
-->
<template>
  <div class="product xm-container">
    <tableList ref="tableList" @editRow="editRow"></tableList>
  </div>
</template>

<script>
import tableList from "./tableList";
import { classifyList } from "@/api/product";
export default {
  components: {
    tableList,
  },
  data() {
    return {};
  },
  mounted() {
    this.getList();
  },
  methods: {
    getList() {
      let params = {
        page: 1,
        limit: 10,
        keywords: ''
      }
      classifyList(params).then(res => {
        if(res.code === 200) {
          this.$refs.tableList.tableData = res.data.rows;
        }
      })
    },
    editRow(id) {},
  },
};
</script>

<style lang="scss" scoped>
</style>

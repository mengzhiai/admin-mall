<!--
 * @Date: 2021-03-13 11:45:04
 * @Description: 新增/编辑分类
 * @LastEditors: jun
 * @LastEditTime: 2021-03-13 22:36:40
 * @FilePath: \admin-mall\src\views\productManagement\category\edit.vue
-->
<template>
<div class="edit">
  <el-form :model="editForm" ref="editForm" :rules="rules" label-width="80px" size="small">
    <el-form-item label="分类名称:">
      <el-input v-model="editForm.name"></el-input>
    </el-form-item>
    <el-form-item label="分类图标:">
      <el-input v-model="editForm.icon"></el-input>
    </el-form-item>
  </el-form>

</div>
</template>

<script>
export default {
  data() {
    return {
      editForm: {
        
      },
      rules: {
        
      }
    }
  }
}
</script>

<style lang="scss" scoped>

</style>

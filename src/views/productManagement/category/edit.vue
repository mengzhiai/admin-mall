<!--
 * @Date: 2021-03-13 11:45:04
 * @Description: 新增/编辑分类
 * @LastEditors: jun
 * @LastEditTime: 2021-07-18 13:43:50
 * @FilePath: \admin-mall\src\views\productManagement\category\edit.vue
-->
<template>
<div class="edit">
  <el-form :model="editForm" ref="editForm" :rules="rules" label-width="80px" size="small">
    <el-form-item label="分类名称:">
      <el-input v-model="editForm.name" placeholder="请输入分类名称"></el-input>
    </el-form-item>
    <el-form-item label="分类图标:" prop="img">
      <!-- <el-input v-model="editForm.icon"></el-input> -->
      <uploadPic ref="goodsPic" :imgUrl="editForm.img" @successImg="successImg" :limit="1"></uploadPic>

    </el-form-item>
  </el-form>
</div>
</template>

<script>
import uploadPic from "@/components/upload/uploadImg1";
export default {
  components: {
    uploadPic,
  },
  data() {
    return {
      editForm: {

      },
      rules: {

      }
    }
  },
  methods: {
    successImg(val) {
      this.editForm.img = val;
      this.$forceUpdate();
      this.$refs.editForm.clearValidate("img");
    },
  }
}
</script>

<style lang="scss" scoped>

</style>

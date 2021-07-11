<!--
 * @Date: 2021-07-06 23:16:14
 * @Description: 
 * @LastEditors: jun
 * @LastEditTime: 2021-07-10 15:52:23
 * @FilePath: \admin-mall\src\views\carouselManage\bannerCarousel\edit.vue
-->
<template>
<div class="edit">
  <el-form :model="editForm" ref="editForm" :rules="rules" label-width="100px" :inline="false" size="small">
    <el-form-item label="标题:" prop="title">
      <el-input v-model="editForm.title" placeholder="请输入标题"></el-input>
    </el-form-item>
    <el-form-item label="显示图片:" prop="img">
      <uploadPic ref="goodsPic" :imgUrl="editForm.img" @successImg="successImg" :limit="1"></uploadPic>
    </el-form-item>
    <!-- <el-form-item label="显示时间">
      <el-date-picker v-model="editForm.timeArr" type="datetimerange" range-separator="至" start-placeholder="开始日期" end-placeholder="结束日期">
      </el-date-picker>
    </el-form-item> -->
    <el-form-item label="状态:">
      <el-switch v-model="editForm.status" active-color="#409eff" inactive-color="#cccccc" active-value="1" inactive-value="2">
      </el-switch>
    </el-form-item>
    <el-form-item label="详情页:" prop="jumpId">
      <!-- <el-input v-model="editForm.jumpId" placeholder="请输入详情页id" clearable></el-input> -->
      <el-select v-model="editForm.jumpId" filterable>
        <el-option v-for="item in productList" :key="item.id" :label="item.productName" :value="item.id">
        </el-option>
      </el-select>
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
        title: "",
        status: '1',
        img: "",
        jumpId: null
      },
      rules: {
        title: [{
          required: true,
          message: "请输入标题",
          trigger: "blur",
        }, ],
        img: [{
          required: true,
          message: "请上传图片",
          trigger: "change",
        }, ],
        jumpId: [{
          required: true,
          message: "请输入详情页id",
          trigger: "change",
        }, ],
      },
      productList: [],
    };
  },
  methods: {
    successImg(val) {
      this.editForm.img = val;
      this.$forceUpdate();
      this.$refs.editForm.clearValidate("img");
    },

    validateFrom() {
      let flag = false;
      this.$refs.editForm.validate((valid) => {
        if (valid) {
          flag = true;
        } else {
          flag = false;
        }
      });
      return flag;
    },
  },
};
</script>

<style lang="scss" scoped>
.edit {
  .el-input {
    width: 240px;
  }
}
</style>

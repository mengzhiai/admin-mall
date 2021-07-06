<!--
 * @Date: 2021-07-06 23:16:14
 * @Description: 
 * @LastEditors: jun
 * @LastEditTime: 2021-07-07 01:28:27
 * @FilePath: \admin-mall\src\views\carouselManage\bannerCarousel\edit.vue
-->
<template>
<div class="edit">
  <el-form :model="editForm" ref="editForm" :rules="rules" label-width="100px" :inline="false" size="small">
    <el-form-item label="标题:" prop="title">
      <el-input v-model="editForm.title" placeholder="请输入标题"></el-input>
    </el-form-item>
    <el-form-item label="显示位置" prop="site">
      <el-select v-model="editForm.site" placeholder="" clearable filterable>
        <el-option v-for="item in siteList" :key="item.id" :label="item.name" :value="item.id">
        </el-option>
      </el-select>
    </el-form-item>
    <el-form-item label="显示图片:" prop="img">
      <uploadPic ref="goodsPic" :imgUrl="editForm.img" @successImg="successImg" :limit="1"></uploadPic>
    </el-form-item>
    <el-form-item label="显示时间">
      <el-date-picker v-model="editForm.timeArr" type="datetimerange" range-separator="至" start-placeholder="开始日期" end-placeholder="结束日期">
      </el-date-picker>
    </el-form-item>
    <el-form-item label="跳转位置:" prop="jumPosition">
      <el-select v-model="editForm.jumPosition" placeholder="" clearable filterable>
        <el-option v-for="item in positionList" :key="item.id" :label="item.name" :value="item.id">
        </el-option>
      </el-select>
    </el-form-item>
    <el-form-item label="详情页id:" prop="jumpId">
      <el-input v-model="editForm.jumpId" placeholder="请输入详情页id" clearable></el-input>
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
        site: "1",
        timeArr: [],
        jumPosition: "1",
        img: '',
        jumpId: null
      },
      rules: {
        title: [{
          required: true,
          message: "请输入标题",
          trigger: "blur",
        }],
        site: [{
          required: true,
          message: "请选择显示位置",
          trigger: "change",
        }],
        jumPosition: [{
          required: true,
          message: "请选择跳转位置",
          trigger: "change",
        }],
        img: [{
          required: true,
          message: "请上传图片",
          trigger: "change",
        }],
        jumpId: [{
          required: true,
          message: "请输入详情页id",
          trigger: "blur",
        }]
      },

      siteList: [{
        name: "首页",
        id: "1",
      }, ],

      positionList: [{
        name: "详情页",
        id: "1",
      }, ],
    };
  },
  methods: {
    successImg(val) {
      this.editForm.img = val;
      this.$forceUpdate();
      this.$refs.editForm.clearValidate('img')
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

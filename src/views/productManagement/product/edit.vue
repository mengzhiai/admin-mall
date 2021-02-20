<!--
 * @Date: 2021-02-14 12:39:02
 * @Description: 新增/编辑
 * @LastEditors: jun
 * @LastEditTime: 2021-02-21 00:02:14
 * @FilePath: \admin-mall\src\views\productManagement\product\edit.vue
-->
<template>
  <div class="edit">
    <el-form
      :model="editForm"
      ref="editForm"
      :rules="rules"
      label-width="120px"
      size="medium"
    >
      <el-row>
        <el-col :span="12">
          <el-form-item label="产品名称:" prop="productName">
            <el-input v-model="editForm.productName"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="产品编号:">
            <el-input v-model="editForm.test"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="12">
          <el-form-item label="产品价格:" prop="productPrice">
            <el-input v-model="editForm.productPrice"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="产品分类:" prop="category">
            <el-input v-model="editForm.category"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="12">
          <el-form-item label="产品数量:" prop="amount">
            <el-input v-model="editForm.amount"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="产品状态:">
            <el-input v-model="editForm.status"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-form-item label="产品图片:" size="normal">
        <el-upload
          :action="$uploadUrl"
          :show-file-list="false"
          :file-list="fileList"
          list-type="picture-card"
          :on-success="onSuccess"
          :before-upload="beforeAvatarUpload"
        >
          <i class="el-icon-plus"></i>
        </el-upload>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { upload } from "@/api/common";
export default {
  data() {
    return {
      editForm: {
        productName: "",
        productPrice: "",
        amount: "",
        category: "",
        status: "",
      },
      fileList: [],
      rules: {
        productName: [
          {
            required: false,
            message: "产品名称不能为空",
            trigger: "blur",
          },
        ],
        productPrice: [
          {
            required: true,
            message: "产品价格",
            trigger: "blur",
          },
        ],
        amount: [
          {
            required: true,
            message: "产品数量",
            trigger: "blur",
          },
        ],
        category: [
          {
            required: true,
            message: "产品分类",
            trigger: "blur",
          },
        ],
      },
    };
  },
  methods: {
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

    handlePictureCardPreview() {},

    handleRemove() {},
    beforeAvatarUpload() {

    },

    imgUpload(fileData) {
      const file = fileData.file;
      let formData = new FormData();
      upload(formData).then((res) => {
        if (res.code === 200) {
          this.$message.success(res.msg);
        }
      });
    },

    onSuccess(response, file, fileList) {
      console.log(response, file);
      console.log("fileList", fileList);
      this.fileList = fileList;
    },
  },
};
</script>

<style lang="scss" scoped>
</style>

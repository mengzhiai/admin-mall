<!--
 * @Date: 2021-03-20 14:16:22
 * @Description: 图片上传
 * @LastEditors: jun
 * @LastEditTime: 2021-03-20 14:45:45
 * @FilePath: \admin-mall\src\components\upload\uploadImg.vue
-->
<template>
<div class="upload-img">
  <el-upload :action="$uploadUrl" list-type="picture-card" :limit="limitLen" :class="{'no-upload':uploadImgList.length == limitLen}" :on-success="onSuccess" :on-preview="handlePictureCardPreview" :on-remove="handleRemove">
    <i class="el-icon-plus"></i>
  </el-upload>
  <el-dialog :visible.sync="dialogVisible" append-to-body>
    <img width="100%" :src="dialogImageUrl" alt="">
  </el-dialog>
</div>
</template>

<script>
export default {
  props: {
    // 图片上传个数限制
    limitLen: {
      type: Number,
      default: 1
    }
  },
  data() {
    return {
      imageUrl: "",
      dataType: {
        type: 1,
        module: 4,
      },
      uploadImgList: [],
      dialogImageUrl: '',
      dialogVisible: false
    };
  },
  methods: {
    handleAvatarSuccess(res, file) {
      this.imageUrl = URL.createObjectURL(file.raw);
      this.$emit("successImg", res.url);
    },
    beforeAvatarUpload(file) {
      const isJPG = file.type === "image/jpeg";
      const isLt2M = file.size / 1024 / 1024 < 2;

      /* if (!isJPG) {
        this.$message.error('上传头像图片只能是 JPG 格式!');
      } */
      if (!isLt2M) {
        this.$message.error("上传头像图片大小不能超过 2MB!");
      }
      return isJPG && isLt2M;
    },

    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    handlePictureCardPreview(file) {
      this.dialogImageUrl = file.url;
      this.dialogVisible = true;
    },

    onSuccess(response, file, fileList) {
      console.log(response, file, fileList);
      this.uploadImgList = fileList;
      this.$emit('successImg', response.url)
    }
  },
};
</script>

<style lang="scss" scoped>
.uploadWidth {
  width: 100px;
  height: 100px;
  line-height: 100px;
  border: 1px solid #ccc;
}
</style>

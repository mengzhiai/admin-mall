<!--
 * @Date: 2021-03-20 14:16:22
 * @Description: 图片上传
 * @LastEditors: jun
 * @LastEditTime: 2021-03-24 00:03:17
 * @FilePath: \admin-mall\src\components\upload\uploadImg.vue
-->
<template>
  <div class="upload-img">
    <el-upload
      :action="$uploadUrl"
      list-type="picture-card"
      :limit="limitLen"
      :data="imgData"
      :class="{ 'no-upload': uploadImgList.length == limitLen }"
      :on-success="onSuccess"
      :before-upload="beforeUpload"
      :on-preview="handlePictureCardPreview"
      :on-remove="handleRemove"
    >
      <i class="el-icon-plus"></i>
    </el-upload>
    <el-dialog :visible.sync="dialogVisible" append-to-body>
      <img width="100%" :src="dialogImageUrl" alt="" />
    </el-dialog>
  </div>
</template>

<script>
export default {
  props: {
    // 图片上传个数限制
    limitLen: {
      type: Number,
      default: 1,
    },
  },
  data() {
    return {
      imageUrl: "",
      dataType: {
        type: 1,
        module: 4,
      },
      uploadImgList: [],
      dialogImageUrl: "",
      dialogVisible: false,
      imgData: {
        token: 'OZH9d7hJYRm9_q1B8FB8l4I25KMIOkEGHNfNeUVZ:SuDXNrjiPsdHE-aQZEUjsBjxISc=:eyJzY29wZSI6ImF6bSIsImRlYWRsaW5lIjoxNjE2NTE4NTM0fQ==',
        bucket: 'azm',
      }
    };
  },
  methods: {
    handleRemove(file, fileList) {
      console.log(file, fileList);
    },

    // 上传之前
    beforeUpload(file) {
      console.log('file', file);
      const isJPG = file.type === "image/jpeg";
      const isPng = file.type === 'image/png';
      const isLt2M = file.size / 1024 / 1024 < 2;

      if(isJPG || isJPG) {
        this.$message.error('请上传图片');
        return
      }

      if (!isLt2M) {
        this.$message.error("上传头像图片大小不能超过 2MB!");
      }
      return isJPG && isLt2M;

    },

    // 查看图片
    handlePictureCardPreview(file) {
      this.dialogImageUrl = file.url;
      this.dialogVisible = true;
    },

    onSuccess(response, file, fileList) {
      console.log(response, file, fileList);
      this.uploadImgList = fileList;
      this.$emit("successImg", response.hash);
    },
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

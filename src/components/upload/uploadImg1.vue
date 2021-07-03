<!--
 * @Date: 2021-06-09 23:52:23
 * @Description: 
 * @LastEditors: jun
 * @LastEditTime: 2021-07-03 23:58:55
 * @FilePath: \admin-mall\src\components\upload\uploadImg1.vue
-->
<template>
<div class="upload-img">
  <el-upload ref="upload" class="avatar-uploader" :data="imgData" :action="$uploadUrl" :show-file-list="false" :on-success="onSuccess" :before-upload="beforeAvatarUpload">
    <img v-if="imgUrl" :src="imgUrl" class="avatar" :class="uploadWidth">
    <i v-else class="el-icon-plus avatar-uploader-icon" :class="uploadWidth"></i>
  </el-upload>
  <div v-if="isSize">尺寸为{{sizeWidth}}</div>
</div>
</template>

<script>
import {
  uploadToken
} from "@/api/common";
export default {
  props: {
    // 上传虚框的宽度
    uploadWidth: {
      type: String,
      default: 'uploadWidth'
    },
    isSize: {
      type: Boolean,
      default: false
    },
    sizeWidth: {
      type: String,
      default: ''
    },
    imgUrl: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      imgData: {
        token: "",
        bucket: "azm",
        key: "mall" + new Date().getTime(),
      },
    };
  },
  mounted() {
    this.getToken();
  },
  methods: {
    getToken() {
      uploadToken().then((res) => {
        if (res.code === 200) {
          this.imgData.token = res.data;
        }
      });
    },

    onSuccess(res, file) {
      this.$refs.upload.clearFiles()
      let url = `http://img.jun666.cn/${res.key}`;
      this.$emit("successImg", url);
      this.getDateTime();
    },

    getDateTime() {
      this.imgData.key = 'mall' + new Date().getTime()
    },
    
    beforeAvatarUpload(file) {}
  }
}
</script>

<style lang="scss" scoped>
.uploadWidth,
.avatarWidth {
  width: 100px;
  height: 100px;
  line-height: 100px;
  border: 1px dashed #ccc;
}
</style>

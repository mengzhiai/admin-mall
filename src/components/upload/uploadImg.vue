<!--
 * @Date: 2021-03-20 14:16:22
 * @Description: 图片上传
 * @LastEditors: jun
 * @LastEditTime: 2021-07-20 23:27:55
 * @FilePath: \admin-mall\src\components\upload\uploadImg.vue
-->
<template>
<div class="upload-img">
  <el-upload :action="$uploadUrl" list-type="picture-card" :limit="limitLen" :data="imgData" :file-list="fileList" :class="{ 'no-upload': uploadImgList.length == limitLen }" :on-success="onSuccess" :before-upload="beforeUpload" :on-preview="handlePictureCardPreview" :on-remove="handleRemove">
    <i class="el-icon-plus"></i>
  </el-upload>
  <el-dialog :visible.sync="dialogVisible" append-to-body>
    <img width="100%" :src="dialogImageUrl" alt="" />
  </el-dialog>
</div>
</template>

<script>
import {
  uploadToken
} from "@/api/common";
export default {
  props: {
    // 图片上传个数限制
    limitLen: {
      type: Number,
      default: 1,
    },
    fileList: {
      type: Array,
      default: (() => {
        return []
      })
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
      dialogImageUrl: "",
      dialogVisible: false,
      imgData: {
        token: "",
        bucket: "azm",
        key: "mall" + new Date().getTime(),
      },
    };
  },

  created() {
    this.getToken();
  },
  mounted() {
    console.log('aaa', this.fileList);
  },
  methods: {
    getToken() {
      uploadToken().then((res) => {
        if (res.code === 200) {
          this.imgData.token = res.data;
        }
      });
    },

    handleRemove(file, fileList) {
      console.log('file', file);
      console.log('fileList', fileList);
      this.fileList = fileList;
    },

    // 上传之前
    beforeUpload(file) {
      /* const isJPG = file.type === "image/jpeg";
      const isPng = file.type === "image/png";
      const isLt2M = file.size / 1024 / 1024 < 2;

      if (isJPG || isPng) {
        this.$message.error("请上传图片");
      }

      if (!isLt2M) {
        this.$message.error("上传头像图片大小不能超过 2MB!");
      }
      return isJPG && isLt2M; */
    },

    // 查看图片
    handlePictureCardPreview(file) {
      this.dialogImageUrl = file.url;
      this.dialogVisible = true;
    },

    onSuccess(response, file, fileList) {
      console.log('fileList', fileList);
      /* this.uploadImgList = fileList;
      this.imgData.key = 'mall' + new Date().getTime();
      if (this.limitLen >= 1) {
        this.disposeData(fileList);
      } else {
        let url = `http://img.jun666.cn/${response.key}`;
        this.$emit("successImg", url);
      } */
      this.getDateTime();
      this.disposeData(fileList);
    },

    disposeData(dataList) {
      dataList.forEach((item, i) => {
        if (item.response) {
          item.img = `http://img.jun666.cn/${item.response.key}`;
        }
      });
      this.uploadImgList = dataList;
    },

    getDateTime() {
      this.imgData.key = 'mall' + new Date().getTime()
    },

    getPicList() {
      let list = this.uploadImgList;
      // console.log('fileList', this.fileList);
      // console.log('uploadImgList', this.uploadImgList);
      // let arr = [...this.fileList, ...this.uploadImgList];
      return list;
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

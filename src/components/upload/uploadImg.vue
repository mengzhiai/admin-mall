<!--
 * @Date: 2021-03-20 14:16:22
 * @Description: 图片上传
 * @LastEditors: jun
 * @LastEditTime: 2021-07-03 17:37:04
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
import { uploadToken } from "@/api/common";
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
        token: "",
        bucket: "azm",
        key: "mall" + new Date().getTime(),
      },
    };
  },

  created() {
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

    handleRemove(file, fileList) {
    },

    // 上传之前
    beforeUpload(file) {
      const isJPG = file.type === "image/jpeg";
      const isPng = file.type === "image/png";
      const isLt2M = file.size / 1024 / 1024 < 2;

      if (isJPG || isPng) {
        this.$message.error("请上传图片");
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
      this.uploadImgList = fileList;
      if (this.limitLen >= 1) {
        this.disposeData(fileList);
      } else {
        let url = `http://img.jun666.cn/${response.key}`;
        this.$emit("successImg", url);
      }
    },

    disposeData(dataList) {
      let imgList = [];
      dataList.forEach((item, i) => {
        let obj = {
          index: i,
          url: `http://img.jun666.cn/${item.response.key}`,
        };
        imgList.push(obj);
      });
      this.uploadImgList = imgList;
    },

    getPicList() {
      console.log('aa', this.uploadImgList);
      let list = this.uploadImgList;
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

<!--
 * @Date: 2021-02-14 12:39:02
 * @Description: 新增/编辑
 * @LastEditors: jun
 * @LastEditTime: 2021-03-21 01:00:42
 * @FilePath: \admin-mall\src\views\productManagement\product\edit.vue
-->
<template>
<div class="edit">
  <el-form :model="editForm" ref="editForm" :rules="rules" label-width="120px" size="medium">
    <el-row>
      <el-col :span="12">
        <el-form-item label="商品名称:" prop="productName">
          <el-input v-model="editForm.productName" placeholder="商品名称"></el-input>
        </el-form-item>
      </el-col>
      <el-col :span="12">
        <el-form-item label="商品价格:" prop="productPrice">
          <el-input v-model="editForm.productPrice" placeholder="商品价格"></el-input>
        </el-form-item>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="12">
        <el-form-item label="商品分类:" prop="category">
          <el-select v-model="editForm.category" placeholder="商品分类" filterable>
            <el-option v-for="item in categoryList" :key="item.id" :label="item.name" :value="item.id">
            </el-option>
          </el-select>
        </el-form-item>
      </el-col>
      <el-col :span="12">
        <el-form-item label="商品数量:" prop="amount">
          <el-input v-model="editForm.amount" placeholder="商品数量"></el-input>
        </el-form-item>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="12">
        <el-form-item label="商品状态:">
          <el-select v-model="editForm.status" value-key="" placeholder="商品分类" filterable>
            <el-option v-for="item in statusList" :key="item.id" :label="item.name" :value="item.id">
            </el-option>
          </el-select>
        </el-form-item>
      </el-col>
      <el-col :span="12">
        <el-form-item label="是否新品:">
          <el-radio-group v-model="editForm.isNew">
            <el-radio :label="1">是</el-radio>
            <el-radio :label="2">否</el-radio>
          </el-radio-group>

        </el-form-item>
      </el-col>
    </el-row>
    <el-form-item label="商品图片:">
      <upload-img @successImg="successImg" :limitLen="1"></upload-img>
    </el-form-item>
    <el-form-item label="商品展示图:">
      <upload-img :limitLen="4"></upload-img>
    </el-form-item>
    <el-form-item label="商品详情图:">
      <upload-img :limitLen="8"></upload-img>
    </el-form-item>
  </el-form>
</div>
</template>

<script>
import uploadImg from '@/components/upload/uploadImg'
import {
  upload
} from "@/api/common";
export default {
  components: {
    uploadImg
  },
  data() {
    return {
      editForm: {
        productName: "",
        productPrice: "",
        amount: "",
        category: "",
        status: "",
        isNew: 2
      },
      fileList: [],
      categoryList: [],
      statusList: [{
          id: 1,
          name: '在售'
        },
        {
          id: 2,
          name: '下架'
        },
        {
          id: 3,
          name: '无货'
        },
        {
          id: 4,
          name: '预约'
        }
      ],
      rules: {
        productName: [{
          required: false,
          message: "产品名称不能为空",
          trigger: "blur",
        }, ],
        productPrice: [{
          required: true,
          message: "产品价格",
          trigger: "blur",
        }, ],
        amount: [{
          required: true,
          message: "产品数量",
          trigger: "blur",
        }, ],
        category: [{
          required: true,
          message: "产品分类",
          trigger: "blur",
        }, ],
      },
    };
  },
  mounted() {
    this.getCategoryType();
  },
  methods: {
    getCategoryType() {
      console.log('this.$parent.categoryList', this.$parent.categoryList);
      this.categoryList = this.$parent.categoryList;
      console.log('categoryList', this.categoryList);
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

    handlePictureCardPreview() {},

    handleRemove() {},
    beforeAvatarUpload() {

    },

    // 图片上传成功
    successImg(url) {
      console.log('url', url);
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
    }
  },
};
</script>

<style lang="scss" scoped>
.edit {
  .el-select {
    width: 100%;
  }
}
</style>

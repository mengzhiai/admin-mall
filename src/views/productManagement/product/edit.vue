<!--
 * @Date: 2021-02-14 12:39:02
 * @Description: 新增/编辑
 * @LastEditors: jun
 * @LastEditTime: 2021-07-03 22:58:32
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
          <el-select v-model="editForm.category" placeholder="商品分类">
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
    <el-form-item label="商品标签:">
      <el-input v-model="editForm.label" placeholder="请输入商品标签" clearable></el-input>

    </el-form-item>
    <el-form-item label="商品图片:" prop="img">
      <uploadPic ref="goodsPic" :imgUrl="editForm.img" @successImg="successImg" :limit="1"></uploadPic>
    </el-form-item>
    <el-form-item label="商品展示图片:">
      <uploadExhibition ref="uploadExhibition" :limitLen="4"></uploadExhibition>
    </el-form-item>
    <el-form-item label="商品详情:">
      <editor :option="option" v-model="editForm.detailContent"></editor>
    </el-form-item>
  </el-form>
</div>
</template>

<script>
import uploadPic from '@/components/upload/uploadImg1';
import uploadExhibition from '@/components/upload/uploadImg';
import editor from '@/components/editor/editor.vue';

export default {
  components: {
    uploadPic,
    uploadExhibition,
    editor
  },
  data() {
    return {
      editForm: {
        productName: "",
        productPrice: "",
        amount: "",
        category: "",
        status: "",
        isNew: 2,
        img: '',
        detailContent: ''
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
          required: true,
          message: "请输入商品名称",
          trigger: "blur",
        }],
        productPrice: [{
          required: true,
          message: "请输入商品价格",
          trigger: "blur",
        }],
        amount: [{
          required: true,
          message: "请输入商品数量",
          trigger: "blur",
        }],
        category: [{
          required: true,
          message: "请选择商品分类",
          trigger: "change",
        }],
        category: [{
          required: true,
          message: "请选择商品分类",
          trigger: "change",
        }],
        img: [{
          required: true,
          message: "请上传商品图",
          trigger: "change",
        }],
      },
      option: {
        height: 400,
      }
    };
  },
  mounted() {
    // this.getEditor();
    this.getCategoryType();
  },
  methods: {
    // 获取商品分类
    getCategoryType() {
      this.categoryList = this.$parent.categoryList;
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

    successImg(url) {
      this.editForm.img = url;
      this.$forceUpdate();
      this.$refs.editForm.clearValidate('img')
    },

    getPic() {
      this.editForm.goodsPicList = this.$refs.goodsPic.getPicList();
    },

    getPicList() {
      console.log('uploadExhibition', this.$refs.uploadExhibition);
      return this.$refs.uploadExhibition.getPicList();
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

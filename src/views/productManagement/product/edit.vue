<!--
 * @Date: 2021-02-14 12:39:02
 * @Description: 新增/编辑
 * @LastEditors: jun
 * @LastEditTime: 2021-06-14 19:44:38
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
    <el-form-item label="商品展示图:">
      <uploadPic ref="goodsPic" :imgUrl="editForm.img" @successImg="successImg" :limit="1"></uploadPic>
    </el-form-item>
    <el-form-item label="商品展示图:">
      <uploadExhibition :limitLen="4"></uploadExhibition>
    </el-form-item>
    <el-form-item label="商品详情图:">
      <uploadDetail :limitLen="8"></uploadDetail>
    </el-form-item>
  </el-form>
</div>
</template>

<script>
import uploadPic from '@/components/upload/uploadImg1';
import uploadExhibition from '@/components/upload/uploadImg';
import uploadDetail from '@/components/upload/uploadImg';
export default {
  components: {
    uploadPic,
    uploadExhibition,
    uploadDetail
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
    console.log('this', this.editForm);
    this.getCategoryType();
  },
  methods: {
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
    },

    getPic() {
      this.editForm.goodsPicList = this.$refs.goodsPic.getPicList();
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

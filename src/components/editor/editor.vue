<!--
 * @Date: 2021-07-03 19:31:04
 * @Description: 
 * @LastEditors: jun
 * @LastEditTime: 2021-07-03 23:58:31
 * @FilePath: \admin-mall\src\components\editor\editor.vue
-->
<template>
<div ref="wang"></div>
</template>

<script>
import wangEditor from 'wangeditor'
import {
  uploadToken
} from "@/api/common";
export default {
  props: {
    // wangEditor 的配置
    option: {
      type: Object,
      default () {
        return {}
      }
    },
    // v-model 双向绑定：接受父组件的值
    // https://cn.vuejs.org/v2/guide/components-custom-events.html#%E8%87%AA%E5%AE%9A%E4%B9%89%E7%BB%84%E4%BB%B6%E7%9A%84-v-model
    value: {
      type: String,
      default: ''
    }
  },
  watch: {
    // 监听父组件传值，将值赋值给编辑器
    value(n) {
      if (this.editor && n !== this.temp) {
        this.editor.$textElem.html(n)
      }
    }
  },
  data() {
    return {
      temp: '', // 缓存当前的编辑器中的值，用于与父组件传入值进行对比
      editor: null,
      // imgData: {}
    }
  },
  computed: {
    imgData() {
      return this.$store.state.uploadData;
    }
  },
  mounted() {
    this.getToken();
    console.log('imgData', this.imgData);
    this.editor = new wangEditor(this.$refs.wang)
    // 合并配置项
    Object.assign(this.editor.config, this.option)

    // v-model 双向绑定：把值发送到父组件（不占用用户的 onchange 配置）
    this.editor.txt.eventHooks.changeEvents.push(() => {
      this.temp = this.editor.$textElem.html()
      this.$emit('input', this.temp)
    })

    // this.editor.customConfig.uploadFileName = 'myFile';
    this.editor.config.uploadImgServer = this.$uploadUrl;
    this.editor.config.uploadFileName = 'file';
    this.editor.config.uploadImgParams = this.imgData;
    this.editor.config.uploadImgHooks = {
      success: function (xhr, editor, result) {
        console.log('s', xhr, editor, result);
      },
      fail: function (xhr, editor, result) {
        console.log('f', xhr, editor, result);
      },
      error: function (xhr, editor, result) {
        console.log('e', xhr, editor, result);
      },

      customInsert: (insertImg, result, editor) => {
        let url = `http://img.jun666.cn/${result.key}`;
        insertImg(url);
        this.imgData.key = 'mall' + new Date().getTime()
      },
    }
    this.editor.create()

    if (this.value.length) {
      this.editor.txt.html(this.value)
    }
  },
  methods: {
    getToken() {
      uploadToken().then((res) => {
        if (res.code === 200) {
          this.imgData.token = res.data;
        }
      });
    },
  },
  beforeDestroy() {
    if (this.editor) {
      this.editor.destroy()
    }
  }
}
</script>

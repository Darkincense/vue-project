<style lang="less" scoped>
button {
  margin-bottom: 5%;
}
</style>
<template>
  <div class="app">
      <h3>{{ time | dateServer }}</h3>
      <button @click="parentCall">点击操作子组件</button>
      <!-- 在子组件定义一下ref属性 -->
      <div class="use">
        <input type="text" v-model="mobile" placeholder="请输入您要查询的手机号">          
        <button @click="inquireMobile">点击查询手机归属地</button>
      </div>
      <p>父组件中： {{ val }}</p>




      <!-- 自定义组件 -->
      <children-component
      :test="val"
      :a="a"
      @changebtn="changea"
      @changeValue="changeValu"
      ></children-component>




      <!-- 弹窗组件 -->
      <dialog-model 
      ref="dialog"
      heading="自定义"
       >
        <!-- <div slot="heading">查询结果</div> -->
        <div slot="content">{{ localtion }}</div>
      </dialog-model>
      <dialog-model ref="dialogo">

      </dialog-model>
  </div>
</template>
<script>

import DialogModel from '../../../public/dialog.vue';
import ChildrenComponent from './childrenComponent.vue'

export default {
  data() {
    return {
      a: 20,
      val: '开始输入吧',
      heading: '开始自定义标题',
      time: 20180202,
      title: "父组件内消息",
      mobile: "",
      localtion: "请输入正确的手机号"
    };
  },
  components: {
    DialogModel,
    ChildrenComponent
  },
  methods: {
    changea: function(p){
      this.a = p;
    },
    changeValu: function(e){
      console.log('传过来的参数',e)
      this.val = e;
    },
    inquireMobile: function() {
      self = this; // this在回调函数里指向不是vue实例因为下面要用，所以在这里备份一下；
      //   console.log(this.mobile)
      // vue 更改配置文件解决跨域请求
      //   axios.get('https://tcc.taobao.com/cc/json/mobile_tel_segment.htm?tel=' + this.mobile,function(data){
      //       console.log(data)
      //   })

      // ajax 解决跨域请求
      $.ajax({
        url:
          "https://tcc.taobao.com/cc/json/mobile_tel_segment.htm?tel=" +
          this.mobile,
        type: "GET",
        dataType: "JSONP",
        success: function(res) {
          if (res.carrier != undefined) {
            self.localtion = res.carrier;
          } else {
            self.localtion = "请输入正确的手机号";
          }
          self.$refs.dialog.open();
        }
      });
    },
    parentCall: function() {
      //   父组件调用子组件内的方法，操作子组件内的数据
      // this.$refs.chilll.changeIsshow(this.title, "换个标题试试");
      this.$refs.dialogo.open();
    }
  }
};
</script>



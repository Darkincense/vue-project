<template>
  <div class="app">
      <button 
      class="changeA"
      @click="changeA"
      >每次点击a加12</button>
      <h3>父组件传递过来的a值是{{ a }}</h3>
      <button @click="openModel">弹窗组件</button>
      <dialog-model 
      ref="dilog"
      heading="查看当前a值的结果">
          <div slot='heading'>查看a的值</div>
          <div slot="content">a此时的值是 {{ a }}</div>
          <!-- <a slot="ok_btn"></a> -->
      </dialog-model>
  </div>
</template>
<script>
import DialogModel from '../../../public/dialog.vue';

export default {
  props: [
      'a','heading'
      ],     // 子组件里面用props数组的形式来接受父组件传进来的数据
  data(){
      return {
          b: 12,
          title: '这是另一个调用弹窗的元素'
      }
  },
  components: {
      DialogModel
  },
  methods: {
      openModel: function(){
        //   调用组件内的弹窗
          this.$refs.dilog.open();
      },
      changeA: function(){
          console.log('触发改变')
          // 父组件中有和 gaibianazhi  同名的自定义点击事件 用来改变值（发射信号告诉父组件改变哪个值，改成什么样）
           this.$emit('gaibianazhi',this.b)
        //   this.$emit('gaibianazhi')     //该方法的第二个参数是子组件传向父组件的参数
      }
  }
}
</script>
<style lang="less" scoped>
.changeA {
    cursor: pointer;
}
.foot .ok_btn {
    display: none;
}
</style>



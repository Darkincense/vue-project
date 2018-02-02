<template>
  <div class="app">
      <button 
      class="changeA"
      @click="changeA"
      >点击让父组件内的a累加</button>
      <h3>父组件传递过来的值是{{c}}</h3>
      <button @click="openModel">弹窗组件</button>
      <hello ref="chil"/>
  </div>
</template>
<script>
import hello from '../f-cComponents/childrenComponent';

export default {
  props: [
      'c'
      ],     // 子组件里面用props数组的形式来接受父组件传进来的数据
  data(){
      return {
          b: 12,
          title: '这是另一个调用弹窗的元素'
      }
  },
  components: {
      hello
  },
  methods: {
      openModel: function(){
        //   调用组件内的弹窗
          this.$refs.chil.changeIsshow(this.title);
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
</style>



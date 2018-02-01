<template>
  <div class="app">
      <p 
      class="changeA"
      @click="changeA"
      >点击让父组件内的a累加</p>
      <h3>父组件传递过来的值是{{a}}</h3>
  </div>
</template>
<script>
export default {
  props: [
      'a'
      ],     // 子组件里面用props数组的形式来接受父组件传进来的数据
  data(){
      return {
          
      }
  },
  methods: {
      changeA: function(){
          console.log('触发改变')
          this.$emit('gaibianazhi',1000)
      }
  }
}
</script>
<style lang="less" scoped>
.changeA {
    cursor: pointer;
}
</style>



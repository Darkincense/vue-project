<template>
  <div class="app">
      <p>{{ title }}<span>{{a}}</span> </p>
  </div>
</template>
<script>
export default {
  props: [
      'title',
      'a'
      ],     // 子组件里面用props数组的形式来接受父组件传进来的数据
  data(){
      return {
          
      }
  }
}
</script>
<style lang="less" scoped>

</style>



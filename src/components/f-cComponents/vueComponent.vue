<style lang="less" scoped>

</style>
<template>
  <div class="app">
      <button @click="parentCall">点击操作子组件</button>
      <!-- 在子组件定义一下ref属性 -->
      <hello ref="chilll" />
  </div>
</template>
<script>
import hello from './childrenComponent'
export default {
  data(){
      return {
          title: '父组件内消息'
      }
  },
  components: {
      hello
  },
  methods: {
      parentCall: function(){
        //   父组件调用子组件内的方法，操作子组件内的数据
          this.$refs.chilll.changeIsshow(this.title)
      }
  }
}
</script>



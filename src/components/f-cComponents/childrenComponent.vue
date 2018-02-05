<style lang="less" scoped>

</style>
<template>
  <div class="children" >
    <span>子组件中</span>
     <input 
     type="text" 
     :value="test"
     @input="updateValue($event.target.value)"
     >
    <button @click="btnClick">点击</button>
    <p>{{ a }}</p>
  </div>
</template>
<script>
export default {
  props: ['test','a'],
  data(){
      return {
          
      }
  },
  watch: {
    // test: function(val,oldVal){
    //   console.log(val)
    //   this.$emit('changeValue',val)
    // },
  },
  methods: {
      updateValue: function(e){
        // console.log('哈哈',e)
       this.$emit('changeValue',e)
      },
      btnClick: function(){
       this.$emit('changebtn','你好')
      }
  }
}
</script>

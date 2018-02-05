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
          arr: [
            '<p><img src="1"></p>',
            '<p><img src="2"></p>',
            '<p><img src="3"></p>',
            '<p><img src="4"></p>',
            '<p><img src="5"></p>',
          ] 
      }
  },
  created: function(){
      // a = this.a;
      // props 父组件传过来的数据怎么在子组件的方法里用；
      // console.log('1',a)
      // console.log('2');
      this.arr.forEach(function(item,index){
        // console.log(item)
        console.log(item.match('<img'))
      })

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

<style lang="less" scoped>

</style>
<template>
  <div class="children" >
    <span>子组件中</span>
     <input 
     type="text" 
     v-model="currentTest"
     @input="updateValue($event.target.value)"
     >
    <button @click="btnClick">点击</button>
    <p>{{ a }}</p>
  </div>
</template>
<script>
export default {
  // props: ['test','a','abc'],
  props: {
    test: String,
    a: Number,
    abc: Object
  },
  data(){
      return {
          arr: [
            '<p><img src="1"/></p>',
            '<p><img src="2"/></p>',
            '<p><img src="3"/></p>',
            '<p><img src="4"/></p>',
            '<p><img src="5"/></p>',
          ] ,
          dollArr: [
            '2000000',
            '200万',
            '200万人民币',
            '2000万人民币',
            '20000',
            '100000',
            '2万',
            '10000000万人民币'
          ]
          // ‘200万元’
      }
  },
  computed: {
    fromFavalue: function(){
      return this.test.trim().toLowerCase();
    },
    currentTest: {
      get: function(){
        return this.test;
      },
      set: function(val){
        console.log('val',val)
        // this.$emit('input',val)
      }
    }
  },
  created: function(){
      this.ctrolArr();
      var arrLabel = [];
      // a = this.a;
      // props 父组件传过来的数据怎么在子组件的方法里用；
      // console.log('1',this.abc)
      // console.log('2');
      this.arr.forEach(function(item,index){
        // console.log(item)
        // console.log(item.match(/<img.*?(?:>|\/>)/)[0]);
        arrLabel.push(item.match(/<img.*?(?:>|\/>)/)[0])
      })
      // console.log(arrLabel)

  },
  watch: {
    a: function(val,oldVal){
      // 子组件内监听父组件传过来的值的变化
      // console.log('新值',val)
      // console.log('旧值',oldVal)
      // this.$emit('changeValue',val)
    },
  },
  methods: {
      ctrolArr: function(){
        this.dollArr.forEach(function(item,index){

          if(item.indexOf('万') == -1){
            // console.log(item.substr(0,item.length - 4) + '万元')
          }else{
            var jine = item.slice(0,item.indexOf('万'));
            // console.log(jine+'万元')
          }
        })
      },
      updateValue: function(e){
        // console.log('哈哈',e)
       this.$emit('changeValue',e)
      },
      btnClick: function(){
        this.$emit('changebtn','你好');
      },
      routerGo(){
				console.log(router);
				router.push({"path" : "/todo"});
			}
  }
}
</script>

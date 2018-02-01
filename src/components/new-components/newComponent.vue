<template>
    <!-- 每一个子组件模板应该被一个根元素包裹起来  -->
    <div class="new">
        <!-- <h3>下面是一个子组件循环出来的</h3> -->
        <appendNewComponent      
        v-bind:a="a"
        v-on:gaibianazhi="fuzujiangaibain"
        ></appendNewComponent>
    </div>
</template>
<script>
import appendNewComponent from './appendnewComponent.vue';

export default {
  data(){
      return {
        //   用v-bind子那个定义属性的方式给子组件传值
          a: 1,
          list: [
              {
                  title: '吃饭'
              },
              {
                  title: '睡觉'
              },
              {
                  title: '打豆豆'
              }
          ]
      }
  },
  components:{
      appendNewComponent
  },
  methods: {
      fuzujiangaibain: function(e){
        //   this.a = e;
        this.a ++;
        //   console.log('子组件传过来的参数',e)
      }
  },
  created: function(){

  }
}
</script>
<style lang="less" scoped>
@import '../../assets/new.less';
</style>



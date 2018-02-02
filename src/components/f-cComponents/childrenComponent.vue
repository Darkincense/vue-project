<style lang="less" scoped>
.children {
    .mask {
        position: fixed;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        background: #000;
        opacity: .4;
    }
    .model {
        position: fixed;
        left: 50%;
        top: 40%;
        transform: translateX(-50%) translateY(-50%);
        width: 30%;
        background: #fff;
        border-radius: 8px;
        padding: 10px 30px;
        h4 {
            line-height: 26px;
        }
        .content {
            padding: 10px 0;
        }
        button {
            width: 100px;
            height: 30px;
        }
    }
}
</style>
<template>
  <transition v-if="isShow">
    <div class="children" >
      <!-- <p v-if="isShow">hello</p> -->
      <p class="app2">子组件</p>
      <!-- 弹窗组件封装 -->
      <div class="mask" @click="closeModel"></div>
      <div class="model">
          <h4>{{ title }}</h4>
          <div class="content">
              {{ msg }}
          </div>
          <button @click="closeModel">关闭</button>
      </div>
  </div>
  </transition>
</template>
<script>
export default {
  data(){
      return {
          isShow: false,
          msg: '',
          title: '标题'
      }
  },
  methods: {
      chilFn:function (msg) {
　　　　  alert(msg)
　　   },
      changeIsshow: function (msg,till){
          this.isShow = !this.isShow;
        //   console.log($('.model h4'))
        //   $('.model').animate({'top':'40%'},500,'swing')
         this.msg = msg;
         if(till != '' && till != undefined){
             this.title = till;
         }
      },
      closeModel: function(){
          this.isShow = false;
      }
  }
}
</script>

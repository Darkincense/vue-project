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
  <div class="children" v-if="isShow">
      <!-- <p v-if="isShow">hello</p> -->
      <p class="app2">子组件</p>
      <!-- 弹窗组件封装 -->
      <div class="mask" @click="closeModel"></div>
      <div class="model">
          <h4>标题</h4>
          <div class="content">
              {{ msg }}
          </div>
          <button @click="closeModel">关闭</button>
      </div>
  </div>
</template>
<script>
export default {
  data(){
      return {
          isShow: false,
          msg: ''
      }
  },
  methods: {
      chilFn:function (msg) {
　　　　  alert(msg)
　　   },
      changeIsshow: function (msg){
         this.isShow = !this.isShow;
         this.msg = msg;
      },
      closeModel: function(){
          this.isShow = false;
      }
  }
}
</script>

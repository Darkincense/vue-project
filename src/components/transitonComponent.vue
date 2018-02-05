<style lang="less" scoped>
p,
button {
    margin-bottom: 10%;
}
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
.transition {
    width: 100%;
    height: 100%;
    overflow-x: hidden;
}
.image {
    position: relative;
    img {
        position: absolute;
        left: -900px;
        width: 300px;
    }
}
</style>
<template>
  <div class="transition">
      <button @click="openModel">点击打开弹窗组件</button>
      <button @click="changeIsshow">点击看看吧</button>
      <transition name="fade">
          <p :css="false" v-if="isShow">控制显示和隐藏</p>
      </transition>
      <button @click="animateImg">点击执行JQ动画</button>
      <p></p>
      <div class="image">
       <img src="../assets/images/transition.jpg" alt="雪景">          
      </div>
    <dialog-model 
    ref="dialog"
    @dialogopen="dakaitanchaung"
    @dialogclose="gaunbitanchaung">
      <div class="title" slot='heading'>标题</div>
      <!-- <div slot="content">内容</div> -->
    </dialog-model>
  </div>
</template>
<script type="text/ecmascript-6">
import DialogModel from '../../public/dialog.vue'
export default {
    data(){
        return {
            isShow: true,
            imgLeft: '-900px'
        }
    },
    components: {
        DialogModel
    },
    computed: {
        imgMeth: function(){
            
        }
    },
    methods: {
        // 打开弹窗自定义事件函数
        dakaitanchaung: function(){
            console.log('弹窗打开了')
        },
        // 关闭弹窗自定义事件函数
        gaunbitanchaung: function(){
            console.log('关闭弹窗')
        },
        // 打开弹窗
        openModel: function(){
            // 找到弹窗组件并打开
            this.$refs.dialog.open();
        },
        changeIsshow: function(){
            this.isShow = !this.isShow;
        },
        animateImg: function(){
            var imLEft = $('img').css('left');
            if(imLEft == '900px'){
                this.imgLeft = '-900px'
            }else{
                this.imgLeft = '900px'
            }
            console.log(this.imgLeft)
            $('img').animate({'left':this.imgLeft},1000,function(){
                // alert('运动完成')
            })
        }
    },
    created: function(){
        
    }
};
</script>



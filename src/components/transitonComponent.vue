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
      <button @click="changeIsshow">点击看看吧</button>
      <transition name="fade">
          <p :css="false" v-if="isShow">控制显示和隐藏</p>
      </transition>
      <button @click="animateImg">点击执行JQ动画</button>
      <p></p>
      <div class="image">
       <img src="../assets/images/transition.jpg" alt="雪景">          
      </div>
  </div>
</template>
<script>
export default {
    data(){
        return {
            isShow: true,
            imgLeft: '-900px'
        }
    },
    computed: {
        imgMeth: function(){
            
        }
    },
    methods: {
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



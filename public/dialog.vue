<style lang="less" scoped>
    .dialog-model {
        position: relative;
        display: none;
        width: 100%;
        .mask {
            position: fixed;
            left: 0;
            top: 0;
            right: 0;
            bottom: 0;
            background: #000;
            opacity: .4;
            z-index: 9;
        }
        .main-contain {
            position: fixed;
            width: 70%;
            top: 100%;
            left: 50%;
            transform: translateX(-50%) translateY(-50%);
            border-radius: 8px;
            text-align: center;
            background: #fff;
            z-index: 99;
            animation:mymove .3s cubic-bezier(0.27, 0.62, 0.63, 1.17) forwards; 
        }
        @keyframes mymove {
            from {
                top: 100%;
            }
            to {
                top: 40%;
            }
        }
    }
    .dialog-model.open {
        display: block;
    }
    .close {
        position: absolute;
        width: 22px;
        height: 22px;
        line-height: 19px;
        font-size: 22px;
        font-weight: 700;
        right: -11px;
        top: -11px;
        background: #fff;
        border-radius: 50%;
        cursor: pointer;
    }
    .foot .btn {
        float: right;
        width: 20%;
        border: 1px solid #999;
        border-radius: 6px;
        padding: 3px 2px;
        color: #fff;
        cursor: pointer;
    }
    .foot .ok_btn {
        background: linear-gradient(blue,red);
    }
    .foot .cancel {
        margin-right: 1%;
        background: linear-gradient(red,blue);
    }
    .content {
        min-height: 50px;
    }
</style>
<template>
    <div class="dialog-model"
        :class="{'open': is_Show}">
        <div class="mask" @click="close"></div>
        <div class="main-contain">
            <div class="heading">
                <!-- <slot name="heading">自带标题</slot> -->
                <h2>{{ heading }}</h2>
                <span class="close" @click="close">×</span>
            </div>
            <div class="content">
                <slot name="content">自带内容</slot>
            </div>
            <div class="foot">
                <p class="btn ok_btn" @click="close"><slot name="ok_btn">确定</slot></p>  
                <p class="btn cancel" @click="close"><slot name="cancel">取消</slot></p>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props: ['heading'],
    data() {
        return {
            is_Show: false
    };
  },
  methods: {
      open() {
          this.is_Show = true;
        this.$emit("dialogopen");
        console.log('props',)
    },
    close() {
        this.is_Show = false;
        this.$emit("dialogclose",this.heading);
    }
  }
};
</script>






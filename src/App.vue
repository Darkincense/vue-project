<style lang="less" scoped>
    .main-vue {
        width: 100%;
        height: 100%;
        text-align: center;
        ul {
            height: 30px;
            li {
                list-style: none;
                float: left;
                width: 17%;
                // border: 1px solid #000;
                margin-right: 2%;
                cursor: pointer;
                background: pink;   
            }
            .cur {
                    background: red;
                }
        }
        .content {
            // padding-top: 30px;
        }
        
    }
</style>

<template>
  <div class="main-vue">
      <ul>
        <router-link tag="li" v-for="(item,index) of routers" :key="index" @click.native="changeCUr($event)" :to="item.route">{{ item.name }}</router-link>
      </ul>
      <router-view class="content"></router-view>
  </div>
</template>
<script>
export default {
    data(){
        return {
            routers: [
                {
                    name: '百度',
                    route: '/baidu'
                },
                {
                    name: 'vue-todo',
                    route: '/todo'
                },
                {
                    name: '子组件操作父组件',
                    route: '/new'
                },
                {
                    name: 'vue过渡动画',
                    route: '/transition'
                },
                {
                    name: '父组件操作子组件',
                    route: '/vue'
                }
            ]
        }
    },
    methods: {
        changeCUr: function(e){
            // debugger;
            // ???????????未解决????????????????
            $(e.target).addClass('cur');
            
        }
    }
};
</script>



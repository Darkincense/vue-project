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
                background: #fff;
            } 
            .router-link-active {
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
      <ul v-if="openBook">
        <router-link 
        tag="li" 
        v-for="(item,index) of routers" 
        :key="index" 
        @click.native="changeCUr($event)" 
        :to="item.route"
        active-class="cur"
        exact
        >{{ item.name }}</router-link>
      </ul>
      <router-view class="content"></router-view>
  </div>
</template>
<script>
export default {
    data(){
        return {
            openBook: true,
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
                },
                {
                    name: '图书',
                    route: '/book'
                }
            ]
        }
    },
    methods: {
        changeCUr: function(e){
            console.log('e',$(e.target).text().indexOf('书') > -1)
            if($(e.target).text().indexOf('书') > -1){
                this.openBook = false;
            }else{
                this.openBook = true;
            }
            // 给路由标签添加点击事件
            // 路由切换时会给当前的路由标签的按钮添加一个 router-link-active 的class类名（去前提是给标签添加exact属性）
            // active-class 该属性是给当前的路由标签添加自定义属性，来控制样式
        }
    },
    created: function(){
        console.log('路由',this.$route.path)
        if(this.$route.path == '/book'){
            this.openBook = false;
        }else{
            this.openBook = true;
        }
    }
};
</script>



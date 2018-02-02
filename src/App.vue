<template>
  <div class="main-vue">
      <ul>
        <router-link tag="li" to="/baidu">百度</router-link>
        <router-link tag="li" to="/todo">vue-todo</router-link>
        <router-link tag="li" to="/new">到一个全新的页面</router-link>
        <router-link tag="li" to="/transition">vue过渡动画</router-link>
      </ul>
      <router-view class="content"></router-view>
  </div>
</template>
<script>
export default {
    
};
</script>
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
                width: 20%;
                // border: 1px solid #000;
                margin-right: 2%;
                cursor: pointer;
                background: pink;
            }
        }
        .content {
            // padding-top: 30px;
        }
        
    }
</style>


<template>
  <div class="main-vue">
      <router-link to="/baidu">Go to 百度</router-link>
      <router-link to="/todo">Go to todos</router-link>
      <router-view></router-view>
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
    }
</style>


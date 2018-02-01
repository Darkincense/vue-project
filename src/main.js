import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import App from './App.vue'
import baiduComponent from './components/baiduComponent.vue'
import todoComponent from './components/todoComponent.vue'
import newComponent from './components/new-components/newComponent.vue'


Vue.use(VueRouter)
// Vue.use(VueResource)

const router = new VueRouter({
  mode: 'history',    //history模式可以去掉路由中的#
  base: __dirname,
  routes: [
    {
      name: 'init',
      path: '/',    // 根目录下匹配todo组件
      component: todoComponent
    },
    {
      // 百度地图
      name: 'baidu',
      path: '/baidu',
      component: baiduComponent
    }, 
    {
      // vue-todo
      name: 'todo',
      path: '/todo',
      component: todoComponent
    },
    {
      // 新页面字符组件传值
      name: 'new',
      path: '/new',
      component: newComponent
    }
  ]
});

new Vue({
  el: '#app1',
  router,
  render: h => h(App)
})

// 路由切换的时候 路由是从哪来 到哪去
//一定要执行next()
// router.beforeEach((to, from, next) => {
//   console.log(to);
//   console.log(from);
//   next();
// })
// window.router = router;

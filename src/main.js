import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import Baidu from './components/baidu.vue'
import App from './components/App.vue'
import Main from './App.vue'


Vue.use(VueRouter)
// Vue.use(VueResource)

const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: [
    {
      name: 'baidu',
      path: '/baidu',
      component: Baidu,
    }, 
    {
      name: 'todo',
      path: '/todo',
      component: App
    }
  ]
});

new Vue({
  el: '#app1',
  router,
  render: h => h(Main)
})

// 路由切换的时候 路由是从哪来 到哪去
//一定要执行next()
// router.beforeEach((to, from, next) => {
//   console.log(to);
//   console.log(from);
//   next();
// })
// window.router = router;

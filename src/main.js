import Vue from 'vue'
import VueRouter from 'vue-router'
import Baidu from './components/baidu.vue'
import App from './components/App.vue'


Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: [
    {
    path: '/baidu',
    component: Baidu,
    }, 
    {
    path: '/app',
    component: App
    }
  ]
});


// new Vue({
//   router
// }).$mount('#app1')

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

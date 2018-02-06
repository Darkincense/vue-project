import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import * as custom from './common/filters/custom'

import App from './App.vue'
import baiduComponent from './components/baiduComponent.vue'
import todoComponent from './components/todoComponent.vue'
import newComponent from './components/new-components/newComponent.vue'
import transitonComponent from './components/transitonComponent.vue'
import vueComponent from './components/f-cComponents/vueComponent'

// 全局使用自定义过滤器
Object.keys(custom).forEach(key => {
  Vue.filter(key, custom[key])
})


Vue.use(VueRouter);
Vue.use(VueResource);

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
    },
    {
      // 新页面字符组件传值
      name: 'transition',
      path: '/transition',
      component: transitonComponent
    },
    ,
    {
      // 新页面字符组件传值
      name: 'vue',
      path: '/vue',
      component: vueComponent
    }
  ]
});

new Vue({
  el: '#app1',
  router,
  render: h => h(App)
})

// 路由切换的时候 路由是从哪来 到哪去
//一定要执行next() 不然路由点击不跳转
router.beforeEach((to, from, next) => {
  // console.log(to);
  // console.log(from);
  next();
})

// 添加下面这一句，可以让router变成一个全局的变量，可以在别的.vue 文件里怼路由进行操作；
window.router = router;

<template>
  <div id="app">
    <li><router-link to="/baidu">跳转</router-link></li>
    <h1 :style="{color: currentColor}">{{ title }}</h1>
    <h3>{{ reversedMessage }}</h3>
    <p v-html="msg" :style="{color: redColor}"></p>
    <p>{{ fullName }}</p>
    <input type="text" v-model="firstName" @keydown="changeName($event)">
    <!-- <button v-bind:disabled="fakse">这是一个段落标签</button> -->
    <p><input type="text" placeholder="添加todo事件" @keydown="addTodo($event)" v-model="todoSh"></p>
    <ul v-if="todos.length">
      <li 
      v-for="(item,index) of todos" 
      :key="index"
      :class="{checked: item.done}"
      @click="liClick($event)"
      :itemdone="item.done"
      :id="item.id"
      > 
        <label>{{index + 1}}.{{item.value}}</label>
        <!-- 过滤器 -->
        <time>{{item.created | date}}</time>
      </li>
    </ul>
    <p v-else>no todos</p>
    <!-- <zujian class="heihei"></zujian>
    <div v-if="Math.random() > 0.5">
      看得见的
    </div>
    <div v-else>
      看不见的
    </div> -->
    <!-- <h2>v-model.lazy</h2>
    <input type="text" v-model.lazy="input_lazy" /> -->
    <!-- <ol>
      <li v-for="(value,key,index) of msgInfo" :key="index">{{value}}</li>
    </ol>
    <p v-for="(n,index) in acrroNumber" :key="index">{{ n }}</p> -->
  </div>
</template>

<script>
import moment from 'moment';
import 'moment/locale/zh-cn';
moment.locale('zh-cn');
import Router from 'vue-router'


export default {
  name: 'app1',
  data () {
    return {
      numberArr:[2, 3, 4, 7, 9, 1],
      firstName: "Andy",
      lasteName: "Liu",
      input_lazy: "",
      fakse:true,
      msg: '<span>这是一条新消息</span>',
      todoSh: '',
      currentColor: 'red',
      title: '前端Vue-todo小案例',
      todos: [
        {
          id: 0,
          value: '阅读一本关于前端开发的书',
          done: true,
          created: Date.now()
        },
        {
          id: 1,
          value: '补充范例代码',
          done: true,
          created: Date.now()
        },
        {
          id: 2,
          value: '吃饭睡觉',
          done: false,
          created: Date.now()
        },
      ],
      msgInfo: {
        name: '小明',
        age: '20'
      }

    }
  },
  computed: {
    acrroNumber:function(){
      return this.numberArr.filter(function (number) {
              return number % 2 === 0
            })
    },
    redColor: function(){
      if(this.title == 'hello'){
        return 'red';
      }else{
        return 'blue';
      }
    },
     reversedMessage: function(){
      if(this.title == 'hello'){
        return 11111;
      }else{
        return 22222;
      }
    },
    fullName: {
      // getter
      get:function(){
        console.log('正在输入。。。。')
        return this.firstName + " " + this.lasteName;
      },
      // setter
      set: function (newValue) {
        console.log('监听调用')
        var names = newValue.split(' ')
        this.firstName = names[0]
        this.lastName = names[names.length - 1]
      }
    }
  },
  watch: {
    // 实时监听对象，key是要监听的数据，value是一个函数，参数包括监听数据改变前后的值；
    firstName: function(val,oldVal){
      console.log("val",val)
      console.log("oldVal",oldVal)
    }
  },
  methods: {
    // reversedMessage: function(){
    //   if(this.title == 'hello'){
    //     return 11111;
    //   }else{
    //     return 22222;
    //   }
    // },
    liClick: function(e){
      // console.log(e.currentTarget.getAttribute('itemdone'));
      // console.log(e.currentTarget.getAttribute('id'));
      for(var i = 0;i < this.todos.length; i++){
        if(e.currentTarget.getAttribute('id') == i){
          if(this.todos[i].done == true){
            this.todos[i].done = !this.todos[i].done;
          }else{
            this.todos[i].done = !this.todos[i].done;
          }
        }
      }

    },
    changeName: function(ev){
      if(ev.keyCode == 13){
        console.log('姓名',this.firstName);
      }
    },
    addTodo: function(ev){
      var obj = {
        id: this.todos.length,
        done: false,
        created: Date.now()
      }
      if(ev.keyCode == 13 && this.todoSh != ''){
        obj.value = this.todoSh;
        this.todos.push(obj);
        this.todoSh = '';
      }
    }
  },
  components: {
    'zujian': {
      template: '<div class="ahha">这是一个div组件</div>',
      props:['id']
    }
  },
  filters: {
    date(val){
      return moment(val).calendar();
    }
  },
  beforeCreate: function(){
    // console.log('创建前',this);
  },
  created: function(){
    // console.log('创建后',this);
  },
  beforeMount: function(){
    // console.log('上树前',this);
  },
  mounted: function(){
    // console.log('上树之后',this);
  },
  beforeUpdate: function(){
    // console.log('组件更新前');
  },
  updated: function(){
    // console.log('组件更新之后');
  },
  beforeDestroy: function(){
    // console.log('组件销毁前');
  },
  destroyed: function(){
    // console.log('组件销毁之后');
  }
}
</script>
<style lang="less">
  @import '../assets/todo.less';

</style>

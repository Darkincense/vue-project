<template>
    <!-- 每一个子组件模板应该被一个根元素包裹起来  -->
    <div class="new">
        <!-- <h3>下面是一个子组件循环出来的</h3> -->
        <appendNewComponent      
        :a="a"
        :c="c"
        v-on:gaibianazhi="fuzujiangaibain"
        ></appendNewComponent>
        <h3>{{ name | capitalize }}</h3>
        <button @click="getVipInfo">点击请求</button>
    </div>
</template>
<script>
import appendNewComponent from './appendnewComponent.vue';

export default {
  data(){
      return {
        //   用v-bind子那个定义属性的方式给子组件传值
          name: 'boy',
          c: 6,
          a: 1,
          list: [
              {
                  title: '吃饭'
              },
              {
                  title: '睡觉'
              },
              {
                  title: '打豆豆'
              }
          ]
      }
  },
  components:{
      appendNewComponent
  },
  methods: {
      fuzujiangaibain: function(e){
        //   this.a = e;
        this.a += e;
          console.log('子组件传过来的参数',e)
      },
      getVipInfo: function(){
            // 请求
            // return axios.post('https://haiyin.qc01.qcw100.com/rest/2.0/item/item/user_vip_set').then((res) => {
            //     console.log('海音vip请求数据',res);
            // })
      }
  },
  created: function(){
       function date(arr){
        var newArr = new Array();
        var result = [];
        var targetArr = [];
        for(var i = 0; i < arr.length; i++){
            var curVal = arr[i];
            newArr.push(curVal)  
        }

        for(var j = 0; j < newArr.length; j++){
            if((newArr[j] + 1) != newArr[j + 1]){
            result.push(newArr.slice(0,j + 1))
            }
        }
        for (let k = 0; k < result.length; k++) {
            if(k > 0){
            targetArr.push(result[k].slice(result[k - 1].length))
            }else{
            targetArr.push(result[0]);
            }
            
        }
        
        for(var m = 0;m < targetArr.length; m++){
            for(var n = 0; n < targetArr[m].length; n++){
            switch (targetArr[m][n]) {
                case 1:
                targetArr[m][n] = '周一'
                break;
                case 2:
                targetArr[m][n] = '周二'
                break;
                case 3:
                targetArr[m][n] = '周三'
                break;
                case 4:
                targetArr[m][n] = '周四'
                break;
                case 5:
                targetArr[m][n] = '周五'
                break;
                case 6:
                targetArr[m][n] = '周六'
                break;
                case 7:
                targetArr[m][n] = '周日'
                break;

            }
            }
            if (targetArr[m].length >= 2) {
            targetArr[m] = [targetArr[m][0], targetArr[m][targetArr[m].length - 1]].join('至');
            }
        }
        return targetArr.join(',');

    }

    var arr = [1,2, 3, 6, 7]
    var dataMsg = date(arr);
    console.log(dataMsg)

    
  }
}
</script>
<style lang="less" scoped>
@import '../../assets/new.less';
h3 {
    color: red;
}
</style>



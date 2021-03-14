<template>
<!-- 网页模板，编写html文件 -->
  <div>
    <!-- <button @click="add">add</button>
      <h1 :title="number">{{number}}</h1>
    <button @click="sub">sub</button> -->

    <!-- v-if="true":元素可见，false不可见(html调试中没有该元素，不渲染dom) -->
    <p v-if="!isLogin">请登录</p>
    <p v-if="isLogin">Welcome!</p>
    <!-- v-show="true":元素可见，false不可见(html中有此元素，渲染dom，但设置元素display属性为none)。 -->
    <button @click="toggleLogin" v-show="!isLogin">登录</button>
    <button @click="toggleLogin" v-show="isLogin">退出</button>
    <ul>
      <!-- v-for:显示列表 -->
      <li v-for="(fruit,index) of fruits" :key="index">
        {{index+1}}:{{fruit}}
      </li>
    </ul>
    <table>
      <thead>
        <th>序号</th>
        <th>姓名</th>
        <th>年龄</th>
      </thead>
      <tbody>
        <tr v-for="(v,i) of students" :key="i">
          <td>{{i+1}}</td>
          <td>{{v.name}}</td>
          <td>{{v.age}}</td>
        </tr>
      </tbody>
    </table>
    <!--组件注册3：最后在html中用<XXX></XXX>使用。 -->
    <Header></Header>
    <!-- 组件可以复用 -->
    <Header></Header>
    <!-- 父子组件传递2：父级向子级传递数据：使用属性传递,绑定父组件html中注册的子组件的msg属性为data中数据(可自定义属性名)传递给Child内部，之后再在子组件中操作 -->
    <!-- 子父组件传递3：绑定父组件html中注册的子组件的事件为自定义事件，事件名自定，如：@myevent="changeData"，事件回调为export default中methods的一个方法 -->
    <Child @myevent="changeData" :msg="message"></Child>
    <h1>{{childData}}</h1>
    <!-- 非父子级传递数据：建立一个额外的JavaScript文件(像全局变量的东西)，把变量，相关方法放这里，让非父子组件都可以访问，从而来管理非父子级数据 -->
    <Brother></Brother>
    <Sister></Sister>

    <!-- 购物车：结合3种传值的例子 -->
    <Cart></Cart>
    <Control></Control>

  </div>
</template>

<script>
// js代码

// 组件注册1：在js中用import XXX from "组件地址";
import Header from './components/Header'
// 组件间传递数据0：先注册组件
import Child from './components/Child'
import Brother from './components/Brother'
import Sister from './components/Sister'

// 购物车：结合3种传值的例子
import Cart from './components/Cart'
import Control from './components/Control'

export default {
  // 组件注册2：之后在export default中写components:{组件名:import的组件}，
  // 也可以写为components:{importt的组件:importt的组件}，
  // 即可以简写为components:{importt的组件}(ES6中属性名属性值相同时可以简写)
  components:{Header,Child,Cart,Brother,Sister,Control},
  data(){
    return{
      number:0,
      isLogin:false,
      fruits:["apple","orange","banana"],
      students:[
        {name:"小明",age:11},
        {name:"小红",age:22},
        {name:"小刚",age:33}
      ],
      // 父子组件传递1：在data中声明需要传递给子组件的数据
      message:"app.vue data",
      // 子父组件传递1:在data中声明需要保存收到的子组件数据的变量
      childData:"father data"
    }
  },
  methods:{
    add(){
      this.message++;
    },
    sub(){
      this.message--;
    },
    toggleLogin(){
      this.isLogin = !this.isLogin;
    },
    // 子父组件传递2:在methods中声明子组件需要绑定的回调函数，参数为子组件需要传数据的变量名
    changeData(childData){
      // console.log(childData);
      this.childData = childData;
    }
  }
}
</script>

<style>
/* css代码 */

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

<template>
<!-- 网页模板，编写html文件 -->
  <div>
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
    <!-- 父子组件传递2：父级向子级传递数据：使用属性传递,绑定父组件html中注册的子组件的msg属性为data中数据(可自定义属性名),或不绑定属性直接跟相应数据(如下text属性)，传递给Child内部，之后再在子组件中操作 -->
    <!-- 子父组件传递3：绑定父组件html中注册的子组件的事件为自定义事件，事件名自定，如：@myevent="changeData"，事件回调为export default中methods的一个方法 -->
    <Child @myevent="changeData" :msg="message" text="按钮"></Child>
    <h1>{{childData}}</h1>
    <!-- 非父子级传递数据：建立一个额外的JavaScript文件(像全局变量的东西)，把变量，相关方法放这里，让非父子组件都可以访问，从而来管理非父子级数据 -->
    <Brother></Brother>
    <Sister></Sister>

    <!-- 购物车：结合3种传值的例子 -->
    <Cart></Cart>
    <Control></Control>

    <!-- 计算属性及侦听器 -->
    <WatchAndComputed></WatchAndComputed>
    <!-- 用侦听器实现的购物车 -->
    <ComputedCart></ComputedCart>
    <!-- 生命周期函数应用(模拟ajax) -->
    <LifeCircle></LifeCircle>
    <!-- 插槽实现 -->
    <SlotDemo>Button
      <!-- 使用组件的时候可以用template的v-slot来绑定对应插槽的name来插入template中的内容 -->
      <template v-slot:header>
          <h1>header</h1>
      </template>
      <template v-slot:content>
          <h1>content</h1>
      </template>
      <template v-slot:footer>
          <h1>footer</h1>
      </template>
    </SlotDemo>
    <!-- 获取DOM -->
    <GetDOM></GetDOM>
    <!-- 过滤器 -->
    <FilterDemo></FilterDemo>
    <!-- 表单Demo -->
    <FormDemo></FormDemo>

  </div>
</template>

<script>
// js代码

// 组件注册1：在js中用import XXX from "组件地址";
import Header from './components/Header';
// 组件间传递数据0：先注册组件
import Child from './components/Child';
import Brother from './components/Brother';
import Sister from './components/Sister';

// 购物车：结合3种传值的例子
import Cart from './components/Cart';
import Control from './components/Control';

import WatchAndComputed from './components/WatchAndComputed';
import ComputedCart from './components/ComputedCart';
import LifeCircle from './components/LifeCircle';
import SlotDemo from './components/SlotDemo';
import GetDOM from './components/GetDOM';
import FilterDemo from './components/FilterDemo';
import FormDemo from './components/FormDemo';

import axios from "axios";

export default {
  // 组件注册2：之后在export default中写components:{组件名:import的组件}，
  // 也可以写为components:{importt的组件:importt的组件}，
  // 即可以简写为components:{importt的组件}(ES6中属性名属性值相同时可以简写)
  components:{Header,Child,Cart,Brother,Sister,Control,WatchAndComputed,ComputedCart,LifeCircle,SlotDemo,GetDOM,FilterDemo,FormDemo},
  data(){
    return{
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

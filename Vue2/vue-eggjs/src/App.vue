<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld :msg="message"/>
    <ul>
      <li v-for="(item,index) of fruitList" :key="index">
        {{item}}
        <button @click="del(index)">delete</button>
      </li>
    </ul>
    <form @submit="postData">
      <input type="text" v-model="fruit">
      <button>add</button>
    </form>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import axios from 'axios';

export default {
  name: 'App',
  components: {
    HelloWorld
  },
  data(){
    return {
      message:"Hello vue-eggjs",
      fruitList:[],
      fruit:""
    }
  },
  methods:{
    getData(){
      axios.get("http://127.0.0.1:7001/data")
      .then(res =>{
        this.message = res.data;
      });
      axios.get("http://127.0.0.1:7001/fruits")
      .then(res =>{
        this.fruitList = res.data;
      });
    },
    postData(){
      axios.post("http://127.0.0.1:7001/fruits",{fruit:this.fruit})
      .then(res=>{
        console.log(res.data);
        this.getData();
      })
    },
    del(index){
      axios.delete(`http://127.0.0.1:7001/fruits/${index}`)
      .then(()=>{
        this.getData();
      });
    }
  },
  created(){
    this.getData();
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
li{
  list-style-type: none;
}
</style>

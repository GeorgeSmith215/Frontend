<template>
  <div class="home">
    <h1>Home</h1>
    <button @click="getMessage">getMessage</button>
    <button @click="logout">Logout</button>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  data(){
    return {

    }
  },
  methods:{
    getMessage(){
      let token = localStorage.getItem('token');
      // axios如果是get请求,第二个参数可以设置请求头,post是第三个参数设置请求头
      // 在request headers里添加token
      axios.get("http://127.0.0.1:7001/jwtmessage",{headers:{token:token}})
      .then(res=>{
        console.log(res.data);
      })
    },
    logout(){
      localStorage.setItem("token","");
      location.reload();
    }
  }
}
</script>

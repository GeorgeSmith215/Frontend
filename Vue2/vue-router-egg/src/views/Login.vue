<template>
  <div class="login">
    <form @submit.prevent="doLogin">
      <input type="text" v-model="user.username">
      <input type="password" v-model="user.password">
      <button>login</button>
    </form>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  data(){
    return {
      user:{
        username:"",
        password:""
      }
    }
  },
  methods:{
    doLogin(){
      axios.post("http://127.0.0.1:7001/jwtlogin",{user:this.user})
      .then(res =>{
        if(res.data.code === 20000){
          localStorage.setItem("token",res.data.token);
          console.log(res.data.token);
          this.$router.push("/");
        }
      })
    }
  }
}
</script>
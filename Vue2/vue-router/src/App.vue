<template>
  <div id="app">
    <div id="nav">
      <!-- router-link相当于a标签,to相当于href属性 -->
      <router-link to="/">Home</router-link> |
      <router-link to="/blog">Blog</router-link> |
      <router-link to="/video">Video</router-link>||

      <span v-if="showUser">Welcome:{{username}} <button @click="logout">Logout</button></span>
    </div>
    <!-- 整体的内容是在router-view位置实现切换 -->
    <router-view/>
  </div>
</template>

<script>
export default {
  data(){
    return {
      username:localStorage.getItem('usr'),
      showUser:localStorage.getItem('usr')
    }
  },
  watch:{
    // 侦听路径，当路径变化时读取username
    '$route.path':function(){
      this.username = localStorage.getItem('usr');
      this.showUser = localStorage.getItem('usr');
    }
  },
  methods:{
    logout(){
      localStorage.clear();
      this.$router.push("/login");
    }
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
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>

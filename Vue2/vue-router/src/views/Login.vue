<template>
    <div>
        <form @submit.prevent="doLogin">
            <label for="username">username:</label>
            <input type="text" v-model="username" id="username">
            <br />
            <label for="username">password:</label>
            <input type="password" id="password">
            <br />
            <button>Login</button>
        </form>
    </div>
</template>

<script>
export default {
    data(){
        return {
            username:""
        }
    },
    methods:{
        doLogin(){
            console.log(this.username);
            // 本地存储
            localStorage.setItem("usr",this.username);
            // vue路由提供的编程式导航功能push方法可跳转到任意页面
            this.$router.push("/");
        }
    }
}
</script>
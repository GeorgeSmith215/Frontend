import axios from 'axios';
// axios有一个create方法，可以创建新的axios对象，可以进行相关配置，提取请求的公共部分
const request = axios.create({
    baseURL:process.env.VUE_APP_BASE_API
})
// 拦截器，可以拦截请求和响应，拦截请求用request
request.interceptors.request.use((req)=>{
    // 如果有token则每次请求都会携带token
    let token = localStorage.getItem("token");
    if(token){
        req.headers.token = token;
    }
    return req;
})
// 暴露出去
 export default request;

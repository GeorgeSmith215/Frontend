import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Blog from '../views/Blog.vue'
import Video from '../views/Video.vue'
import Login from '../views/Login.vue'

Vue.use(VueRouter)
// 定义整体路由跳转方式
const routes = [
  {
    // /跳转到Home
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path:'/blog',
    name:'Blog',
    component:Blog
  },
  {
    path:'/video',
    name:'Video',
    component:Video
  },
  {
    path:'/login',
    name:'Login',
    component:Login
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

// 导航守卫,to:访问的目标，from： 当前导航正要离开的路由对象，next：继续访问
router.beforeEach((to,from,next)=>{
  if(to.path != "/login"){
    if(localStorage.getItem("usr")){
      next();
    }else {
      next("/login");
    }
  }else{
    next();
  }
})

export default router

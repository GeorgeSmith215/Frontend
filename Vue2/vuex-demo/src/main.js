import Vue from 'vue'
import App from './App.vue'
import router from './router'

// 引入store，将store变成一个 全局的仓库
// 有引入，在store中就要有输出export
import store from '@/store'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

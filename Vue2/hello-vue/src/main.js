// import是ES2015模块语法，可以引入第三方模块，类似后台的require。
// export也是ES2015模块语法，可以暴露接口，被其他模块调用，类似于后台的module.exports
import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  // 相当于：
  // render(createElement){
  //   return createElement(App);
  // }
}).$mount('#app')

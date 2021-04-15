// 在store中的index.js这份文件，就是用来做状态管理的
import Vue from 'vue';
import Vuex from 'vuex';

// 引入拆分的state
import state from "./state";
// 引入users子模块
import users from './users/index'
// 引入mutations_type
import mutations_type from './mutations_type'

Vue.use(Vuex);

export default new Vuex.Store({
    // state相当于组件中的data（但不是函数），专门用来存放全局的数据
    // state可以拆分到单独的state.js中，import后可以直接使用
    // getters、mutations、actions也都可以拆分到单独js文件中
    state,
    // getters相当于组件中的computed，
    // getters是全局的，computed是组件内部使用的
    getters:{
        getNum(state){
            return state.num
        }
    },
    // mutattions相当于组件中的methods，
    // 但是它不能使用异步方法(定时器，axios)
    mutations:{
        // 让num累加
        // payload是一个形参(传递多个参数时可用对象形式传递),
        // 如果组件在commit时，有传参数过来，就存在，否则就是undefined
        increase(state,payload){
            state.num += payload ? payload : 1;
        },
        //让num累减 
        decrease(state,payload){
            state.num -= payload ? payload : 1;
        }
    },
    mutations_type,
    // actions专门用来处理异步，
    // 实际修改状态值的依然是mutations
    actions:{
        // 点击了“sub”按钮后，放慢1秒再执行减法
        decreaseAsync(context,payload){
            setTimeout(()=>{
                context.commit('decrease',payload)
            },1000)
        }
    },
    // 主模块
    modules:{
        users
    }
})
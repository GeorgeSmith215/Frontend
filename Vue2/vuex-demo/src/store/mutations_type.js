export const MUTATIONS_TYPE = {
    INCREASE:'increase',
    DECREASE:'decrease'
}

export default{
    // 让num累加
        // payload是一个形参，如果组件在commit时，
        // 有传参数过来，就存在，否则就是undefined
        increase(state,payload){
            state.num += payload ? payload : 1;
        },
        //让num累减 
        decrease(state,payload){
            state.num -= payload ? payload : 1;
        }
}
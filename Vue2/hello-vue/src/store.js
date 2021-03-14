export default{
    // 公共数据比较规范的写法是叫：state(状态)。
    state:{
        message:"Hello Vue"
    },
    // 通过公共文件里的方法来修改数据。
    setStateMessage(str){
        this.state.message = str;
    }
}
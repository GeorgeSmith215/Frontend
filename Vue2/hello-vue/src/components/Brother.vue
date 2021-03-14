<template>
    <div class="brother">
        <h1>Brother</h1>
        <button @click="changeData">Change Data</button>
        <p>{{state.message}}</p>
    </div>
</template>

<script>
// 引入外部公共文件
import Store from '../store'

export default({
    // 引入的JavaScript文件不需要在components中进行注册。
    data() {
        return {
            state:Store.state
        }
    },
    methods:{
        changeData(){
            Store.setStateMessage("brother Data")
        }
    }
})
</script>

<style scoped>
.brother{
    border: red solid 2px;
}
</style>
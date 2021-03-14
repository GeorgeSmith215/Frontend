<template>
    <div class="sister">
        <h1>Sister</h1>
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
})
</script>

<style scoped>
.sister{
    border:red solid 2px;
}
</style>
<template>
    <div class="child">
        I'm child
        <!-- 父子组件传递4：最后在子组件的html中绑定父组件传来的属性名(在props中的) -->
        <h1>{{msg}}</h1>
        <!-- 子父组件传递6：最后在html中写触发子组件向父组件传递数据的事件 -->
        <button @click="sendData">传递数据</button>
    </div>
</template>

<script>
export default {
    // 父子组件传递3：子组件中写props,props是"属性的属性"里面是一个字符串数组，字符串中写父组件传过来的属性名
    props:["msg"],
    data(){
        return {
            // 子父组件传递4：子组件在export default中的data中声明需要传递的数据
            childData:"child data"
        }
    },
    methods:{
        // 子父组件传递5：在methods中声明传递数据的方法，方法体中要用this.$emit方法，如：this.$emit("myevent",this.childData)，其中第一参数为父组件中绑定的事件名，第二参数为子组件中的需要传递数据的变量名。
        sendData(){
            this.$emit("myevent",this.childData)
        }
    }
}
</script>

<style scoped>
.child {
    border: red solid 2px;
}
</style>
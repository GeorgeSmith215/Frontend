<template>
    <div>
        <h1 id="box" ref="boxRef">I'm a box</h1>

    </div>
</template>

<script>
export default {
    mounted(){
        // 原生JS获取真实DOM节点
        let box = document.querySelector("#box");
        let style = window.getComputedStyle(box);
        console.log(style.height);
        // Vue提供的通过ref获取真实DOM节点方式
        let boxRef = this.$refs.boxRef;
        let boxRefStyle = window.getComputedStyle(boxRef);
        console.log(boxRefStyle.height);
    }
}
</script>

<style scoped>
#box{
    border: red solid 2px;
}
</style>
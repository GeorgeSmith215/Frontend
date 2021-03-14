<template>
    <span>
        <button @click="sub">-</button>
        <span>{{amount}}</span>
        <button @click="add">+</button>
    </span>
</template>

<script>
export default {
    props:["amount","index"],
    methods:{
        sub(){
            this.$emit("sub",this.index);
        },
        add(){
            this.$emit("add",this.index);
        }
    }
}
</script>
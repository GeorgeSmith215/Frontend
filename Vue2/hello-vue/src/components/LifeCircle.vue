<template>
    <div>
        <h1>Fruits</h1>
        <p v-if="loading">loading...</p>
        <ul v-if="!loading">
            <li v-for="(v,i) of fruits" :key="i">
                {{v}}
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    data(){
        return {
            fruits:[],
            loading:true
        }
    },
    methods:{
        getData(){
            // 模拟Ajax获取数据
            setTimeout(()=>{
                this.fruits=["apple","banana","orange"];
                this.loading = false;
            },2000)
        }
    },
    created(){
        this.getData();
    }
}
</script>
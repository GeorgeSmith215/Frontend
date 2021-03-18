<template>
    <div>
        <form @submit.prevent="postData">
            <input type="text" v-model="fruit">
            <button>Add</button>
        </form>
        <ul>
            <li v-for="item,index of fruitList" :key="index">
                {{item}}
                <!-- 根据索引删除元素 -->
                <button @click="del(index)">Delete</button>
            </li>
        </ul>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    data(){
        return {
            fruit:"",
            fruitList:[]
        }
    },
    methods:{
        // 获取数据
        getFruitList(){
            axios.get("http://127.0.0.1:3000/fruits").then(res=>{
                this.fruitList = res.data;
            })
        },
        // 添加数据
        postData(){
            axios.post("http://127.0.0.1:3000/fruits",{
                fruit:this.fruit
            }).then(()=>{
                this.getFruitList();
            })
        },
        // 删除数据
        del(index){
            axios.delete(`http://127.0.0.1:3000/fruits/${index}`)
            .then(()=>{
                this.getFruitList();
            })
        }
    },
    created(){
        // 一个功能写一个方法，显得更加整洁。
        this.getFruitList();
    }
}
</script>
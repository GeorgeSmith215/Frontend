<template>
    <div>
        ComputedCart
        <ul>
            <li v-for="(v,i) of fruits" :key="i">
                {{v.name}}
                单价：{{v.price}}
                <!-- 可以给回调函数传值(此处传入index获取按钮对应index) -->
                <button @click="sub(i)">-</button>
                {{v.quantity}}
                <button @click="add(i)">+</button>
            </li>
        </ul>
        <p>总价为:{{totalPriceComputed}}</p>
        <button @click="reset">清空购物车</button>
    </div>
</template>

<script>
export default {
    data(){
        return {
            fruits:[
                {name:"apple",price:3,quantity:0},
                {name:"orange",price:2,quantity:0},
                {name:"banana",price:1,quantity:0}
            ]
        }
    },
    computed:{
        totalPriceComputed(){
            let totalPrice = 0;
            this.fruits.forEach(e => {
                totalPrice += e.quantity*e.price;
            });
            return totalPrice;
        }
    },
    methods:{
        sub(i){
            if(this.fruits[i].quantity>0){
                this.fruits[i].quantity--;
            }
        },
        add(i){
            this.fruits[i].quantity++;
        },
        reset(){
            this.fruits.forEach(e => {
                e.quantity=0;
            });
        }
    }
}
</script>
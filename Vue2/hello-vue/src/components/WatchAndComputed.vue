<template>
    <div class="WatchAndComputed">
        <h1>计算属性和侦听器</h1>
        <p>{{title}}</p>
        <p>{{message}}</p>
        <p>购物车</p>
        <p>单价:{{price}}</p>
        <p>数量:<button @click="sub">-</button>
        {{quantity}}
        <button @click="add">+</button>
        </p>
        <p>折扣:{{discount}}</p>
        <p>总价Computed:{{totalPriceComputed}}</p>
        <p>总价Watch:{{totalPriceWatch}}</p>
    </div>
</template>

<script>
export default {
    data(){
        return {
            title:"hello Vue",
            price:1000,
            quantity:0,
            discount:0.5,
            totalPriceWatch:0
        }
    },
    // data属性和computed属性定义的值都可以直接绑定在表达式中，
    // 如果某些值需要通过计算才能得到，那使用计算属性就再合适不过了，
    // 只要计算属性的相关值改变了，计算属性就会自动变
    computed:{
        message(){
            return "hello computed";
        },
        totalPriceComputed(){
            return this.price*this.quantity*this.discount;
        }
    },
    // watch属性后跟一个对象，对象中可以写方法，
    // 方法名是需要侦听的data方法返回对象中的变量的变量名，
    // 每一次相关变量值变化了，则会调用watch中的方法，
    // watch中的方法可以传入一个参数，参数值是变量改变后的值。
    watch:{
        quantity(val){
            this.totalPriceWatch = this.price*val*this.discount;
        }
    },
    methods:{
        add(){
            this.quantity++;
        },
        sub(){
            if(this.quantity>0){
                this.quantity--;
            }
        }
    }
}
</script>

<style scoped>
.WatchAndComputed{
    border: red solid 2px;
}
</style>
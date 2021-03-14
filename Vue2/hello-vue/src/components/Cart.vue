<template>
    <div>
        <h1>Shopping Cart</h1>
        <ul>
            <li v-for="(v,i) of fruits" :key="i">
                {{v.name}}
                price:{{v.price}}
                <Counter
                    :amount="v.amount"
                    :index="i"
                    @add="add"
                    @sub="sub"
                ></Counter>
            </li>
        </ul>
        <h1>总价为:{{State.totalPrice}}</h1>
    </div>
</template>

<script>
import Counter from './Counter';

import Control from '../control';

export default {
    components:{Counter},
    data(){
        return {
                fruits:Control.state.fruits,
                State:Control.state
            }
        },
        methods:{
        add(index){
            Control.state.fruits[index].amount++;
            Control.setTotalPrice(Control.getTotalPrice()+this.fruits[index].price);
        },
        sub(index){
            if(Control.state.fruits[index].amount>0){
                Control.state.fruits[index].amount--;
                Control.setTotalPrice(Control.getTotalPrice()-this.fruits[index].price);
            }
        }
    }
}
</script>
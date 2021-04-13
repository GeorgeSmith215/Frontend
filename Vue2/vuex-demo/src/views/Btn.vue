<template>
    <div>
        <!-- 不推荐直接更改store中的状态，更改 Vuex 的 store 中的状态的唯一方法是提交 mutation。 -->
        <!-- <button @click="$store.state.num++">add1</button> -->
        <!-- <button @click="$store.commit('increase',2)">add</button>
        <button @click="$store.dispatch('decreaseAsync',2)">sub</button> -->
        <!-- 运用了mapMutations和mapActions后 -->
        <button @click="increase(2)">add</button>
        <button @click="decreaseAsync()">sub</button>
        <li>{{$store.state.users.nickname}}</li>
        <button @click="changeNickname()">改明</button>
    </div>
</template>

<script>
import { mapMutations,mapActions } from 'vuex'
export default {
    data(){
        return{

        }
    },
    methods:{
        // addFn(){
        //     // 使用commit来调用store中的mutations里的increase方法
        //     // 传参的话，使用payload(在mutations的方法里定义的形参)
        //     this.$store.commit('increase',2)
        // }
        // subFn(){
        //     // 使用dispatch来调用store中的actions里的decreaseAsync方法
        //     // 传参的话，使用payload(在mutations和actions的方法里定义的形参)
        //     this.$store.dispatch('decreaseAsync',2)
        // }
        ...mapMutations(['increase']),
        ...mapActions(['decreaseAsync']),
        ...mapMutations({
            'changeNickname' : 'users/changeNickname'
        })
    }
}
</script>
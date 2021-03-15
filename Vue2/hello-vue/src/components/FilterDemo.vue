<template>
    <div>
        <h1>{{message | split}}</h1>
        <h1>{{date | dateFormate}}</h1>
        <!-- 过滤器还可以复用 -->
        <h1>{{date1 | dateFormate}}</h1>
    </div>
</template>

<script>
export default {
    data(){
        return {
            message:"hello",
            date:"2021-4-1",
            date1:"2020-11-11"
        }
    },
    filters:{
        split(str){
            return str.split("").join();
        },
        dateFormate(value){
            let date = new Date(value);
            let year = date.getFullYear();
            // 1月是0所以要加1
            let month = date.getMonth()+1;
            let d = date.getDate();
            // 用ES6新加的模板字符串`${XXX}`给字符串加参数，相当于字符串连接的效果
            return `${year}年${month}月${d}日`;
        }
    }
}
</script>
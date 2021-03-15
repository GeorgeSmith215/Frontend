<template>
    <div class="FormDemo">
        <!-- Vue中不用表单的action而是用ajax实现表单的提交(用事件来触发) -->
        <!-- .prevent是事件修饰符，可以取消表单提交的默认行为 -->
        <form @submit.prevent="postData">
            <div>
                <label for="username">用户名:</label>
                <input id="username" type="text" v-model="formData.username">
            </div>
            <div>
                <label for="password">密码:</label>
                <input id="password" type="password" v-model="formData.password">
            </div>
            <div>
                <label for="hobby">爱好：</label>
                <!-- option中的value才是select的v-model绑定的值 -->
                <select name="hobby" id="hobby" v-model="formData.hobby">
                    <option value="soccer">足球</option>
                    <option value="basketball">篮球</option>
                </select>
            </div>
            <div>
                <label for="">性别：</label>
                <label for="male">男</label>
                <!-- radio中v-model只能写同一个属性值，不然会认为是不同选项，都可以被选择 -->
                <input type="radio" name="" value="male" v-model="formData.gender" id="male">
                <label for="female">女</label>
                <input type="radio" name="" value="female" v-model="formData.gender" id="female">
            </div>
            <div>
                <label for="">技能：</label>
                <label for="frontend">前端</label>
                <input id="frontend" type="checkbox" value="frontend" v-model="formData.skill">
                <label for="backend">后端</label>
                <input id="backend" type="checkbox" value="backend" v-model="formData.skill">
            </div>
            <button>Submit</button>
        </form>
    </div>
</template>

<script>
export default {
    data(){
        return {
            formData:{
                username:"",
                password:"",
                hobby:"",
                gender:"",
                // 因为技能是多选框，所以要是一个数组
                skill:[]
            }
            
        }
    },
    methods:{
        postData(){
            console.log(this.formData);
        }
    }
}
</script>

<style scoped>
.FormDemo{
    border: red solid 2px;
}
</style>
<template>
  <div class="register">
    <h1>Register</h1>
    <el-form
      :model="userForm"
      status-icon
      :rules="rules"
      ref="userForm"
      label-width="100px"
      class="demo-userForm"
      width="50%"
    >
      <el-form-item label="用户名" prop="username">
        <el-input v-model="userForm.username"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="pass">
        <el-input
          type="password"
          v-model="userForm.pass"
          autocomplete="off"
        ></el-input>
      </el-form-item>
      <el-form-item label="确认密码" prop="checkPass">
        <el-input
          type="password"
          v-model="userForm.checkPass"
          autocomplete="off"
        ></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="openLogin">登录</el-button>
        <el-button @click="resetForm('userForm')">重置</el-button>
        <el-button type="primary" @click="submitForm('userForm')"
          >注册</el-button
        >
      </el-form-item>
    </el-form>

    <!-- <form @submit.prevent="register">
      <input type="text" v-model="username" />
      <input type="password" v-model="password" />
      <button>register</button>
    </form>
    <form @submit.prevent="register">
      <input type="text" v-model="regname" />
      <input type="password" v-model="regpsw" />
      <button>Register</button>
    </form> -->
  </div>
</template>

<script>
import requerst from "../utils/request";
export default {
  data() {
    var validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      } else {
        if (this.userForm.checkPass !== "") {
          this.$refs.userForm.validateField("checkPass");
        }
        callback();
      }
    };
    var validatePass2 = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请再次输入密码"));
      } else if (value !== this.userForm.pass) {
        callback(new Error("两次输入密码不一致!"));
      } else {
        callback();
      }
    };
    return {
      userForm: {
        username: "",
        pass: "",
        checkPass: "",
      },
      rules: {
        username: [
          { required: true, message: "请输入用户名", trigger: "blur" },
          {
            min: 5,
            max: 10,
            message: "长度在 5 到 10 个字符",
            trigger: "blur",
          },
        ],
        pass: [
          { required: true, validator: validatePass, trigger: "blur" },
          {
            min: 5,
            max: 10,
            message: "长度在 5 到 10 个字符",
            trigger: "blur",
          },
        ],
        checkPass: [
          { required: true, validator: validatePass2, trigger: "blur" },
          {
            min: 5,
            max: 10,
            message: "长度在 5 到 10 个字符",
            trigger: "blur",
          },
        ],
      },
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.register();
        } else {
          console.log("error submit!!");
          this.$message.error("注册失败");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
    register() {
      requerst
        .post(`/register`, {
          username: this.userForm.username,
          password: this.userForm.pass,
        })
        .then((res) => {
          if (res.data.code === 20000) {
            this.$message({
              message: "注册成功",
              type: "success",
            });
            this.$router.push("/login");
          }else{
              this.$message.error(res.data.msg);
            //   console.log(res.data.msg);
          }
        })
        .catch((e) => {
          this.$message.error('注册失败');
          console.log(e);
        });
    },
    openLogin() {
      this.$router.push("/login");
    },
  },
};
</script>

<style scoped>
.register {
  width: 400px;
  position: absolute;
  left: 50%;
  margin-left: -200px;
}
</style>
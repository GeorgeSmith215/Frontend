<template>
  <div id="app">
    <el-table :data="studentList" style="width: 100%" max-height="300">
      <el-table-column prop="id" label="id" width="200"> </el-table-column>
      <el-table-column prop="name" label="姓名" width="200"> </el-table-column>
      <el-table-column prop="age" label="年龄" width="200"> </el-table-column>
      <el-table-column fixed="right" label="操作" width="150">
        <template slot-scope="scope">
          <el-button
            @click.native.prevent="deleteRow(scope.row.id)"
            type="text"
            size="small"
          >
            删除
          </el-button>
        </template>
      </el-table-column>
    </el-table>

    <el-button type="text" @click="dialogVisible = true">添加学生</el-button>
    <el-dialog title="请输入学生信息" :visible.sync="dialogVisible" width="30%">
      <el-form ref="form" :model="form" label-width="80px">
        <el-form-item label="id">
          <el-input v-model="form.id"></el-input>
        </el-form-item>
        <el-form-item label="姓名">
          <el-input v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="年龄">
          <el-input v-model="form.age"></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="onSubmit"
          >确 定</el-button
        >
      </span>
    </el-dialog>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "App",
  methods: {
    onSubmit(){
      axios.post(`${process.env.VUE_APP_BASE_URL}/students`,{
        student:this.form
      }).then(()=>{
        this.getStudentList();
        this.dialogVisible = false;
      })
    },
    deleteRow(id) {
      // console.log(id);
      // axios.delete(`${process.env.VUE_APP_BASE_URL}/students/${id}`).then(() => {
      //   // console.log(res);
      //   this.getStudentList();
      // });

      this.$confirm("此操作将永久删除该文件, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      })
        .then(() => {
          axios.delete(`${process.env.VUE_APP_BASE_URL}/students/${id}`).then(() => {
            this.$message({
              type: "success",
              message: "删除成功!",
            });
            this.getStudentList();
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除",
          });
        });
    },
    getStudentList() {
      axios.get(`${process.env.VUE_APP_BASE_URL}/students`).then((res) => {
        this.studentList = res.data;
        // console.log(res.data);
      });
    },
  },
  data() {
    return {
      studentList: [],
      dialogVisible: false,
      form:{
        id:"",
        name:"",
        age:""
      }
    };
  },
  created() {
    this.getStudentList();
  },
};
</script>
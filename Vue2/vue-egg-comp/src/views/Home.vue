<template>
  <div class="home">
    <el-button type="plain" @click="logout">注销</el-button>

    <el-button type="primary" @click="dialogVisible = true">添加学生</el-button>
    <el-dialog title="请输入学生信息" :visible.sync="dialogVisible" width="30%">
      <el-form ref="form" :model="form" label-width="80px">
        <el-form-item label="姓名">
          <el-input v-model="form.studentname"></el-input>
        </el-form-item>
        <el-form-item label="性别">
          <el-input v-model="form.sex"></el-input>
        </el-form-item>
        <el-form-item label="年龄">
          <el-input v-model="form.age"></el-input>
        </el-form-item>
        <el-form-item label="班级">
          <el-input v-model="form.clazz"></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="onSubmit">确 定</el-button>
      </span>
    </el-dialog>

    <el-dialog title="请编辑学生信息" :visible.sync="editVisible" width="30%">
      <el-form ref="form" :model="form" label-width="80px">
        <el-form-item label="姓名">
          <el-input v-model="formEdit.studentname"></el-input>
        </el-form-item>
        <el-form-item label="性别">
          <el-input v-model="formEdit.sex"></el-input>
        </el-form-item>
        <el-form-item label="年龄">
          <el-input v-model="formEdit.age"></el-input>
        </el-form-item>
        <el-form-item label="班级">
          <el-input v-model="formEdit.clazz"></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="editVisible = false">取 消</el-button>
        <el-button type="primary" @click="onEdit()">确 定</el-button>
      </span>
    </el-dialog>

    <el-table :data="studentList" style="width: 100%" max-height="300">
      <el-table-column prop="id" label="id" width="100"> </el-table-column>
      <el-table-column prop="studentname" label="姓名" width="100">
      </el-table-column>
      <el-table-column prop="sex" label="性别" width="100"> </el-table-column>
      <el-table-column prop="age" label="年龄" width="100"> </el-table-column>
      <el-table-column prop="clazz" label="班级" width="100"> </el-table-column>
      <el-table-column fixed="right" label="操作" width="150">
        <template slot-scope="scope">
          <el-button
            @click="edit(scope.row)"
            type="text"
            size="small"
            icon="el-icon-edit"
          >
            编辑
          </el-button>

          <el-button
            @click.native.prevent="deleteRow(scope.row.id)"
            type="text"
            size="small"
            icon="el-icon-delete"
          >
            删除
          </el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
// utils文件夹request.js中的create方法创建的request和axios的语法完全一样
import request from "../utils/request";
export default {
  data() {
    return {
      msg: "",
      studentList: [],
      dialogVisible: false,
      editVisible: false,
      nowEditId: "",
      form: {
        id: "",
        studentname: "",
        sex: "",
        age: "",
        clazz: "",
      },
      formEdit: {
        id:"",
        studentname: "",
        sex: "",
        age: "",
        clazz: "",
      },
    };
  },
  methods: {
    logout() {
      localStorage.setItem("token", "");
      location.reload();
    },
    onSubmit() {
      // console.log(this.form);
      request
        .post(`/`, {
          student: this.form,
        })
        .then((res) => {
          if (res.data.code === 20000) {
            this.getStudentList();
            this.dialogVisible = false;
            this.$message({
            message: "添加成功",
            type: "success",
          });
          } else {
            this.$message.error(res.data.msg);
            console.log(res);
          }
        });
    },
    deleteRow(id) {
      // console.log(id);
      // requerst.delete(`${process.env.VUE_APP_BASE_URL}/students/${id}`).then(() => {
      //   // console.log(res);
      //   this.getStudentList();
      // });

      this.$confirm("此操作将永久删除该文件, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      })
        .then(() => {
          request.delete(`/${id}`).then(() => {
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
      request.get(`/`).then((res) => {
        this.studentList = res.data.data;
        // console.log(res.data);
      });
    },
    onEdit() {
      // console.log(this.formEdit);
      request
        .put(`/${this.nowEditId}`, {
          student: this.formEdit,
        })
        .then((res) => {
          if (res.data.code === 20000) {
            this.getStudentList();
            this.editVisible = false;
            this.$message({
            message: "修改成功",
            type: "success",
          });
          } else {
            this.$message.error(res.data.msg);
            console.log(res);
          }
        });
    },
    edit(row) {
      // console.log(row);
      this.nowEditId = row.id;
      this.formEdit.studentname = row.studentname;
      this.formEdit.sex = row.sex;
      this.formEdit.age = row.age;
      this.formEdit.clazz = row.clazz;
      this.editVisible = true;
    },
  },
  created() {
    this.getStudentList();
  },
};
</script>

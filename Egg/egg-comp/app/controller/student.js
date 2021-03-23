const Controller = require("egg").Controller;

class StudentController extends Controller{
    async index(){
        // 在使用了service后controller变得更简洁了，不再操作数据库，也不再关心业务逻辑，主要就是关心用户的输入和响应的返回的相应逻辑
        let list = await this.ctx.service.student.getStudentList();
        if(list){
            this.ctx.body = {
                code:20000,
                data:list
            }
        }else{
            this.ctx.body = {
                code:50000,
                msg:"server error!"
            }
        }
    }

    async create(){
        let studentname = this.ctx.request.body.student.studentname;
        let sex = this.ctx.request.body.student.sex;
        let age = this.ctx.request.body.student.age;
        let clazz = this.ctx.request.body.student.clazz;
        let result = await this.ctx.service.student.createStudent(studentname,sex,age,clazz);
        if(result){
            this.ctx.body = {
                code:20000,
                msg:"添加成功"
            };
        }else{
            this.ctx.body = {
                code:50000,
                msg:"添加失败"
            }
        }
    }

    async update(){
        let student_id = this.ctx.params.id;
        let studentname = this.ctx.request.body.student.studentname;
        let sex = this.ctx.request.body.student.sex;
        let age = this.ctx.request.body.student.age;
        let clazz = this.ctx.request.body.student.clazz;
        let result = await this.ctx.service.student.editStudent(student_id,studentname,sex,age,clazz);
        // console.log(student_id);
        // console.log(studentname);
        // console.log(sex);
        // console.log(age);
        // console.log(clazz);
        if(result){
            this.ctx.body = {
                code:20000,
                msg:"修改成功"
            };
        }else{
            this.ctx.body = {
                code:50000,
                msg:"修改失败"
            }
        }
    }

    async destroy(){
        let student_id = this.ctx.params.id;
        await this.app.model.Student.destroy({where:{
            id:student_id
        }});
        this.ctx.body = "删除成功";
    }
}

module.exports = StudentController;
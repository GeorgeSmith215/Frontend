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
        let name = this.ctx.request.body.name;
        let achievement = this.ctx.request.body.achievement;
        let clazz_id = this.ctx.request.body.clazz_id;
        let result = await this.ctx.service.student.createStudent(name,achievement,clazz_id);
        if(result){
            this.ctx.body = "添加成功";
        }else{
            this.ctx.body = "添加失败";
        }
    }

    async update(){
        let student_id = this.ctx.params.id;
        let name = this.ctx.request.body.name;
        let achievement = this.ctx.request.body.achievement;
        let clazz_id = this.ctx.request.body.clazz_id;
        await this.app.model.Student.update({
            name:name,
            achievement:achievement,
            clazz_id:clazz_id
        },{where:{
            id:student_id
        }});
        this.ctx.body = "更新成功";
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
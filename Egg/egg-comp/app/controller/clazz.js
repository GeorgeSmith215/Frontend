const Controller = require("egg").Controller;

class ClazzController extends Controller{
    // restful接口
    // 不做任何异常处理

    // 班级，学生：一对多关系，一个班级有多个学生，一个学生有一个班级。通过主外键关系实现
    async index(){
        let clazzList = await this.app.model.Clazz.findAll();
        this.ctx.body = clazzList;
    }

    async show(){
        let id = this.ctx.params.id;
        let clazz = await this.app.model.Clazz.findAll({
            where:{
                id:id
            }
        });
        this.ctx.body = clazz;
    }

    async create(){
        let clazzname = this.ctx.request.body.clazzname;
        await this.app.model.Clazz.create({
            clazzname:clazzname
        });
        this.ctx.body = "添加成功";
    }

    async destroy(){
        let id = this.ctx.params.id;
        await this.app.model.Clazz.destroy({
            where:{
                id:id
            }
        })
        this.ctx.body = "删除班级数据";
    }

    async update(){
        let id = this.ctx.params.id;
        let clazzname = this.ctx.request.body.clazzname;
        await this.app.model.Clazz.update({
            clazzname:clazzname
        },{
            where:{
                id:id
            }
        })
        this.ctx.body = "修改成功";
    }
}

module.exports = ClazzController;
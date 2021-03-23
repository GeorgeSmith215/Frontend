const Service = require('egg').Service;

class UserService extends Service{
    // service也实现了方法的复用，如果程序中还有某些地方需要获得学生列表，就可以直接调用而不需要操作数据库
    async getUser(username){
        try{
            let user = await this.app.model.User.findAll({where:{
                username:username
            }});
            // console.log(user);
            return user[0];
        }catch(e){
            return null;
        }
    }

    async createUser(username,password){
        try{
            await this.app.model.User.create({
                username:username,
                password:password,
            })
            return true;
        }catch(e){
            return false;
        }
    }
}

module.exports = UserService;
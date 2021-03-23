const Controller = require('egg').Controller;
const Utility = require("utility");

class RegisterController extends Controller{
    async register(){
        try{
            let username = this.ctx.request.body.username;
            let password = this.ctx.request.body.password;
            let user = await this.ctx.service.user.getUser(username);
            // console.log(user);
            if(user){
                this.ctx.body = {
                    code:30000,
                    msg:"用户已存在"
                }
            }else{
                let md5PSW = Utility.md5(password);
                if(await this.ctx.service.user.createUser(username,md5PSW)){
                    this.ctx.body = {
                        code:20000,
                        msg:"注册成功"
                    }
                }else{
                    this.ctx.body = {
                        code:40001,
                        msg:"注册失败"
                    }
                }
            }
        }catch(e){
            this.ctx.body = {
                code:40000,
                msg:"登录失败"
            }
        }
    }
}

module.exports = RegisterController;
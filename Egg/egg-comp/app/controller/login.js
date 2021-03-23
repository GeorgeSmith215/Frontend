const Controller = require('egg').Controller;
const Utility = require("utility");

class LoginController extends Controller{
    async login(){
        try{
            let username = this.ctx.request.body.username;
            let password = this.ctx.request.body.password;
            let user = await this.ctx.service.user.getUser(username);
            // console.log(user);
            if(user){
                if(user.password === Utility.md5(password)){
                    let token = this.ctx.app.jwt.sign({
                        username
                    },this.app.config.jwt.secret);
                    this.ctx.body = {
                        code:20000,
                        token
                    }
                }else{
                    this.ctx.body = {
                        code:30001,
                        msg:"密码输入错误"
                    }
                }
            }else{
                this.ctx.body = {
                    code:30000,
                    msg:"用户不存在"
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

module.exports = LoginController;
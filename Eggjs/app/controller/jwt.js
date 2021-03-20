const Controller = require("egg").Controller;

class JwtController extends Controller {
    // 拿到前端发送过来的数据,验证成功的话,就可以通过sign方法给前端返回一个token
    async doLogin(){
        let user = this.ctx.request.body.user;
        if(user.username === "admin" && user.password === "admin"){
            let user_jwt = {username:user.username};
            let token = this.app.jwt.sign(user,this.app.config.jwt.secret);
            this.ctx.body = {
                code:20000,
                token:token
            }
        }else{
            this.ctx.body = {
                code:40000,
                msg:"error"
            }
        }
    }
    // 前端拿到token后还要和后端进行交互,每一次交互数据时,都要带着token,getMessage就是检测token(verify校验)
    async getMessage(){

        // let token = this.ctx.request.header.token;
        // try{
        //     let decode = this.app.jwt.verify(token,this.app.config.jwt.secret);
        //     this.ctx.body = "Hello JWT";
        // }catch(e){
        //     this.ctx.body = "token error";
        // }

        // 校验token都交给middleware里的checkToken后这里就可以不需要校验了
        this.ctx.body = "Hello JWT";
    }
    async index(){
        let user = {
            username:"George"
        }
        // jwt签名,第一个参数是加密的数据,第二个是密钥
        // 用户登录生成的token会发送给客户端,以后每次用户再次请求数据时都要带着token(签发token)
        let token = this.app.jwt.sign(user,this.app.config.jwt.secret);
        // this.ctx.body = token;
        // 解密(相当于反向加密),由解密后的数据与属性名"iat"的数字(token签发的时间戳)组成
        // 服务器会通过token来校验,如果能解析出正确的用户信息则说明用户是登录成功的
        // verify执行时有问题不希望服务器直接报错,而是给与一定反馈,所以使用try-catch语句
        try{
            let decode = this.app.jwt.verify(token,this.app.config.jwt.secret);
            this.ctx.body = decode
        }catch(e){
            this.ctx.body = "token error";
        }
    }
}

module.exports = JwtController;
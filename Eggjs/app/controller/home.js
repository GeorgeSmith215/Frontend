'use strict';  //严格模式

const Controller = require('egg').Controller;
// 自定义HomeController继承Controller
class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    // ctx.body = `
    //   <h1>HELLO WORLD</h1>
    // `;
    // await ctx.render("fruit",{fruits:["banana","apple","orange"]});
    if(ctx.session.user){
      await ctx.render("index");
    }else{
      ctx.redirect('/login');
    }
  }

  async getData(){
    this.ctx.body = "Hello Egg";
  }

  async login(){
    await this.ctx.render("login");
  }

  async doLogin(){
    let username = this.ctx.request.body.username;
    let password = this.ctx.request.body.password;
    if(username == 'admin' && password == 'admin'){
      this.ctx.session.user = username;
      this.ctx.redirect('/');
    }else {
      this.ctx.redirect('/login');
    }
  }

  async doLogout(){
    this.ctx.session.user = "";
    this.ctx.redirect('/login');
  }
}
// 最后需要暴露controller
module.exports = HomeController;

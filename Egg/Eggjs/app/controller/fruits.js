'use strict';  //严格模式

const Controller = require("egg").Controller;
let fruitList = [
    "apple",
    "banana",
    "orange"
]

class FruitsController extends Controller {
    // async index(){
    //     this.ctx.body = fruitList;
    // }

    // async getId(){
    //     // 通过this.ctx.params.query可以获取get方法"/"后的参数
    //     let id = this.ctx.params.id;
    //     this.ctx.body = `传递的id是${id}`;
    // }

    // async createPage(){
    //     this.ctx.body = `
    //         <form method='post' action='/createfruit'>
    //             <input name='fruitname'>
    //             <button>add</button>
    //         </form>
    //     `;
    // }

    // async createFruit(){
    //     let fruit = this.ctx.request.body;
    //     fruitList.push(fruit.fruitname);
    //     this.ctx.body = fruit;
    // }

    // 我们只要在路由文件里定义一个resources然后通过名称对应关系就可以简单实现处理各种请求的功能了
    // index对应/fruits的get请求,用this.ctx.query.XX可以获得URL最后"?XX="后的内容
    async index(){
        // let query = this.ctx.query.index;
        this.ctx.body = fruitList;
    }
    // new对应/fruits/new的get请求
    async new(){
        this.ctx.body = `
            <form method='post' action='/fruits'>
                <input name='fruit'>
                <button>add</button>
            </form>
        `;
    }
    // show对应/fruits/:id的get请求,用this.ctx.params.id获取id
    async show(){
        // 通过this.ctx.params.id可以获取get方法"/"后的参数
        let id = this.ctx.params.id;
        this.ctx.body = `传递的id是${id}`;
    }
    // create对应/fruits的post请求,用this.ctx.request.body获取请求数据
    async create(){
        const fruit = this.ctx.request.body.fruit;
        // console.log(fruit);
        fruitList.push(fruit);
        this.ctx.body = "CREATE OK";
        // post后用ctx.redirect重定向到get请求的/fruits
        this.ctx.redirect('/fruits');
    }
    // destroy对应/fruits/:id的DELETE请求,,用this.ctx.params.id获取id
    async destroy(){
        let id = this.ctx.params.id;
        fruitList.splice(id,1);
        this.ctx.body = "DELETE OK!"
    }
}

module.exports = FruitsController;
function checktoken(){
    return async function(ctx,next){
        try{
            // 获取token
            let token = ctx.request.header.token;
            // 校验token
            let decode = ctx.app.jwt.verify(token,ctx.app.config.jwt.secret);
            // 这里只是简单判断能否解析出用户,严格上还需要和后台用户比对
            if(decode.username){
                // next()和路由守卫里的一样,代表下一页面
                await next();
            }else{
                ctx.body = {
                    code:40000,
                    msg:"check error"
                }
            }
        }catch(e){
            ctx.body = {
                code:40000,
                msg:"token error"
            }
        }
    }
}

module.exports = checktoken;
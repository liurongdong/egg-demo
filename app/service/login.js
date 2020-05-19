"use strict"

const Service = require("egg").Service

class LoginService extends Service {
  async codeLogin(code) {
    let { ctx, app } = this
 
      let res = await ctx.curl(
        "https://api.weixin.qq.com/sns/jscode2session?appid=" +
        app.config.wechatConfig.appid +
        "&secret=" +
        app.config.wechatConfig.secret +
        "&js_code=" +
        code +
        "&grant_type=authorization_code",
        {
          dataType: "json"
        }
    ) 
      ctx.logger.info(res)
      if (!res.data.errcode ) {
        const user = await ctx.model.Users.findOrCreate({
          where: {
            openid: res.data.openid
          }
        })
        return user
      } else {
        
        // ctx.logger.info('微信获取openid失败',res.data);
        // ctx.status = 500
        ctx.throw(200, {
          data: {
            code: 0,
            msg: '',
            status: 'fail',
            result: res.data
          }
         
        })
        // ctx.returnBody("微信获取openid失败!", 0, 200, res.data)
      }
      
     
    
   
  }
}

module.exports = LoginService

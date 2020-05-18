"use strict"

const Service = require("egg").Service

class LoginService extends Service {
  async codeLogin(code) {
    let { ctx, app } = this
    try{
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
      
      const user = await ctx.model.Users.findOrCreate({
        where: {
          openid: res.data.openid
        }
      })
      return user
    }catch(e){
      //TODO handle the exception
      ctx.logger.info(e)
    }
   
  }
}

module.exports = LoginService

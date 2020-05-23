const Controller = require("egg").Controller

/**
 * @controller LoginController 用户登陆
 */

class LoginController extends Controller {
  /**
   * @summary 根据code登陆
   * @description code只能使用一次
   * @router post /api/v1/login/codeLogin 。
   * @request post string *code 前端获取的code  微信code
   * @response 200 baseResponse 返回结果。
   */
  async index() {
    let { ctx, app } = this
    let code = ctx.request.body.code
    ctx.logger.info("some request data: %j", ctx.request.body)
    console.log("%c log===>", "background: Aquamarine; font-size: 20px;", code)
   
    try{
      ctx.validate({
        code: { type: 'number' }
      })
    
    }catch(e){
      //TODO handle the exception
      ctx.returnBody("参数校验错误!", 0, 200, e)
      return
    }
    let result = await ctx.service.login.codeLogin(code)
    ctx.logger.info(result)
    ctx.returnBody("请求成功!", 1, 200, result)
    // this.logger.info("use")
  }
}

module.exports = LoginController

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

    console.log(res)

    let data = {
      name: "nihai"
    }
    ctx.logger.info(ctx.request.body.code)
    // this.logger.info("use")
    // ctx.returnBody("请求成功!", 1, 200, data)
  }
}

module.exports = LoginController

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
    let data = {
      name: "nihai "
    }
    this.ctx.returnBody("请求成功!", 1, 200, data)
  }
}

module.exports = LoginController

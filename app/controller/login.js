const Controller = require("egg").Controller

/**
 * @controller LoginController 注释必写，swagger-doc是根据这段注释来生成接口的 ）。
 */

class LoginController extends Controller {
  /**  （ 注释必写，swagger-doc是根据这段注释来生成接口详细信息的 ）。
   * @summary 根据ID查询信息。
   * @description 根据ID查询信息。
   * @router get / （ get 表示设置请求为 get 请求，最后的 selectById 对应下面的 selectById 方法 ）。
   * @request query string Id 需要去查新的ID。（ get 对应 query 请求，请求值设定为 integer 纯数字类型，ID 为请求的字段，注意大小写，和下面的方法要一一对应，不然会报错 ）。 * @response 200 JsonBody 返回结果。（ 对应 contract 里面的验证属性，下面会提到 。）
   */

  async index() {
    this.ctx.curl("www.baidu")
    let data = {
      name: "nihai "
    }
    this.JsonBody(data)
  }
  /*
   * 对返回的数据结果进行封装。
   */
  JsonBody(data) {
    this.ctx.body = {
      result: data
    }
  }
}

module.exports = LoginController

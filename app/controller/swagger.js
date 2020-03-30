const Controller = require("egg").Controller
/**
 * @Controller user
 */
class HomeController extends Controller {
  /**  （ 注释必写，swagger-doc是根据这段注释来生成接口详细信息的 ）。
   * @summary 根据ID查询信息。
   * @description 根据ID查询信息。
   * @router get /version01/controllers/selectById （ get 表示设置请求为 get 请求，最后的 selectById 对应下面的 selectById 方法 ）。
   * @request query integer Id 需要去查新的ID。（ get 对应 query 请求，请求值设定为 integer 纯数字类型，ID 为请求的字段，注意大小写，和下面的方法要一一对应，不然会报错 ）。
   * @response 200 JsonBody 返回结果。（ 对应 contract 里面的验证属性，下面会提到 。）
   */
  async index() {
    this.ctx.body = "hi, " + this.app.plugins.swagger
  }
}

module.exports = HomeController
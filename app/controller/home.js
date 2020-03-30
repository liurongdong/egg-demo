/**
 * @controller HomeController 注释必写，swagger-doc是根据这段注释来生成接口的 ）。
 */

const Controller = require("egg").Controller

class HomeController extends Controller {
  /**  （ 注释必写，swagger-doc是根据这段注释来生成接口详细信息的 ）。
   * @summary 根据ID查询信息。
   * @description 根据ID查询信息。
   * @router get / （ get 表示设置请求为 get 请求，最后的 selectById 对应下面的 selectById 方法 ）。
   * @request query string Id 需要去查新的ID。（ get 对应 query 请求，请求值设定为 integer 纯数字类型，ID 为请求的字段，注意大小写，和下面的方法要一一对应，不然会报错 ）。 * @response 200 JsonBody 返回结果。（ 对应 contract 里面的验证属性，下面会提到 。）
   */
  async index() {
    const { ctx } = this
    const token = ctx.app.jwt.sign("liuuu", ctx.app.jwt.secret, {
      expiresIn: "1h"
    }) //token签名 有效期为1小时
    ctx.cookies.set("token", token)
    this.JsonBody({ token })
    ctx.status = 200
  }
  /**  （ 注释必写，swagger-doc是根据这段注释来生成接口详细信息的 ）。
   * @summary 根据ID查询信息。
   * @description 根据ID查询信息。
   * @router get /version01/controllers/selectById （ get 表示设置请求为 get 请求，最后的 selectById 对应下面的 selectById 方法 ）。
   * @request query integer Id 需要去查新的ID。（ get 对应 query 请求，请求值设定为 integer 纯数字类型，ID 为请求的字段，注意大小写，和下面的方法要一一对应，不然会报错 ）。
   * @response 200 JsonBody 返回结果。（ 对应 contract 里面的验证属性，下面会提到 。）
   */
  // async login() {
  //   const { ctx } = this
  //   const token = ctx.app.jwt.sign("liuuu", ctx.app.jwt.secret, {
  //     expiresIn: "1h"
  //   }) //token签名 有效期为1小时
  //   ctx.cookies.set("token", token)
  //   this.JsonBody({ token })
  //   ctx.status = 200
  // }
  /**  （ 注释必写，swagger-doc是根据这段注释来生成接口详细信息的 ）。
   * @summary 根据ID查询信息。
   * @description 根据ID查询信息。
   * @router get /version01/controllers/selectById （ get 表示设置请求为 get 请求，最后的 selectById 对应下面的 selectById 方法 ）。
   * @request query integer Id 需要去查新的ID。（ get 对应 query 请求，请求值设定为 integer 纯数字类型，ID 为请求的字段，注意大小写，和下面的方法要一一对应，不然会报错 ）。
   * @response 200 JsonBody 返回结果。（ 对应 contract 里面的验证属性，下面会提到 。）
   */
  // async authCallback() {
  //   const { ctx } = this
  //   let res = await ctx.app.mysql.get("my_table", {
  //     age: 90
  //   })
  //   console.log(res)
  //   console.log("shi", ctx.isAuthenticated())
  //   // 关键在这句，使用ctx.isAuthenticated()判断是否登录。这些都是eggjs自动将passport的方法挂到ctx上了。
  //   // 如果没登录跳渲染登录的页面。这里用了return阻止进一步逻辑
  //   if (!ctx.isAuthenticated()) {
  //     // 这里有一个点：ctx.session.returnTo就是如果登陆成功后，返回的页面路径。而ctx.path是当前访问的路径，也就是是说将当前路径保存下来，登陆成功了返回来继续
  //     ctx.session.returnTo = ctx.path
  //     ctx.body = {
  //       sl: "登陆失"
  //     }
  //   }
  //   // 如果通过就继续正常的逻辑。
  //   // await ctx.render('91porn/list.tpl', {
  //   //   user: ctx.user
  //   // });

  //   this.JsonBody({ sl: "登陆成功" })
  //   ctx.status = 200
  // }

  /*
   * 对返回的数据结果进行封装。
   */
  JsonBody(data) {
    this.ctx.body = {
      result: data
    }
  }
}

module.exports = HomeController

// app/extend/context.js

const Cryptojs = require("crypto-js")

module.exports = {
  // this 就是 ctx 对象，在其中可以调用 ctx 上的其他方法，或访问属性
  
  get jwt() {
    return this.app.jwt
  },
  get user() {
    let token = this.cookies.get("token")
    let user = jwt.verify(token, this.app.config.jwtSecret)
    return user
  },
  /**
   * 返回客户端内容
   * @param status // 返回状态
   * @param message // 返回内容
   * @param data // 返回内容
   */
  returnBody(message, code, status, data = {}) {
    this.status = status
    this.response.body = {
      data,
      msg: message,
      code: code,
      status: code == '0'?'fail':'success'
    }
  },

  crypto(value) {
    return Cryptojs.HmacSHA256(value, "drw_admin888").toString()
  }
}

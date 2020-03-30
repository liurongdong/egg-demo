const Service = require("egg").Service

class NewsService extends Service {
  async list(page = 1) {
    const token = app.jwt.sign("liuu", secret, { expiresIn: "1h" })
    ctx.body = {
      message: "获取token成功",
      code: 1,
      token
    }
    console.log(page)
    console.log()
  }
  async find(uid) {
    let res = await ctx.app.mysql.get("liuuu", {
      age: uid
    })
    return res
  }
}

module.exports = NewsService

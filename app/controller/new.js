const Controller = require("egg").Controller;

class NewsController extends Controller {
  async list() {
    console.log("是否进入list");
    const ctx = this.ctx;
    console.log(ctx.curl);
    console.log(ctx.app);
    console.log("22323");
    ctx.body = {
      id: "3223"
    };
  }
}

module.exports = NewsController;

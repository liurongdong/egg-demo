const Controller = require("egg").Controller;

class NewsController extends Controller {
  async list() {
    const ctx = this.ctx;
    console.log(ctx.curl);
    console.log(ctx.app);
    console.log("22323");
  }
}

module.exports = NewsController;

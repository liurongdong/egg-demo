const Controller = require("egg").Controller;

class TopicController extends Controller {
  async create() {
    const ctx = this.ctx;
    ctx.body = {
      topic_id: id
    };
    ctx.status = 201;
    console.log("topic Ctx");
  }
  async index() {
    const ctx = this.ctx;
    ctx.body = {
      topic_id: 921
    };
    ctx.status = 201;
    console.log("topic Ctx");
  }
}

module.exports = TopicController;

const Service = require("egg").Service;

class NewsService extends Service {
  async list(page = 1) {
    console.log(page);
    console.log();
  }
}

module.exports = NewsService;

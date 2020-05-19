// HTTP 响应代码: https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Status
const errors = require('egg-errors')

// TODO: httpCodeHash.code
module.exports = {
  continue: { code: 100, message: 'Continue' },
  ok: { code: 200, message: 'OK' },
  created: { code: 201, message: 'Created' },
  noContent: { code: 204, message: 'No Content' },
  movedPermanently: { code: 301, message: 'Moved Permanently' },
  found: { code: 302, message: 'Found' },
  notModified: { code: 304, message: 'Not Modified' },
  badRequest: { code: 400, message: 'Bad Request', error: errors.E400 },
  unauthorized: { code: 401, message: 'Unauthorized', error: errors.E401 },
  forbidden: { code: 403, message: 'Forbidden', error: errors.E403 },
  notFound: { code: 404, message: 'Not Found', error: errors.E404 },
  conflict: { code: 409, message: 'Conflict', error: errors.E409 },
  unprocessable: { code: 422, message: 'Unprocessable Entity', error: errors.E422 },
  serverError: { code: 500, message: 'serverError', error: errors.E500 },
  otherServerError: { code: 502, message: 'Bad Gateway', error: errors.E502 },
  errors,
}
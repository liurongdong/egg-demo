module.exports = {
  // 这个名字对应上面 Controller 注释的@response 的 baseResponse
  baseResponse: {
    code: { type: "integer", required: true, example: 0 },
    data: { type: "string", example: "{}" },
    msg: { type: "string", example: "请求成功" }
  },
  baseRequest: {
    id: {
      type: "string",
      description: "id 唯一键",
      required: true,
      example: "1"
    }
  }
}

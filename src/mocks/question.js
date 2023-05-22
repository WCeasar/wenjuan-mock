const mockjs = require("mockjs");

var Random = mockjs.Random;
module.exports = [
  // 获取单个问卷
  {
    url: "/api/question/:id",
    method: "get",
    response() {
      return {
        errno: 0,
        data: {
          id: Random.id(),
          title: Random.ctitle(),
          desc: "问卷描述",
          js: "",
          css: "",
          isDeleted: false,
          isPublished: true,
        },
      };
    },
  },
];

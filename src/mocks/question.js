const mockjs = require("mockjs");
const getQuestionList = require("./getQuestionList");

var Random = mockjs.Random;
module.exports = [
  // 获取单个问卷信息
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
  // 新建问卷
  {
    url: "/api/question",
    method: "post",
    response() {
      return {
        errno: 0,
        data: {
          id: Random.id(),
        },
      };
    },
  },
  // 查询问卷列表
  {
    url: "/api/question",
    method: "get",
    response() {
      return {
        errno: 0,
        data: {
          total: 100,
          list: getQuestionList(),
        },
      };
    },
  },
];

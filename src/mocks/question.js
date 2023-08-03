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
          componentList: [
            {
              fe_id: Random.id(),
              type: "questionTitle",
              title: "标题",
              isHidden: false,
              isLocked: false,
              props: {
                text: "个人消息问卷",
                level: 1,
                isCenter: false,
              },
            },
            {
              fe_id: Random.id(),
              type: "questionInput",
              title: "输入框",
              isHidden: false,
              isLocked: false,
              props: {
                title: "你的姓名",
                placeholder: "请输入姓名",
              },
            },
            {
              fe_id: Random.id(),
              type: "questionInput",
              title: "输入框",
              isHidden: false,
              isLocked: false,
              props: {
                title: "你的手机号",
                placeholder: "请输入手机号",
              },
            },
          ],
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
    response(ctx) {
      console.log(ctx.query);
      let { isStar = false, isDeleted = false, page, pageSize } = ctx.query;
      isStar = isStar === "true" ? true : false;
      isDeleted = isDeleted === "true" ? true : false;
      const len = pageSize;

      return {
        errno: 0,
        data: {
          total: 100,
          list: getQuestionList({ isStar, isDeleted, len }),
        },
      };
    },
  },
  // 查询问卷列表
  {
    url: "/api/question/:id",
    method: "patch",
    response(ctx) {
      console.log(ctx.request.body);
      return {
        errno: 0,
        data: ctx.request.body,
      };
    },
  },
  // 查询问卷列表
  {
    url: "/api/question/duplicate/:id",
    method: "post",
    response(ctx) {
      return {
        errno: 0,
        data: {
          id: Random.id(),
        },
      };
    },
  },
  {
    url: "/api/question",
    method: "delete",
    response(ctx) {
      return {
        errno: 0,
        data: ctx.request.body,
      };
    },
  },
];

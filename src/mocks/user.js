const mockjs = require("mockjs");

const Random = mockjs.Random;

module.exports = [
  {
    url: "/api/user/login",
    method: "post",
    response(ctx) {
      return {
        errno: 0,
        data: {
          token: Random.word(30),
        },
      };
    },
  },
  {
    url: "/api/user/register",
    method: "post",
    response(ctx) {
      return {
        errno: 0,
        data: ctx.request.body,
      };
    },
  },
  {
    url: "/api/user/userinfo",
    method: "get",
    response(ctx) {
      return {
        errno: 0,
        data: {
          username: Random.cname(),
          nickname: Random.name(),
        },
      };
    },
  },
];

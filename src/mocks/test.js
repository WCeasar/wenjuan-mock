const mockjs = require("mockjs");

var Random = mockjs.Random;
module.exports = [
  {
    url: "/api/test",
    method: "get",
    response() {
      return {
        errno: 0,
        data: {
          name: Random.cname(),
        },
      };
    },
  },
];

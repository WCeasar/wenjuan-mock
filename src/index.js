const Koa = require("koa");
const KoaRouter = require("koa-router");
const mockList = require("./mocks/index.js");

const app = new Koa();
const router = new KoaRouter();

const getRes = (res) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(res);
    }, 500);
  });
};

mockList.forEach((item) => {
  const { url, method, response } = item;

  router[method](url, async (ctx) => {
    const res = await getRes(response(ctx));
    ctx.body = res;
  });
});

app.use(router.routes());

app.listen(3001, () => {
  console.log("http://localhost:3001/");
});

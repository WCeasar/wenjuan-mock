const Koa = require("koa");
const mockList = require("./mocks/index.js");

const bodyParser = require("koa-bodyparser");

const KoaRouter = require("koa-router");

const app = new Koa();
const router = new KoaRouter();
app.use(bodyParser());
const getRes = (res) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(res);
    }, 100);
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

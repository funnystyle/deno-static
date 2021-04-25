import { Application, Router, Context } from "https://deno.land/x/oak/mod.ts";
import { existsSync } from "https://deno.land/std/fs/mod.ts";

function isExist(filePath: string) {
  return existsSync(filePath);
}

function getContent(filePath: string) {
  return Deno.openSync(filePath);
}

const router = new Router();

router.get("/", (context) => {
  await send(context, context.request.url.pathname, {
    root: `${Deno.cwd()}/html`,
    index: "index.html",
  });
  // context.response.body = getContent(`${Deno.cwd()}/html/index.html`);
});
router.get("/about", (context) => {
  await send(context, context.request.url.pathname, {
    root: `${Deno.cwd()}/html`,
    index: "about.html",
  });
});
// router.get("/game", (context) => {
//   context.response.body = getContent(
//     `${Deno.cwd()}/html${context.request.url.pathname}.html`
//   );
// });
// router.get(`/game/`, (context) => {
//   context.response.body = getContent(
//     `${Deno.cwd()}/html${context.request.url.pathname}.html`
//   );
// });

// router.get("/(.*)", async (context: Context) => {

//   const pathname = context.request.url.pathname;
//   const filepPath = `${Deno.cwd()}/html${
//     pathname === "/" ? "/index" : context.request.url.pathname
//   }.html`;

//   if (isExist(filepPath)) {
//     context.response.status = 200;
//     context.response.body = getContent(filepPath);
//   } else {
//     context.response.status = 404;
//     context.response.body = getContent(`${Deno.cwd()}/html/notfound.html`);
//   }
// });
const app = new Application();
app.use(router.routes());
app.use(router.allowedMethods());

await app.listen({ port: 8000 });

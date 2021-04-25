import { Application, Router, send } from "https://deno.land/x/oak/mod.ts";

const app = new Application();

app.use(async (context) => {
  await send(context, context.request.url.pathname, {
    root: `${Deno.cwd()}/html`,
    index: "index.html",
    extensions: ["html"],
  });
});

console.log("server is running in port 4000");
await app.listen({ port: 4000 });

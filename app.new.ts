import { Application } from "https://deno.land/x/oak/mod.ts";

const app = new Application();

app.file("/", "html/index.html");

app.use((ctx) => {
  ctx.response.body = "Hello World!";
});

await app.listen({ port: 8000 });

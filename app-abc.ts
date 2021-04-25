import { Application } from "https://deno.land/x/abc@v1.3.1/mod.ts";

const app = new Application();

app
  .file("/", "html/index.html")
  .file("/about", "html/about.html")
  .file("/game", "html/game.html")
  .start({ port: 4000 });

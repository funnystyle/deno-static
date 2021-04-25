import {
  Application,
  Router,
  Context,
} from "https://deno.land/x/oak@v7.2.0/mod.ts";
// import "./game.ts";
const app = new Application();
const router = new Router();
//HTML FILES
const HTML_FILES: any = {
  homefile: Deno.openSync("./html/index.html"),
  aboutfile: Deno.readTextFile("./html/about.html"),
  gamefile: Deno.readTextFile("./html/game.html"),
  playGamefile: {
    playGamefile1: Deno.readTextFile("./html/playgame/1.html"),
    playGamefile2: Deno.readTextFile("./html/playgame/2.html"),
  },
  notfoundfile: Deno.readTextFile("./html/notfound.html"),
};
//HTML
let homeHtml: any = "";
let aboutHtml: any = "";
let gameHtml: any = "";
let playGameHtml: any = "";
let notfoundHtml: any = "";
// THEN FUNCTION
HTML_FILES.homefile.then((response: any) => {
  homeHtml = response;
});
HTML_FILES.aboutfile.then((response: any) => {
  aboutHtml = response;
});
HTML_FILES.notfoundfile.then((response: any) => {
  notfoundHtml = response;
});
HTML_FILES.gamefile.then((response: any) => {
  gameHtml = response;
});
function THEN_FUNCTION(htmlFILE: any) {
  let HTMLFILE = htmlFILE;
  HTML_FILES.HTMLFILE.then((response: any) => {
    HTMLFILE = response;
  });
  return HTMLFILE;
}
//router
router.get("/", (context) => {
  context.response.body = homeHtml;
});
router.get("/about", (context) => {
  context.response.body = aboutHtml;
});
router.get("/game", (context) => {
  context.response.body = gameHtml;
});
router.get(`/game/`, (context) => {
  context.response.body = gameHtml;
});
router.get("/(.*)", async (context: Context) => {
  context.response.status = 404;
  context.response.body = notfoundHtml;
});
// DataBase
console.log(THEN_FUNCTION, HTML_FILES.homefile);
//app
app.use(router.routes());
app.use(router.allowedMethods());
console.log("server is running in port 4000");
await app.listen({ port: 4000 });

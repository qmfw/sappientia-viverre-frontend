//server base code ref = https://tpiros.dev/blog/404-after-refreshing-the-browser-for-angular-vue-js-app/
const express = require("express");
const path = require("path");
const app = express();
const port = 8080;
const serverName = "webServer.js"; // "webServer.js (by node express js)"
// for Angular
//app.use(express.static('dist/angular-app'));
// or for Vue.js
app.use(express.static("dist/"));
//Middleware to proxy requests through a specified index page, useful for Single Page Applications that utilise the HTML5 History API.
const buildLocation = "dist";
app.use((req, res, next) => {
  let method = req && req.method ? req.method : "????";
  method = method.padEnd(4, " ");
  if (!req.originalUrl.includes(buildLocation)) {
    let sendPath = path.resolve(`${buildLocation}/index.html`);
    res.sendFile(sendPath);
  } else {
    next();
  }
});
app.listen(port, () =>
  console.info(`${serverName} : Server running on port ${port}`)
);

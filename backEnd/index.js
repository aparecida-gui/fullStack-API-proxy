const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());
app.use(require("./src/router"));

app.listen(3030, ()=> {
  console.log("run server port 3030");
})
const express = require("express");
const cors = require("cors");
const app = express();
const PORT = process.env.PORT || 3030;
app.use(cors());
app.use(require("./src/router"));

app.listen(PORT, ()=> {
  console.log("run server port 3030");
})
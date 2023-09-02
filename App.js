const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("INdeeeeeeeeeeeeeeeeeeeeeex");
});
const port = 7777;
app.listen(port, () => {
  console.log(`App started on port ${port}`);
});

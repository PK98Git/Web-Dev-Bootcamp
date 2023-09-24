import express from "express";
import morgan from "morgan"; //HTTP request logger middleware for node.js
const app = express();
const port = 3000;

app.use(morgan("tiny"));  //can use different kind of logging details

app.get("/", (req, res) => {
  res.send("Hello");
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

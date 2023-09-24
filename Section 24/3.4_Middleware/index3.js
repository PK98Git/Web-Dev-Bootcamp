import express from "express";

const app = express();
const port = 3000;

function logger(req,res,next){
  console.log("request Method :",req.method);//This will log  type of method of the request
  console.log("request URL :", req.url);
  next();
  //Without next function it will not move to the other lines 
}
app.use(logger);

app.get("/", (req, res) => {
  res.send("Hello");
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

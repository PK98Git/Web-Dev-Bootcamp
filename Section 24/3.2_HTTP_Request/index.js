import express from "express";

const app = express();
const port = 3000;

app.get("/",(req,res)=>{
	res.send("<h1>Hello Worlhhhd!</h1>")
	// console.log(req.rawHeaders)
});

app.get("/about", (req, res) => {
  res.send("<h1>About!</h1>");
  // console.log(req.rawHeaders)
});

app.get("/contact", (req, res) => {
  res.send("<h1>Contact!</h1>");
  // console.log(req.rawHeaders)
});

app.listen(port,()=>{
	console.log(`Listening on port ${port}`);
})

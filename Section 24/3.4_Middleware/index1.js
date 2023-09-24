import express from "express";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
  console.log(__dirname)
});


//use this to pass encoded type data through the url
app.use(bodyParser.urlencoded({extended:true}));
//Create Post request to submit the data
app.post("/submit",(req,res)=>{
  console.log(req.body)
})
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

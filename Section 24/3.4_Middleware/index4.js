import express from "express";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;

var bandName = '';

//use this to pass encoded type data through the url
app.use(bodyParser.urlencoded({extended:true}));

app.use(bandNameGen);

function bandNameGen(req,res,next){
  bandName = req.body["street"]+req.body["pet"];
  next();
}

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});
//Create Post request to submit the data
app.post("/submit",(req,res)=>{
  res.send(`Your band name is :<h1>${bandName}<h1>`);

})
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

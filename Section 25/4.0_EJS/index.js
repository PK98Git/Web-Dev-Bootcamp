import express from "express";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;

const isWeekend = false;
const day = new Date();
const day1 = day.getDay();
console.log(day1)
if(day1==0 || day1==6){
	isWeekend=true;
}

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/",(req,res)=>{
	if(isWeekend){
		res.render("index.ejs", {
		//name:req.body["name"]
		name: "WeekDay",
		description:"Its time to work hard"
	});
	}else{
		res.render("index.ejs", {
      //name:req.body["name"]
      name: "WeekEnd",
      description: " have fun",
    });
	}

});

app.listen(port,()=>{
	console.log(`Listening on port ${port}`)
})
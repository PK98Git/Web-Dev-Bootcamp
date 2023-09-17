//Write message in the file

//const fs = require("fs");

// fs.writeFile("Message.txt", "Hello From NodeJS!", (err) => {
//   if (err) throw err;
//   console.log('The saved to file!');
// });

//Read message from a file


// fs.readFile("./Message.txt",'utf8', (err, data) => {
//   if (err) throw err;
//   console.log(data);
// });



//var generateName = require("sillyname")

// import generateName from  "sillyname";
// var sillyName = generateName();
// console.log(`My name is ${sillyName}.`)


import superheroes from "superheroes";
var superhero = superheroes.random();
console.log(`I am  ${superhero}.`);


/* 
1. Use the inquirer npm package to get user input.
2. Use the qr-image npm package to turn the user entered URL into a QR code image.
3. Create a txt file to save the user input using the native fs node module.
*/

import qr from "qr-image";
import fs from "fs";

import inquirer from "inquirer";

//create and ask the question as prompt and the object type notations are used here
inquirer
  .prompt([
    {message:"Enter Your URL Here",
		name:"URL"
	}
  ])
  .then((answers) => {
		//Given answer equal to answers object. Through that we can call the object given in the prompt section
      var qr_svg = qr.image(answers.URL, { type: "png" });
      qr_svg.pipe(fs.createWriteStream("my_qr.png"));
      writeInFile(answers.URL);
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });

function writeInFile(msgText){
fs.writeFile("URL.txt", msgText, (err) => {
  if (err) throw err;
  console.log('The saved to file!');
});
}

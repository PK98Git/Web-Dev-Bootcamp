var person1 = prompt("Enter BF name");
var person2 = prompt("Enter GF name");

var n = Math.floor(Math.random() * 100) + 1;


alert("Your love score is " + n);



// Leap Year calculator Logic


var GetYear = 1992;
if((GetYear%4)===0){
    if((GetYear%100)===0){
        if((GetYear%400)===0){
            console.log("Leap year");
        }else{
            console.log("Not leap year");
        }
    }else{
        console.log("Leap year");
    }
}else{
    console.log("Not Leap year");
}




// Array

var name = prompt("Enter your name");

var names = ["abc", "sdsd", "pk"];

if (names.includes(name)) {
  alert("Welcome !");
} else {
  alert("Sorry");
}


//FizzBuzz Task
var output = [];

function fizzBuzz() {
  var num = output.length + 1;

  if (num % 3 === 0) {
    if (num % 5 === 0) {
      output.push("fizzBuzz");
    } else {
      output.push("fizz");
    }
  } else if (num % 5 === 0) {
    output.push("Buzz");
  } else {
    output.push(output.length + 1);
  }

  console.log(output);
}



//Who's Buying Lunch? Code Challenge
function whosPaying(names) {
  /******Don't change the code above*******/

  //Write your code here.

  // var nameArray = ["Angela", "Ben", "Jenny", "Michael", "Chloe"];

  var randomValue = Math.random();
  var place = Math.floor(randomValue * names.length);
  console.log(place);

  return names[place] + " is going to buy lunch today!";

  /******Don't change the code below*******/
}

//   99 Bottles Challenge
var count = 100;
function bear99() {
  while (count >= 1) {
    count--;
    if (count === 0) {
      console.log(
        "No more bottles of beer on the wall, no more bottles of beer.\nGo to the store and buy some more, 99 bottles of beer on the wall."
      );
    } else if (count === 1) {
      console.log(
        "1 bottles of beer on the wall, 1 bottles of beer.\nTake one down and pass it around, 6 bottles of beer on the wall."
      );
    } else {
      console.log(
        count +
          " bottles of beer on the wall, 1 bottles of beer.\nTake one down and pass it around, " +
          count +
          " bottles of beer on the wall."
      );
    }
  }
}


//fibonacci Generator
function fibonacciGenerator(n) {
  //Do NOT change any of the code above 👆

  //Write your code here:

  var values = [];

  for (let i = 0; i < n; i++) {
    if (i === 0) {
      values[0] = 0;
    } else if (i === 1) {
      values[1] = 1;
    } else {
      values.push(values[i - 1] + values[i - 2]);
    }
  }
  return values;

  console.log(n);

  //Return an array of fibonacci numbers starting from 0.

  //Do NOT change any of the code below 👇
}



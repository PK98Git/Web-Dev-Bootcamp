//Detecting button press

var numberOfDrumButton = document.querySelectorAll(".drum").length;

//by the below for loop it creates 7 lines for code means which attaches 7 event listners for each an every button which has .drum class
//limit the iteration to several steps and then can understand
for(var i = 0;i<numberOfDrumButton;i++){
		document.querySelectorAll(".drum")[i].addEventListener("click", function (){
	// var audio = new Audio("./sounds/tom-1.mp3");
	// audio.play();
	//console.log(this.style.color = "white");

	var buttonInnerHTML = this.innerHTML

	makeSound(buttonInnerHTML);
 	buttonAnimation(buttonInnerHTML);
	});
}
//Detecting keyboard press
	document.addEventListener("keydown",function(event){
		makeSound(event.key)
		buttonAnimation(event.key)
	})

function makeSound(key){
		switch (key) {
      case "w":
        var audio = new Audio("./sounds/tom-1.mp3");
        audio.play();
        break;
      case "a":
        var audio = new Audio("./sounds/tom-2.mp3");
        audio.play();
        break;
      case "s":
        var audio = new Audio("./sounds/tom-1.mp3");
        audio.play();
        break;
      case "d":
        var audio = new Audio("./sounds/tom-1.mp3");
        audio.play();
        break;
      case "j":
        var audio = new Audio("./sounds/snare.mp3");
        audio.play();
        break;
      case "k":
        var audio = new Audio("./sounds/crash.mp3");
        audio.play();
        break;
      case "l":
        var audio = new Audio("./sounds/kick-bass.mp3");
        audio.play();
        break;
      default:
        break;
    }
}

function buttonAnimation(key) {
	var activeButton = document.querySelector("."+key);
	activeButton.classList.add("pressed");


	setTimeout(function(){
		activeButton.classList.remove("pressed");
	},200);
	// setTimeout(() => {
	// 	activeButton.classList.remove("pressed");
	// }, 200);
	
}


























// JS calculator

//Intially we can define a functions and then we can pass them to another function to do the work

function add(num1, num2) {
  return num1 + num2;
}

function multiply(num1, num2) {
  return num1 * num2;
}

function devide(num1, num2) {
  return num1 / num2;
}

function substract(num1, num2) {
  return num1 - num2;
}

function calculator(num1, num2, operator) {
  return operator(num1, num2);
}

// calculator(2, 3, add);
// 5;
// calculator(2, 3, multiply);
// 6;
// calculator(2, 3, devide);
// 0.6666666666666666;
// calculator(2, 3, substract);
// -1;


//for debug any function 
debugger;
calculator(2, 3, add);
//then check each by each step how code works









// ======= Js Object==========
//First we need to create the constructor for the java script object
//Constructor function first letter should be capital

function HouseKeeper1(name, age, address, cleaningRepertoire) {
  this.name = name;
  this.age = age;
  this.address = address;
  this.cleaningRepertoire = cleaningRepertoire;
}
var houseKeeper1 = new HouseKeeper1("John", 12, "col", ["lobby", "bedroom"]);
var houseKeeper12 = new HouseKeeper1("John1", 32, "col33", ["bedroom"]);





const body = document.querySelector("body");

function dice() {
  var random1 = Math.floor(Math.random() * 6) + 1;
  var random2 = Math.floor(Math.random() * 6) + 1;


  var imgsrc1 = "./images/dice" +random1+".png";
  var imgsrc2 = "./images/dice" + random2 + ".png";

  console.log(imgsrc1);
  document.querySelectorAll("img")[0].setAttribute("src", imgsrc1);
  document.querySelectorAll("img")[1].setAttribute("src", imgsrc2);

  if (random1 > random2) {
    console.log("P1 win");
    document.querySelector("h1").textContent = "Player 1 wins🚩";
  } else if (random1 < random2) {
    document.querySelector("h1").textContent = "Player 2 wins🚩";
    console.log("P2 win");
  } else {
    console.log("draw");
    document.querySelector("h1").textContent = "Draw";
  }


}

body.onload = dice();

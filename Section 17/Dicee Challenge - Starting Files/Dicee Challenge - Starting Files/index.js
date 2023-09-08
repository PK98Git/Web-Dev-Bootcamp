const body = document.querySelector("body");

function dice() {
  const random1 = getRandomNumber();
  const random2 = getRandomNumber();

  var imgsrc1 = "./images/dice" +random1+".png";
  var imgsrc2 = "./images/dice" + random2 + ".png";

  console.log(imgsrc1);
  document.querySelectorAll("img")[0].setAttribute("src", imgsrc1);
  document.querySelectorAll("img")[1].setAttribute("src", imgsrc2);

  if (random1 > random2) {

    document.querySelector("h1").textContent = "Player 1 wins🚩";
  } else if (random1 < random2) {
    document.querySelector("h1").textContent = "Player 2 wins🚩";

  } else {

    document.querySelector("h1").textContent = "Draw";
  }


}
function getRandomNumber(){
   return Math.floor(Math.random() * 6) + 1;
}

body.onload = dice();


//Writing testcases for Testing Random function - Not guided in code just for self Practices
// Import the testing framework and the function to be tested
import { test } from 'jest';
import { getRandomNumber } from './your-random-number-file';

// Test case 1: Ensure the generated number is within the expected range (1-6)
test('Generated number should be within the range of 1-6', () => {
  const randomNumber = getRandomNumber();
  expect(randomNumber).toBeGreaterThanOrEqual(1);
  expect(randomNumber).toBeLessThanOrEqual(6);
});

// Test case 2: Check the distribution of generated numbers over multiple runs
test('Generated numbers should have a relatively uniform distribution', () => {
  const iterations = 10000;
  const counts = [0, 0, 0, 0, 0, 0];
  for (let i = 0; i < iterations; i++) {
    const randomNumber = getRandomNumber();
    counts[randomNumber - 1]++;
  }
  const expectedCount = iterations / 6;
  const deviation = expectedCount * 0.1; // Allowing a 10% deviation

  for (let i = 0; i < counts.length; i++) {
    expect(counts[i]).toBeGreaterThanOrEqual(expectedCount - deviation);
    expect(counts[i]).toBeLessThanOrEqual(expectedCount + deviation);
  }
});
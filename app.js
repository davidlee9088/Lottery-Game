'use strict'

//global
let numbersDiv = document.querySelector(".numbers");
let drawButton = document.querySelector("#draw");
let resetButton = document.querySelector("#reset");
let lotteryNumbers = [];
let colors = ["red", "blue", "green", "brown", "purple"];


//functions

let paintNumber = number => {
  let eachNumDiv = document.createElement("div");
  // Line Below question
  let colorIndex = Math.floor(number / 10);
  eachNumDiv.classList.add('eachnum');
  // Line below question
  eachNumDiv.style.backgroundColor = colors[colorIndex];
  eachNumDiv.textContent = number;
  numbersDiv.appendChild(eachNumDiv);
}

drawButton.addEventListener("click", function () {
  while (lotteryNumbers.length < 6) {
    let ran = Math.floor(Math.random() * 50) + 1;
    //line below question
    if (lotteryNumbers.indexOf(ran) === -1) {
      lotteryNumbers.push(ran);
      paintNumber(ran);
    }
  }
  //  console.log(lotteryNumbers)
}
)

resetButton.addEventListener("click", function (){
  lotteryNumbers.splice(0,6);
  numbersDiv.innerHTML = "";
})
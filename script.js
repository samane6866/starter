'use strict';

// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = 'correct number';
// document.querySelector('.number').textContent = 30;
// document.querySelector('.score').textContent = 20;
// document.querySelector('.guess').value = 23;

// 1--first of all select the Element, where should happen the event?

// document.querySelector('.guess').value = 23;

// we need to know our secert number, between 1 and 20 when,we implemeant this logic before our click function.
// we used trunc method just for cut decimals and +1 means between 1 to 20
const secretNumber = Math.trunc(Math.random() * 20) + 1;
document.querySelector('.number').textContent = secretNumber;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  // first we implemeant the condition  in case that the guess isn't a number
  if (!guess) {
    document.querySelector('.message').textContent = 'Oops No number!!';
    } else if (guess === secretNumber){
    document.querySelector(".message").textContent="YUPIIII Correct Number"    
  } else if (guess > secretNumber) {
    document.querySelector(".message").textContent="ohhh The number is too high"  
  } else if (guess < secretNumber) {
    document.querySelector(".message").textContent="its too low Number"  
  }
});

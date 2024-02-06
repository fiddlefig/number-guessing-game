'use strict'
const correctNumber = document.getElementById('correctNumber')
const number = document.getElementById('number');
const checkBtn = document.getElementById('checkBtn');
const estimate = document.getElementById('estimate');
const score = document.getElementById('score');
const highscore = document.getElementById('highscore');
const body = document.getElementsByTagName('body');
const container = document.getElementById('container')
const again = document.getElementById('again');


let gameScore = 20;
score.textContent = 20
highscore.textContent = 0;
correctNumber.style.display = "none";
again.style.display = "none";


let rando;
function randomNumber () {
    rando = Math.floor(Math.random() * 20)
    return rando;
}

randomNumber()

correctNumber.textContent = rando;

checkBtn.addEventListener('click', function() {

    if (number.value == rando) {
        container.style.backgroundColor = "green";
        container.style.color = "white";
        estimate.textContent = "Correct!"
        correctNumber.style.display = "block"
        correctNumber.style.color = "white";
        console.log('correct');
        again.style.display = "block";
        if (score > highscore) {
            highscore.textContent = score;
            
        }
        else {
            highscore == highscore;
        }
        
    }
    else if (number.value > rando) {
        estimate.textContent = "Too high!"
        console.log('too high');
        gameScore--
        score.textContent = gameScore
    }
    else if (number.value < rando) {
        estimate.textContent = "Too low!"
        console.log('too low');
        gameScore--
        score.textContent = gameScore
    }
    
    
})

again.addEventListener('click', function() {
    randomNumber();
    number.value = 0;
    gameScore = 20;
    score.textContent = 20;
    estimate.textContent = "Start Guessing!"
    container.style.backgroundColor = 'white';
    correctNumber.style.display = "none";
    again.style.display = "none";
    container.style.color = "black"
    correctNumber.textContent = rando;

})
console.log(rando);

let score = 0
let doublePoint = false
let worker = false
let myAudio = document.querySelector('#audio')

const showScore = document.getElementById('score')

function countScore() {
    if (doublePoint) {
        score++
    }
    if (worker) {

    }
    score++
    const audio = new Audio();
    audio.src = "Crunch.mp3"
    audio.play();
    console.log(score)
    showScore.textContent = score;
}
function removeError(){
    document.getElementById('Error').innerText = ""
}
function doublePoints() {
    if (score < 1000) {
        document.getElementById('Error').innerText = "Error - insufficient funds (Click to clear)"
    } else {
        document.getElementById('Error').innerText = ""
        score = score - 1000
        showScore.textContent = score
        doublePoint = true
        const element = document.getElementById("upgrade1");
        element.remove();
    }
}
function addWorker() {
    if (score < 550) {
        document.getElementById('Error').innerText = "Error - insufficient funds (Click to clear)"
    } else {
        document.getElementById('Error').innerText = ""
        score = score - 550
        showScore.textContent = score
        setInterval(function () { score = score + 1; showScore.textContent = score }, 200)
        worker = true
    }
}
var x = document.getElementById("myAudio"); 
        
function playAudio() { 
  x.play(); 
} 

function pauseAudio() { 
  x.pause(); 
} 

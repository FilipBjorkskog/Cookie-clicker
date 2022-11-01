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
    const src = "./Crunch.mp3"
    const audio = new Audio(src)
    audio.play()
    console.log(score)
    showScore.textContent = score;
}
function removeError() {
    document.getElementById('Error').innerText = ""
}

function cheatButton() {
    var number = prompt("Enter cheat code:")
    if (number == "CookieMonster") {
        score = score + 10000
        showScore.textContent = score
    } else {
        score = score - 1000
        showScore.textContent = score
        document.getElementById('Error').innerText = "Don't try -1000"

    }
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
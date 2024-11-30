
let player1 = document.getElementById("player1")
let player2 = document.getElementById("player2")
let attempt = document.getElementById("attempt")
let result = document.getElementById("result")
let throwBtn = document.getElementById("throwBtn")

let attemptValue = 0

function throwDice()
{
    attemptValue++

    let p1 = (Math.floor(Math.random()*10)%6)+1
    let p2 = (Math.floor(Math.random()*10)%6)+1

    player1.innerText = p1
    player2.innerText = p2

    attempt.innerText = attemptValue

    if(p1 === p2)
    {
        result.innerText = `Game Over ! You won the game in ${attemptValue} attempts`
        throwBtn.setAttribute("style","display:none")
    }
    else
    {
        result.innerText = "Try Again!"
    }
}

function startOver(){
    player1.innerText = 0
    player2.innerText = 0
    attempt.innerText = 0
    result.innerText = ""
    throwBtn.setAttribute("style","display:inline")
    attemptValue = 0
}
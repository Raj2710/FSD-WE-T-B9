
let player1 = document.getElementById("player1")
let player2 = document.getElementById("player2")
let attempt = document.getElementById("attempt")
let result = document.getElementById("result")
let throwBtn = document.getElementById("throwBtn")
let palyer1Score = document.getElementById("player1Score")
let palyer2Score = document.getElementById("player2Score")
let score1 = 0
let score2 = 0
let attemptValue = 0

function throwDice()
{
    attemptValue++

    let p1 = (Math.floor(Math.random()*10)%6)+1
    let p2 = (Math.floor(Math.random()*10)%6)+1

    player1.innerText = p1
    player2.innerText = p2

    score1 += p1
    score2 += p2

    palyer1Score.innerText = score1
    palyer2Score.innerText = score2

    attempt.innerText = attemptValue

    if(p1 === p2)
    {   
        result.innerText = (()=>{
            if(score1>score2)
                return `Game Over! Player 1 won the game by ${Math.abs(score1-score2)} points`
            else if(score2>score1)
                return `Game Over! Player 2 won the game by ${Math.abs(score1-score2)} points`
            else
                return `Game Over! Match Tied!`
            })();


        throwBtn.setAttribute("style","display:none")
    }
    else
    {
        result.innerText = "Try Again!"
    }
}

function startOver(){
    // player1.innerText = player2.innerText = palyer1Score.innerText = palyer2Score.innerText = score1 = score2 = attempt.innerText = 0
    player1.innerText = 0
    player2.innerText = 0
    palyer1Score.innerText = 0
    palyer2Score.innerText = 0
    score1 = score2 = 0
    attempt.innerText = 0
    result.innerText = ""
    throwBtn.setAttribute("style","display:inline")
    attemptValue = 0
}
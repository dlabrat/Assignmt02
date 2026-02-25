//The “Coin Flip” Game
//Usage: Use nested conditional statements

let randomNum = Math.round(Math.random())
let coinFlip = randomNum
let choice = prompt('Plesae select Heads or Tails (enter h or t): ')

//document.write(coinFlip)

if (choice === 'h') {
    if (coinFlip > 0) {
        alert('The flip was heads and you chose heads...you win!')
    } else if (coinFlip  <= 0) {
        alert('The flip was tails but you chose heads...you lose!')
    }
}else if (choice === 't') {
     if (coinFlip < 0) {
        alert('The flip was tails and you chose tails...you win!')
    } else if (coinFlip  >= 0) {
        alert('The flip was heads but you chose tails...you lose!')
    }
} else {
    alert('Thanks for playing.')
}

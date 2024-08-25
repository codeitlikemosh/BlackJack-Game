let player = {
    name: "Ritu" ,
    chips: 145
}


let Card = []
let sum = 0
let hasBlackjack = false
let isAlive = false
let message =""

let messageEl = document.getElementById("message-el")
let SumEl = document.getElementById("sum-el")
let CardEl = document.getElementById("cards-el")

let playerEl = document.getElementById("player-el")
playerEl.textContent = player.name + ": $" + player.chips

function getRandomCard(){
    let randomNumber = Math.floor(Math.random()*13)+1
    if(randomNumber > 10){
     return 10
    } else if(randomNumber === 1){
    return 11
    } else {
        return randomNumber
    }
}


function renderGame(){
   CardEl.textContent = "Cards: "

for (let i = 0; i < Card.length; i++){
    CardEl.textContent += Card[i] + " "
}

   SumEl.textContent = "Sum: " + sum
   if (sum <= 20) {
    message = "Do You Want A New Card?"
   } else if (sum === 21){
    message = "You Got A Blackjack"
    hasBlackjack = true
   } else {
    message = "You're Out Of Game"
    isAlive = false
}
    messageEl.textContent = message
}

function newCard(){
   if (isAlive === true && hasBlackjack === false){
    let card = getRandomCard()
   sum += card
   Card.push(card)
   renderGame()
   }
}

function StartGame(){
    isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    Card = [firstCard,secondCard]
    sum = firstCard + secondCard
    renderGame()
}
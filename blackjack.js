let Cards = []
let Sum = 0
let moneyStatus = document.getElementById("money")
let cardNumber = document.getElementById("card")
let sumNumber = document.getElementById("sum")
let displayInfo = document.getElementById("displayinfo")
let message = ""
let hasBlackJackGame = false
let isAlive = false
let startAlive = true
let player = {
    name: "Gbenga:",
    money: "$400",
    bonus: "$1000"
}
moneyStatus.textContent = player.name + " " + player.money

function getRandomCard(){
    let randomNumber = Math.floor( Math.random() * 13 ) + 1 
    if (randomNumber > 10){
        return 11
    }else if (randomNumber === 1){
        return 11
    }else{
        return randomNumber
    }
}

function startGame(){
    if ( startAlive === true){
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    Cards = [firstCard, secondCard]
    Sum = firstCard + secondCard

    renderGame()
    
    }
    startAlive = false
    
}

function renderGame(){
    cardNumber.textContent = "Cards: " 
    for(let i = 0; i < Cards.length; i++){
        cardNumber.textContent += Cards[i] + " "
    }
    sumNumber.textContent = "Sum:" +" " + Sum
    
    if (Sum < 40){
        isAlive = true
        message = "Spin more to hit the jackpot"
    }else if (Sum === 40){
        message = "Congratulations, You hit the jackpot"
        hasBlackJackGame = true
        moneyStatus.textContent = player.name + " " + player.bonus
    }else{
        isAlive = false
        message = "You are out of the game"
    }
    displayInfo.textContent = message
}


function newCard(){
    if (hasBlackJackGame == false && isAlive == true){
    let card = getRandomCard()
    Cards.push(card)
    Sum += card
    renderGame()
    }
}
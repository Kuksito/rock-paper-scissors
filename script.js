const userScore = document.getElementById('user-score-value')
const computerScore = document.getElementById('computer-score-value')
const tieScore = document.getElementById('tie-score-value')
const rockBtn = document.getElementById('rock')
const paperBtn = document.getElementById('paper')
const scissorsBtn = document.getElementById('scissors')
const userChoiceDisplay = document.getElementById('user-choice-value')
const computerChoiceDisplay = document.getElementById('computer-choice-value')
const resetBtn = document.getElementById('reset-btn')

let computerResult

//computer random choice
function getComputerChoice(){
    //make a timer so computer will choose after 1 sec
    // const computerChoices = ['rock', 'paper', 'scissors']

    computerResult = Math.floor(Math.random() * 3)
    console.log(computerResult);
    displayComputerChoice()
}

getComputerChoice()

//display computer choice
function displayComputerChoice(){
    setTimeout(() => {
        const img = document.createElement('img')
    if(computerResult === 0){
        img.src = './imgs/rock.png'
        img.classList.add('rock')
    } else if (computerResult === 1){
        img.src = './imgs/paper.png'
        img.classList.add('paper')
    } else {
        img.src = './imgs/scissors.png'
        img.classList.add('scissors')
    }
    computerChoiceDisplay.append(img)
    }, 1000);
}

//display user choice
rockBtn.addEventListener('click', displayUserChoice)

paperBtn.addEventListener('click', displayUserChoice)

scissorsBtn.addEventListener('click', displayUserChoice)

function displayUserChoice(e){
    const img = document.createElement('img')
    if(e.currentTarget === rockBtn){
        img.src = './imgs/rock.png'
        img.classList.add('rock')
    } else if(e.currentTarget === paperBtn){
        img.src = './imgs/paper.png'
        img.classList.add('paper')
    } else {
        img.src ='./imgs/scissors.png'
        img.classList.add('scissors')
    }
    userChoiceDisplay.append(img)
    checkForUserWin()
    checkForComputerWin()
    checkForTie()
}


// FIX - contains(img.src - not defined)!
//check for win
function checkForUserWin(){
    if((userChoiceDisplay.contains(img.src = 'paper.png')) && (computerChoiceDisplay.contains(img.src = 'rock.png'))){
        return userScore++
    } else if ((userChoiceDisplay.contains(img.src = 'rock.png')) && (computerChoiceDisplay.contains(img.src = 'scissors.png'))){
        return userScore++
    } else if((userChoiceDisplay.contains(img.src = 'scissors.png')) && (computerChoiceDisplay.contains(img.src = 'paper.png'))){
        return userScore++
    } 
}

//check for lose
function checkForComputerWin(){
    if((userChoiceDisplay.contains(img.src = 'rock.png')) && (computerChoiceDisplay.contains(img.src = 'paper.png'))){
        return computerScore++
    } else if ((userChoiceDisplay.contains(img.src = 'scissors.png')) && (computerChoiceDisplay.contains(img.src = 'rock.png'))){
        return computerScore++
    } else if((userChoiceDisplay.contains(img.src = 'paper.png')) && (computerChoiceDisplay.contains(img.src = 'scissors.png'))){
        return computerScore++
    } 
}

//check for tie
function checkForTie(){
    if((userChoiceDisplay.contains(img.src = 'paper.png')) && (computerChoiceDisplay.contains(img.src = 'paper.png'))){
        return tieScore++
    } else if ((userChoiceDisplay.contains(img.src = 'rock.png')) && (computerChoiceDisplay.contains(img.src = 'rock.png'))){
        return tieScore++
    } else if((userChoiceDisplay.contains(img.src = 'scissors.png')) && (computerChoiceDisplay.contains(img.src = 'scissors.png'))){
        return tieScore++
    } 
}
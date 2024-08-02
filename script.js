const containerMessage = document.querySelector('.message')
const userScore = document.getElementById('user-score-value')
const computerScore = document.getElementById('computer-score-value')
const drawScore = document.getElementById('draw-score-value')
const userChoiceDisplay = document.getElementById('user-choice-value')
const computerChoiceDisplay = document.getElementById('computer-choice-value')
const resetBtn = document.getElementById('reset-btn')
const selectionBtns = document.querySelectorAll('[data-selection]')

const imgUser = document.createElement('img')
const imgComputer = document.createElement('img')
const winContainer = document.createElement('div')
const winText = document.createElement('p')


let computerResult
let userScoreValue = 0;
let computerScoreValue = 0;
let drawScoreValue = 0;
userScore.textContent = `${userScoreValue}`
computerScore.textContent = `${computerScoreValue}`
drawScore.textContent = `${drawScoreValue}`

// Kyle helped with that
selectionBtns.forEach(btn => {
    btn.addEventListener('click', ()=>{
        const selectionBtnName = btn.dataset.selection
        displayUserChoice(selectionBtnName),
        getComputerChoice()
        checkForWinOrDraw(selectionBtnName)
    })
})

//computer random choice
function getComputerChoice(){
    computerResult = Math.floor(Math.random() * 3)
    displayComputerChoice()
}

//display computer choice
function displayComputerChoice(){
    removeComputerChoice()
    if(computerResult === 0){
        imgComputer.src = './imgs/rock.png'
    } else if (computerResult === 1){
        imgComputer.src = './imgs/paper.png'
    } else {
        imgComputer.src = './imgs/scissors.png'
    }
    imgComputer.classList.add('img')
    computerChoiceDisplay.append(imgComputer)
}

function displayUserChoice(choice){
    removeUserChoice()
    if(choice){
        imgUser.src = `./imgs/${choice}.png`
        imgUser.classList.add('img')
        userChoiceDisplay.append(imgUser)
    }  
}

// remove user choice from container
function removeUserChoice(){
   return imgUser.remove()
}

// remove computer choice from container
function removeComputerChoice(){
    return imgComputer.remove()
}

function checkForWinOrDraw(btn){
    const userBtn = btn
    // check for user win
    if(userBtn === 'rock' && computerResult === 2 || userBtn === 'paper' && computerResult === 0 || userBtn === 'scissors' && computerResult === 1){
        userScore.textContent = ''
        userScoreValue += 1
        userScore.append(userScoreValue)
        winOrDrawMessage('You win!')
        } 
    // check for computer win
    if(userBtn === 'rock' && computerResult === 1 || userBtn === 'paper' && computerResult === 2 || userBtn === 'scissors' && computerResult === 0){
        computerScore.textContent = ''
        computerScoreValue += 1
        computerScore.append(computerScoreValue)
        winOrDrawMessage('Computer win!')
    } 
    // check for a draw
    if(userBtn === 'rock' && computerResult === 0 || userBtn === 'paper' && computerResult === 1 || userBtn === 'scissors' && computerResult === 2){
        drawScore.textContent = ''
        drawScoreValue += 1
        drawScore.append(drawScoreValue)
        winOrDrawMessage(`It's a draw!`)
    } 
}

function winOrDrawMessage(text){
    setTimeout(() => {
    winContainer.classList.add('win')
    winText.textContent = `${text}`
    winContainer.append(winText)
    containerMessage.append(winContainer)
    document.body.style.background ='rgb(71 63 63 / 74%)'
    }, 500);
    removeMessage()
}

function removeMessage(){
    setTimeout(() => {
    winContainer.remove()
    document.body.style.background ='none'
    }, 1500);
}

resetBtn.addEventListener('click', () => {
    window.location.reload(true)
})

const containerMessage = document.querySelector('.message');
const userScore = document.getElementById('user-score-value');
const computerScore = document.getElementById('computer-score-value');
const drawScore = document.getElementById('draw-score-value');
const userChoiceDisplay = document.getElementById('user-choice-value');
const computerChoiceDisplay = document.getElementById('computer-choice-value');
const resetBtn = document.getElementById('reset-btn');
const selectionBtns = document.querySelectorAll('[data-selection]');

const imgUser = document.createElement('img');
const imgComputer = document.createElement('img');
const winContainer = document.createElement('div');
const winText = document.createElement('p');

const rulesContainer = document.createElement('div');
const rulesText = document.createElement('p');
const btnStart = document.createElement('button');

let computerResult;
let userScoreValue = 0;
let computerScoreValue = 0;
let drawScoreValue = 0;
let btnClicked = 0;
userScore.textContent = `${userScoreValue}`;
computerScore.textContent = `${computerScoreValue}`;
drawScore.textContent = `${drawScoreValue}`;

function startGame(){
    rulesContainer.classList.add('rules');
    rulesText.classList.add('rules-text');
    btnStart.classList.add('btn-start')
    rulesText.textContent = "After you've played 5 rounds the game will start over.";
    btnStart.textContent = 'Start';
    btnStart.addEventListener('click', ()=> {
        rulesContainer.remove();
        document.body.style.background ='none';
    })
    rulesContainer.append(rulesText);
    rulesContainer.append(btnStart);
    containerMessage.append(rulesContainer);
    document.body.style.background ='rgb(71 63 63 / 74%)';
}

startGame();

// Kyle helped with that
selectionBtns.forEach(btn => {
    btn.addEventListener('click', ()=>{
        const selectionBtnName = btn.dataset.selection;
        btnClicked++;
        console.log(btnClicked);
        displayUserChoice(selectionBtnName);
        getComputerChoice();
        checkForWinOrDraw(selectionBtnName);
        if(btnClicked === 5) {
            playRound()
        }
    })
})

function getComputerChoice(){
    computerResult = Math.floor(Math.random() * 3);
    displayComputerChoice();
}

function displayComputerChoice(){
    removeComputerChoice()
    if(computerResult === 0){
        imgComputer.src = './imgs/rock.png';
    } else if (computerResult === 1){
        imgComputer.src = './imgs/paper.png';
    } else {
        imgComputer.src = './imgs/scissors.png';
    }
    imgComputer.classList.add('img');
    computerChoiceDisplay.append(imgComputer);
}

function displayUserChoice(choice){
    removeUserChoice()
    if(choice){
        imgUser.src = `./imgs/${choice}.png`;
        imgUser.classList.add('img');
        userChoiceDisplay.append(imgUser);
    }  
}

function removeUserChoice(){
   return imgUser.remove();
}

function removeComputerChoice(){
    return imgComputer.remove();
}

function checkForWinOrDraw(btn){
    const userBtn = btn;

        if(userBtn === 'rock' && computerResult === 2 || userBtn === 'paper' && computerResult === 0 || userBtn === 'scissors' && computerResult === 1){
            userScore.textContent = '';
            userScoreValue += 1;
            userScore.append(userScoreValue);
        }

        if(userBtn === 'rock' && computerResult === 1 || userBtn === 'paper' && computerResult === 2 || userBtn === 'scissors' && computerResult === 0){
            computerScore.textContent = '';
            computerScoreValue += 1;
            computerScore.append(computerScoreValue);
        } 

        if(userBtn === 'rock' && computerResult === 0 || userBtn === 'paper' && computerResult === 1 || userBtn === 'scissors' && computerResult === 2){
            drawScore.textContent = '';
            drawScoreValue += 1;
            drawScore.append(drawScoreValue);
        } 

}

function playRound(){
    if(userScoreValue === 4 || userScoreValue === 3 || userScoreValue === 2 && drawScoreValue === 2){
        winOrDrawMessage('You win!');
    }
    if(computerScoreValue === 4 || computerScoreValue === 3 || computerScoreValue === 2 && drawScoreValue === 2){
        winOrDrawMessage('Computer win!');
    }
    if(drawScoreValue === 4 || drawScoreValue === 3 || computerScoreValue === 2 && userScoreValue === 2){
        winOrDrawMessage(`It's a draw!`);
    }

    setTimeout(() => {
        window.location.reload(true);
        }, 1500);
}

function winOrDrawMessage(text){
    setTimeout(() => {
    winContainer.classList.add('win');
    winText.textContent = `${text}`;
    winContainer.append(winText);
    containerMessage.append(winContainer);
    document.body.style.background ='rgb(71 63 63 / 74%)';
    }, 500);
    removeMessage();
}

function removeMessage(){
    setTimeout(() => {
    winContainer.remove();
    document.body.style.background ='none';
    }, 1500);
}

resetBtn.addEventListener('click', () => {
    window.location.reload(true);
})

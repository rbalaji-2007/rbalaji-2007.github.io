var drawText = document.getElementById('draw');
var winText = document.getElementById('win');
var loseText = document.getElementById('lose');
const playerText = document.getElementById('playerText');
const computerText = document.getElementById('computerText');
const humanDisplay = document.getElementById('humanDisplay');
const computerDisplay = document.getElementById('computerDisplay');
const btnContiner = document.getElementById('btnContiner');
const playerDisplay = document.getElementById('playerDisplay');
const resText = document.getElementById('resText');
var playerChoice;
var computerChoiceText;

var draw=0;
var win=0;
var lose=0;

function rock(){
    playerChoice='rock';
    console.log('You: '+playerChoice);
    computerChoice();

}

function paper(){
    playerChoice='paper';
    console.log('You: '+playerChoice);
    computerChoice();
}

function scissor(){
    playerChoice='scissors';
    console.log('You: '+playerChoice);
    computerChoice();
}

function computerChoice(){

    var rand = Math.floor(Math.random()*3)

    switch (rand) {
        case 0:
            computerChoiceText='rock';
            console.log('computer: '+computerChoiceText);
            break;

        case 1:
            computerChoiceText='paper';
            console.log('computer: '+computerChoiceText);
            break;

        case 2:
            computerChoiceText='scissors';
            console.log('computer: '+computerChoiceText);
            break;
    
        default:
            break;
    }

    checkWinner();

}

function checkWinner(){
    if (playerChoice==computerChoiceText){
        if (playerChoice=='rock'){
            humanDisplay.textContent='👊';
            computerDisplay.textContent='👊';
        }
        if (playerChoice=='paper'){
            humanDisplay.textContent='🤚';
            computerDisplay.textContent='🤚';
        }
        if (playerChoice=='scissors'){
            humanDisplay.textContent='✌️';
            computerDisplay.textContent='✌️';
        };
    draw+=1
    resText.textContent='Result: Draw'
    }
    else if (playerChoice=='rock' && computerChoiceText=='scissors'){
        win+=1;
        humanDisplay.textContent='👊';
        computerDisplay.textContent='✌️';
        resText.textContent='Result: You win'
    }

    else if (playerChoice=='scissors' && computerChoiceText=='paper'){
        win+=1;
        humanDisplay.textContent='✌️';
        computerDisplay.textContent='🤚';
        resText.textContent='Result: You win'
    }

    else if (playerChoice=='paper' && computerChoiceText=='rock'){
        win+=1;
        humanDisplay.textContent='🤚';
        computerDisplay.textContent='👊';
        resText.textContent='Result: You win'
    }

    else if (playerChoice=='rock' && computerChoiceText=='paper'){
        lose+=1;
        humanDisplay.textContent='👊';
        computerDisplay.textContent='🤚';
        resText.textContent='Result: You Lose'
    }

    else if (playerChoice=='paper' && computerChoiceText=='scissors'){
        lose+=1;
        humanDisplay.textContent='🤚';
        computerDisplay.textContent='✌️';
        resText.textContent='Result: You Lose'
    }

    else if (playerChoice=='scissors' && computerChoiceText=='rock'){
        lose+=1;
        humanDisplay.textContent='✌️';
        computerDisplay.textContent='👊';
        resText.textContent='Result: You Lose'
    }

    winText.textContent=win+'|';
    loseText.textContent=lose+'|';
    drawText.textContent=draw+'|';
    
}
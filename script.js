// 1. Create a function called getComputerChoice that will randomly return one of three options: rock, paper, or scissors.

function getComputerChoice(compChoice){ 
   let num =  Math.floor(Math.random() * 3) + 1;

   if(num === 1){
    num = 'rock'
   } else if(num === 2){
    num = 'paper'
   } else {
    num = 'scissors'
   }
return num;


}
getComputerChoice();


function playRound(playerSelection, computerSelection){
    const win = 'You win!';
    const lose = 'You lose!';
    const tie = 'You tie! Try again!';
    if((playerSelection === 'rock' && computerSelection === 'scissors') 
    || (playerSelection === 'paper' && computerSelection === 'rock') 
    || (playerSelection === 'scissors' && computerSelection === 'scissors')) {
        return win;
    } else if ((playerSelection === 'rock' && computerSelection === 'paper')
            ||(playerSelection === 'paper' && computerSelection === 'scissors')
            ||(playerSelection === 'scissors' && computerSelection === 'rock')){
                return lose;
    } else {
        return tie
    }

}

const playerSelection = prompt('Pick: Rock, Paper or Scissors').toLowerCase();
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));
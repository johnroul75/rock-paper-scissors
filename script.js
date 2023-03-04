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

// 2. Create a function that plays a round of rock paper scissors and console log the results of the round.

function playRound(playerChoice, computerChoice){
const playerSelection = prompt('Pick: Rock, Paper or Scissors').toLowerCase();
const computerSelection = getComputerChoice();
    const win = 'You win!';
    const lose = 'You lose!';
    const tie = 'You tie! Try again!';
    if((playerSelection === 'rock' && computerSelection === 'scissors') 
    || (playerSelection === 'paper' && computerSelection === 'rock') 
    || (playerSelection === 'scissors' && computerSelection === 'scissors')) {
        console.log(win);
        return win;
    } else if ((playerSelection === 'rock' && computerSelection === 'paper')
            ||(playerSelection === 'paper' && computerSelection === 'scissors')
            ||(playerSelection === 'scissors' && computerSelection === 'rock')){
                console.log(lose)
                return lose;
    } else {
        console.log(tie);
        return tie;
    }
}


playRound();


        
// 3. Write a new function which calls the playRound function inside of this one to playa 5 round game that keeps score and reports a winner and loser at the end.

function game(){
    play
}
 
// Random pseuocode:
// create function called game
// create a variable inside the function called 'tries'
// 
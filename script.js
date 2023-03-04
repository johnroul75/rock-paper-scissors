// Create a function called getComputerChoice that will return one of three options: rock, paper, or scissors.

function getComputerChoice(compChoice){ 
   let num =  Math.floor(Math.random() * 3) + 1;
   if(num === 1){
    num = 'Rock'
   } else if(num === 2){
    num = 'Paper'
   } else {
    num = 'Scissors'
   }
console.log(num);
return num;


}

getComputerChoice();



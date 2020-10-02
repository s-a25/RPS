 //We are caching these variables to use later on.


 //We need the scores, the actual variables
 const userScore = 0;
 const computerScore = 0;
 //these are the DOM variables. The span is reference to they've been put in span tags  
  const userScore_span = document.getElementById("user-score");
  const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_div = document.querySelector(".result");
//the rock, paper and scissor buttons:
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s"); 

function getComputerChoice(){
    //the only choices are r p s
    const choices = ['r', 'p', 's'];
    //math is a built in object in JS and .random is a method that exists in that math object
     const randomNumber = Math.floor(Math.random() * 3);
     //we don't want the number, just the element
     return choices(randomNumber);
}
 
//the game function is going to take a user input, a user choice. And when somebody clicks on any of these buttons, take the value of the buttons (what ever it is) and compare it to the computer's choice and get ther result back 
function game (userChoice) {
 //this is to get the computer choice (see function above!)
 const computerChoice = getComputerChoice();
}
function main() { 
//Adding event listners to each button
rock_div.addEventListener('click', function() {
 game("r");
})

paper_div.addEventListener('click', function() {
    game("p");
   })

scissors_div.addEventListener('click', function() {
    game("s");
   })
}

//this is to run the funtion main
main();

   //21 to 31 we created functions, so that when a button is clicked, an argument is invoked
   //There is also a function before this called main, which wraps all of the above.
   //So, when 'r' for example gets pressed, it will then be passed into userChoice, which then gets passed to 
   
   //So, when I click on the rock button, the user choice will always be rock, but the computer's choice will always change (random).

   //Computer logic using the .switch method. Rather than if, else and else if statements
   



const choices = ["rock" , "paper" , "scissor"];

const playerDisplay = document.getElementById("palyerDisplay");

const computerDisplay = document.getElementById("computerDisplay");

const resultDisplay = document.getElementById("resultDisplay");

function playGame(playerChoice)
{
    let computerChoice = choices[Math.floor(Math.random() * 3)];
   
    let result = "";

    if(computerChoice === playerChoice){

        result = "It is a Tie";   
    }

     else{
        switch(playerChoice){

                case "rock":
                    result = computerChoice === "scissor" ?  "You Win" : "You Lose";
                    break;

                case "paper":
                    result = computerChoice === "scissor" ?  "You Lose" : "You Win";
                    break;
                
                case "scissor":
                    result = computerChoice === "rock" ?  "You Lose" : "You Win";
                    break;    
         
        }


     }   

     playerDisplay.innerHTML = (`Player: ${playerChoice}`); 
     computerDisplay.innerHTML = (`Computer: ${computerChoice}`); 
     resultDisplay.innerHTML = (`${result}`);

     resultDisplay.classList.remove("greenText" , "redText");

     switch (result) {
        case "You Win":
            resultDisplay.classList.add("greenText");
            break;
     
        case "You Lose":
            resultDisplay.classList.add("redText");
            break;
     }

     
}
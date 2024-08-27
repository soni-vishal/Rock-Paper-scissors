  let userscore = 0;
  let compscore = 0;
  const choices = document.querySelectorAll(".choice");
   const msgpara = document.querySelector("#msg");
   const userScorePara = document.querySelector("#user-score");
   const CompScorePara = document.querySelector("#comp-score");
   
  //computer choice from option array

        const gencompChoice = () =>{
          const option =["rock","paper","scissors"]
          const randIdx = Math.floor(Math.random()*3);
          return option[randIdx]


 }
   const Drawgame =() =>{
   // console.log("Game was draw")
    msgpara.innerText = ("Game was draw play Again");
    msgpara.style.backgroundColor = "#081b31";
   }

       const showWinner = (userwin ,userchoice ,compChoice) =>{
          if(userwin){
            userscore++ ;
            userScorePara.innerText = userscore ;
            //console.log("You Win");
          msgpara.innerText = `You Win Your ${userchoice} beats ${compChoice}`;
          msgpara.style.backgroundColor = "#008000";

          } else{
            compscore++;
            CompScorePara.innerText = compscore;
           // console.log("You lose");
            msgpara.innerText = `You lose Comp. ${compChoice} beats ${userchoice}`; 
            msgpara.style.backgroundColor = "#ff0000";
      };
      
    }

        const playGame = (userchoice) =>{
        //console.log("user choice = ", userchoice);
        const compChoice = gencompChoice();
       // console.log("comp choice =",compChoice);

              if(userchoice === compChoice){
                //Draw game
                Drawgame();
                  } else{
                    let userwin = true;
                    if(userchoice ==="rock"){
                      //scissors, paper
                      userwin = compChoice=== "paper" ? false : true;
                    } else if(userchoice === "paper") {
                      //rock,scissors
                      userwin = compChoice === "scissors" ? false : true;
                    } else{
                      userwin = compChoice === "rock" ? false : true;
                    };
                    showWinner(userwin, userchoice, compChoice);
            }
        };

        choices.forEach((choice) => {
          choice.addEventListener("click",() =>{
            const userchoice = choice.getAttribute("id");
            playGame(userchoice);    
    });
  });
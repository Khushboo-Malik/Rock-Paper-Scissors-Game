let userScore=0;
let compScore=0;

const choices=document.querySelectorAll(".image");
let msg=document.querySelector(".msg");
let user=document.querySelector("#user-score");
let comp=document.querySelector("#comp-score");

const genCompChoice=()=>{
    //For increased modularity/reusability of code
    const choices=["rock","paper","scissors"
    ]
    const ranIndx=Math.floor(Math.random()*3);
    const comChoice=choices[ranIndx];
    return comChoice;
}

isDraw=()=>{
    console.log("It's a draw");
    msg.innerText="It's a draw.Play again."
    msg.style.backgroundColor="black";
}

showWinner=(userWin,userChoice,compChoice)=>{
    if(userWin){
        console.log("You win!");
        msg.innerText=`You won! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor="green";
        userScore++;
        user.innerText=userScore;
    }else{
        console.log("You lose...");
        msg.innerText=`You lose...${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor="red";
        compScore++;
        comp.innerText=compScore;
    }
}

const playGame=(userChoice)=>{
    //Function definition with parameter
    const compChoice=genCompChoice();
    console.log("User's choice: ",userChoice);
    console.log("Computer's choice: ",compChoice);

    if(userChoice===compChoice){
        isDraw();
    }else{
        let userWin=true;
        if(userChoice==="rock"){
            //Ternary Operator
            userWin=compChoice==="paper"?false:true;
        }else if(userChoice==="paper"){
            userWin=compChoice==="rock"?true:false;
        }else{
            userWin=compChoice==="rock"?false:true;
        }
        showWinner(userWin,userChoice,compChoice);
    }
   
}
choices.forEach((choice)=>{
    console.log("choice:",choice);
    choice.addEventListener("click",()=>{
        let userChoice=choice.getAttribute("id");
        console.log(`User clicked on ${userChoice}`);
        playGame(userChoice) //Function call with argument
    });
});

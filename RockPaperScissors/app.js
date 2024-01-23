let userscore = 0;
let compscore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#computer-score");
const drawGame = () => {
    console.log("Game was draw");
    msg.innerText = "Game was draw";
    msg.style.backgroundColor = "black";
};

const genCompChoice = () => {
    const options = ["rock","paper","scissor"];
    const ranIdx = Math.floor(Math.random()*3);
    return options[ranIdx];
};
const showWinner =  (userwin,userChoice,compChoice) => {
    if(userwin){
        userscore++;
        userScorePara.innerText = `${userscore}`
        console.log("you win");
        msg.innerText = `You win! ${userChoice} wins over ${compChoice}`;
        msg.style.backgroundColor = "green";
    }
    else{
        compscore++;
        compScorePara.innerText = `${compscore}`
        console.log("you lose");
        msg.innerText = `You lose  ${userChoice} losses over ${compChoice}`;
        msg.style.backgroundColor = "red";
    }
}

const playGame = (userChoice) => {
    console.log("user choice  = ",userChoice);
    const compChoice = genCompChoice();
    console.log("comp choice = ",compChoice)


    if(userChoice === compChoice)
    drawGame();
else{
    let userwin = true;
    if(userChoice === "rock"){
        userwin = compChoice === "paper"?false:true;
    }
    else if(userChoice == "paper"){
        userwin = compChoice === "scissor"?false:true;
    }
    else{
        userwin = compChoice === "rock"?false:true;
    }
    showWinner(userwin,userChoice,compChoice);
}
};

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        // console.log("Choice was clicked",userChoice);
        playGame(userChoice);
    });
});
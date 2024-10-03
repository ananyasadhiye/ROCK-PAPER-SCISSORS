let userscore=0;
let compscore=0;

const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#win");
const upara=document.querySelector("#user-score");
const cpara=document.querySelector("#comp-score");


const gencomp=()=>{


    const options=["rock","paper","scissors"];
    const rand=Math.floor(Math.random()*3);
    return options[rand];
};
const drawgame=()=>
{
  msg.innerText="game was draw. play Again.";
  msg.style.backgroundColor="#081b31";
};

const showwinner=(userwin,userChoice,compchoice)=>{
    if(userwin){
        userscore++;
        upara.innerText=userscore;
        msg.innerText=`You win! Your ${userChoice} beats ${compchoice}`;
        msg.style.backgroundColor="green";
    }
    else{
        compscore++;
        cpara.innerText=compscore;
        msg.innerText= `You lost. ${compchoice} beats your ${userChoice}`;
        msg.style.backgroundColor="red";
    }
};
const playGame=(userChoice)=>
{
    const compchoice=gencomp();
    if(userChoice===compchoice){
        drawgame();
    }
    else{
        let userwin=true;
        if (userChoice==="rock"){
            userwin=compchoice==="paper" ? false:true;
        }
        else if(userChoice==="paper"){
            userwin=compchoice==="scissors"? false:true;

        }
        else{
            userwin=compchoice==="rock"? false:true;
        }
        showwinner(userwin,userChoice,compchoice);
    
    }
};
choices.forEach((choice) => {
    
    choice.addEventListener("click", () => {
      const userChoice = choice.getAttribute("id");
      playGame(userChoice);
    });
  });
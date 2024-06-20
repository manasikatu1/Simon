let gameSeq = [];
let userSeq = [];

let start = false;
let level = 0;
h2 = document.querySelector("h2");
let btns = ["orange","blue","green","purple","red","yellow"];

document.addEventListener("keypress",function(){
    if(start == false){
        console.log("Game is started");
        start = true;
        levelUp();
    }
});


function gameFlash(btn){
    btn.classList.add("gameflash");

    setTimeout( function(){
        btn.classList.remove("gameflash");
    },250);
}

function userFlash(btn){
    btn.classList.add("userflash");

    setTimeout( function(){
        btn.classList.remove("userflash");
    },250);
}




function levelUp(){
    userSeq = [];
    level++;
    h2.innerText = `level ${level}`;

    //Random button to choose
    let ranIdx = Math.floor(Math.random() * 5);
    let  ranColors = btns[ranIdx];
     let ranBtn = document.querySelector(` .${ranColors}`);
    gameSeq.push(ranColors);
    console.log(gameSeq);
    // console.log(ranIdx);
    // console.log(ranColors);
    // console.log(ranBtn);

    gameFlash(ranBtn);
}


function checkValue(idx){

   // console.log("Curr Level ",level);
//let idx = level - 1;
    if(userSeq[idx] === gameSeq[idx]){
       if(userSeq.length == gameSeq.length){
        setTimeout(levelUp,1000);
       }
    }else{
        h2.innerHTML=  `Game Over!! Your score was <b>${level}</b><br>
        Press any key to start the game.`;

        document.querySelector("body").style.backgroundColor = "red";
        setTimeout( function(){
            document.querySelector("body").style.backgroundColor = "white";
        },250);
        reset();
    }
}
function btnPress(){
   // console.log("button Press");

   let btn = this;
   userFlash(btn);

   userColor = btn.getAttribute("id");
   console.log(userColor);
   userSeq.push(userColor);

   checkValue(userSeq.length - 1);
}

let Allbtns = document.querySelectorAll(".btn");
    for(btn of Allbtns){
     btn.addEventListener("click",btnPress)
    }

    function reset(){
        start = false;
        level = 0;
        gameSeq =[];
        userSeq =[];
    }
const board = document.querySelector(".game_board");
const scoreBoard = document.querySelector(".cscore");
const hscore = document.querySelector(".hscore");

let foodY = 10 , foodX=13;
let snakeY=10 , snakeX=10;
let vX=0 , vY=0;
let gameOver=false;
let score = 0 , highscore=25;
let setIntervalId;
let snakeBody = [];

const gameOver_Ops = () =>{
    clearInterval(setIntervalId);
    alert(`Game Over. Score ${score} . Press Ok to Play again`);

    location.reload();
}

const changeFood = () =>{
    foodX = Math.floor(Math.random() * 40 +1);
    foodY = Math.floor(Math.random() * 40 +1);
}
const moveSnake = e =>{
    console.log(e);
    if(e.key === "ArrowUp" && vY!=1){
        vX = 0;
        vY = -1;
    }else if(e.key === "ArrowDown" && vY!=-1){
        vX = 0;
        vY = 1;
    }else if(e.key === "ArrowLeft" && vX!=1){
        vX = -1;
        vY = 0;
    }else if(e.key === "ArrowRight" && vX!=-1){
        vX = 1;
        vY = 0;
    }
    initGame();
}
const initGame = () =>{
    if(gameOver){
        return gameOver_Ops();
    }
    let markUp = `<div class="food" style = "grid-area : ${foodY} / ${foodX}"></div>`;
    snakeX+=vX;
    snakeY+=vY;
    if(snakeX>40 || snakeY>40 || snakeX<0 || snakeY<0){
        gameOver=true;
    }
    if(snakeX === foodX && snakeY===foodY){
        score++;
        highscore = Math.max(score , highscore);
        scoreBoard.innerHTML = `Score : ${score}`;
        hscore.innerHTML = `High Score : ${highscore}`;
        changeFood();
        snakeBody.push([snakeX , snakeY]);
        console.log(snakeBody);
    }
    for(let i=snakeBody.length-1 ; i>=0 ; i--){
        snakeBody[i]=snakeBody[i-1];
    }

    snakeBody[0] = [snakeX , snakeY]; 
    for(let i=0 ; i<snakeBody.length ; i++){
        markUp += `<div class="snake" style = "grid-area : ${snakeBody[i][1]} / ${snakeBody[i][0]}"></div>`;

    }

    board.innerHTML = markUp;
    
}


changeFood();
setIntervalId =  setInterval(initGame, 125); 
document.addEventListener('keydown' , moveSnake);
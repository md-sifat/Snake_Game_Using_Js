const board = document.querySelector(".game_board");

let foody = 12 , foodx=10;
const initGame = () =>{
    const markUp = `<div class="food" style = "grid-area : ${foody} / ${foodx}"></div>`;
    const food = document.createElement("div");
    food.innerHTML = markUp;
    board.appendChild(food);
    
}
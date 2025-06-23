let boxes = document.querySelectorAll('.box');
let resetBtn = document.querySelector('.reset');
let newBtn = document.querySelector('.new-btn');
let msgContainer=document.querySelector(".msg-container");
let msg=document.querySelector("#msg");
let turn0 = true;

const winCombos = [[0, 1, 2], [0, 3, 6], [0, 4, 8], [1, 4, 7], [2, 5, 8], [2, 4, 6], [3, 4, 5], [6, 7, 8]];

boxes.forEach(box => {
    box.addEventListener("click", () => {
        if (turn0) {
            box.innerHTML = "O";
            turn0 = false;
        }
        else {
            box.innerHTML = "X";
            turn0 = true;
        }
        box.disabled = true;

        checkWinner();
    });
});
const resetGames = () => {
    msgContainer.classList.add("hide");
    turn0 = true;
    enabledboxes();
    clearBoard();
    winner = null;
    moves = 0;
}

const clearBoard = () => {
    const boxes = document.querySelectorAll('.box');
    boxes.forEach(box => {
        box.textContent = '';
        box.classList.remove('disabled');
    });
}
const disabledboxes =() =>{
    for(let box of boxes){
        box.disabled=true;
    }
}
const enabledboxes =() =>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText=" "; 
    }
}
const showWinner = (winner) => {
    msg.innerHTML=`${winner} is the winner`;
    msgContainer.classList.remove("hide");
    disabledboxes();
};
const checkWinner = () => {
    for (let pattern of winCombos) {
        let pos1val = boxes[pattern[0]].innerHTML;
        let pos2val = boxes[pattern[1]].innerHTML;
        let pos3val = boxes[pattern[2]].innerHTML;

        if (pos1val !== "" && pos2val !== "" && pos3val !== "") {
            if (pos1val == pos2val && pos2val == pos3val) {
                console.log("Winner", pos1val);
                showWinner(pos1val);
            }
        }
    }
};    
newBtn.addEventListener("click",resetGames);
resetBtn.addEventListener("click",resetGames);
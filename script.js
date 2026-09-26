let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#reset-btn");
let newGamebtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");
let turno = true;
const winPatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];
const resetGame = () =>{
    turno = true;
    enableBoxes();
    msgContainer.classList.add("hide");
}
boxes.forEach((box) => {
     box.addEventListener("click",() =>{
        if(turno)
       {
         box.innerText = "O";
         turno = false;
       }
       else{
         box.innerText = "X";
         turno = true;
       }
       box.disabled = true;
       checkWinner();
     });
});

const disableBoxes = () => {
    for(let box of boxes){
        box.disabled = true;
    }
};
const enableBoxes = () => {
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
};
const showWinner = (winner) => {
    msg.innerText = `Congratulations, Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableBoxes();
};

const checkWinner = () => {
         for(pattern of winPatterns){
            let posv1 = boxes[pattern[0]].innerText;
            let posv2 = boxes[pattern[1]].innerText;
            let posv3 = boxes[pattern[2]].innerText;
            if(posv1!= "" && posv2 != "" && posv3 != ""){
                if(posv1 === posv2 && posv2 === posv3){
                showWinner(posv1);
                }
            }

         }
};
newGamebtn.addEventListener("click" , resetGame);
resetbtn.addEventListener("click" , resetGame);
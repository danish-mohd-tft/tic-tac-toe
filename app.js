let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#reset-btn");
let newgamebtn = document.querySelector("#newgame-btn");

let turnO = true;
const winArray = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];

boxes.forEach((box) => {
    box.addEventListener("click",() =>{
        console.log("box was clicked")
        if(turnO){
            box.innerText = "O";
        }else{
            box.innerText = "X";
        }
        box.disabled = true;
        turnO = !turnO;
        checkWinner();
    })
})

const checkWinner = () =>{
    winArray.forEach((singleArray) =>{

        let pos1value = boxes[singleArray[0]].innerText;
        let pos2value = boxes[singleArray[1]].innerText;
        let pos3value = boxes[singleArray[2]].innerText;

        if (pos1value != "" && pos2value != "" && pos3value != ""){
            if(pos1value == pos2value && pos2value == pos3value){
                console.log ("We have a winner" + pos1value)
                
                boxes.forEach((box) =>{
                    box.disabled = true;
                });
                showWinner(pos1value);
            }
        }
    })
};

const showWinner = (pos1value) =>{
    alert("We have a winner" +pos1value);
}



const newgamehandler = () =>{
     boxes.forEach((box) =>{
        box.disabled = false;
        box.innerText = "";
        
     })
};

newgamebtn.addEventListener("click", newgamehandler);
resetbtn.addEventListener("click", newgamehandler);
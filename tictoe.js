let box = document.querySelectorAll(".box");
let tunr1 = document.querySelector(".turn1");
let tunr2 = document.querySelector(".turn2");
let msg = document.querySelector(".msg")
let span = document.querySelector("#result")
let playagain = document.querySelector("#btn")
let clickSound = new Audio("click.mp3");
let winnerSound = new Audio("winner.mp3");

turnX = true;
let winnerCondition = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
]
playagain.addEventListener('click', ()=>{
    box.forEach(box=>{
        box.innerText="";
        box.disabled=false;
        box.classList.add("hover");
        msg.classList.add("hide");
        box.classList.remove("b-s")
    })
})


box.forEach(box => {
    box.addEventListener('click', () => {
        clickSound.play();
        if (turnX) {
            box.innerHTML = "X"
            turnX = false;
            tunr2.classList.add("b-s");
            tunr1.classList.remove("b-s");
            box.style.color = "lightblue"
        }
        else {
            box.innerHTML = "O"
            turnX = true;
            tunr2.classList.remove("b-s");
            tunr1.classList.add("b-s");
            box.style.color = "pink"
        }
  box.disabled=true;
        checkWinner()
    })
})

function checkWinner() {
    for (let condition of winnerCondition) {
        let box1 = box[condition[0]].innerHTML;
        let box2 = box[condition[1]].innerHTML;
        let box3 = box[condition[2]].innerHTML;
        if (box1 != "" && box2 != "" && box3 != "") {
            if (box1 === box2 && box2 === box3) {
                showResult(box1)
                winnerSound.play();
                box[condition[0]].classList.add("b-s");
                box[condition[1]].classList.add("b-s");
                box[condition[2]].classList.add("b-s");
            }
        }
    }
}

function showResult(result){
    box.forEach(box=>{
        box.disabled=true;
        box.classList.remove("hover")
    })
msg.classList.remove("hide");
span.innerHTML=result;
if(result==="X"){
    span.style.color="lightblue"
}
else{
    span.style.color="pink"
}
} 
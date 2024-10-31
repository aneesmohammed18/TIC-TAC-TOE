let cells=document.querySelectorAll(".cell");
let turn=false;
let stats=document.getElementById("turnstatus");
stats.innerHTML="CLICK ON ANY BOX TO START THE GAME";


let board= Array(9).fill(null);
const winningCombinations = [
    [0, 1, 2],  
    [3, 4, 5], 
    [6, 7, 8],   
    [0, 3, 6],  
    [1, 4, 7],  
    [2, 5, 8],
    [0, 4, 8],  
    [2, 4, 6]   
];


function win(){
    return winningCombinations.some(combinations =>{
        const[a,b,c] = combinations;
        return board[a]&&board[a]===board[b]&&board[a]===board[c];
    });
    }

    function draw(){
        if (board.every(cell=>cell!==null)&&!win()){
            stats.textContent = "GAME DRAW !";
            stats.style.color="red"
        }
    }

function game(){
cells.forEach((cell,index)=>{
      cell.addEventListener("click",function(){
        if (cell.disabled) return;
            if (turn===false)
            {
                cell.textContent="X";
                board[index]="X"
                turn=true;
                stats.innerHTML="O's Turn";
                cell.disabled=true;
            } 
            else 
            {
                cell.textContent="O";
                board[index]="O"
                turn=false;
                stats.innerHTML="X's Turn";
                cell.disabled=true;
            }
            if (win()) {
                stats.innerHTML = `${cell.textContent} Wins!`;
                cells.forEach(cell => cell.disabled = true);
                confetti({particlecount:60, spread:100});
            }else{
                draw();
            }
      })
})
}


function reset() {
    cells.forEach((cell,index) =>{
        cell.textContent="";
                turn=false;
                stats.innerHTML="CLICK ON ANY BOX TO START THE GAME";
                stats.style.color="white"
                board[index]=null;
                cell.disabled=false;
    })         
}

game();














console.log('Holo Wolo')

let square = 0 //change to function later 

gameBoard()
function gameBoard () {
    let rows = 3; 
    let columns = 3;
    let board = []

    for(i=0; i< rows; i++) {
        board[i] = [];
        for (j=0; j<columns; j++){
            board[i].push(square)
        }
    }

    

console.log(board)
}

function player (){

}

function game () {

}
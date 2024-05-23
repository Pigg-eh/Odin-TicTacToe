let square = 0 //change to function later 


const gameGrid = function (square, {x, y}) { 
    let rows = 3; 
    let columns = 3;
    let grid = []

    for(i=0; i< rows; i++) {
        grid[i] = [];
        for (j=0; j<columns; j++){
            grid[i].push('blanko')
        }
    }

    function insertTics(){
        //array tacs inner array toes
        grid[x].splice(y, 1, square)

    } 
    insertTics()
    helloGrid()  

     function helloGrid(){ //delete later after DOM
        console.table(grid) 
    }
     
}

gameGrid('test', {x:2,y:1}) //insertion method

function player (){ //store player data

}

function game () { //control flow of game
    //change value of certain square 
    
}

//CHANGE VALUE OF ARRAY
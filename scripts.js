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

    function insertMarkers(){
        grid[x].splice(y, 1, square)
    } 

    insertMarkers()
    helloGrid()  

     function helloGrid(){ //delete later after DOM
        console.table(grid) 
    }
     
}

gameGrid('/EX/', {x:2,y:1}) //insertion method

function playerData (){ //store player data

    function createPlayer(name, marker){
        //ternary operator could be of use for the markers /EX/ /OH/ 
        // (condition) ? x : y  
        return{name, marker}
    }    

    const playerUn = createPlayer('Edukun', 'X')
    const playerDeux= createPlayer('Jodadiah', 'O')
    

}

function gameController () { //control flow of game
    //change value of certain square 
    //object to input x,y value 


}

//CHANGE VALUE OF ARRAY
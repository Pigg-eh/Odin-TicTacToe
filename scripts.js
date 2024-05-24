const gameGrid = function (square, {x, y}) { 
    let rows = 3; 
    let columns = 3;
    let grid = []

    for(i=0; i< rows; i++) {
        grid[i] = [];
        for (j=0; j<columns; j++){
            grid[i].push('') //because empty is equal to false
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

function playerData (){ 

    

     function createPlayer(name, marker){
        
        return{name, marker}
    }    
   
    const playerUn = createPlayer('Edukun', 'X')
    const playerDeux= createPlayer('Jodadiah', 'O')

    return [playerUn, playerDeux]

}


function gameController () { 
    const playerArray = playerData()
    console.log(playerArray[0].name) //

    //decide who is the current player

    gameGrid('currentPlayer', {x:2,y:1}) //second bit can take an alert argument for now 
    //object to input x,y value 

    //control flow of game
        

    
    //win condition: 
        //make sure to add if statement checking if false

}

gameController() //should be the only global call
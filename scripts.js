let grid = [] 

function gameGrid (currentMarker, x, y) { 

    if (grid.length === 0){for(i=0; i< 3; i++) {
            grid[i] = [];
            for (j=0; j< 3; j++){
                grid[i].push('') 
            }
        }
    }
    

    const insertMarkers = () => {
        grid[x].splice(y, 1, currentMarker) 
    } 


    const getGrid = () => grid
    const getGridTest = grid

    const helloGrid =  () => { //delete later after DOM
        console.table(getGrid()) 
    }

    return{getGrid, helloGrid, insertMarkers, getGridTest} 
}

function spaceData (){ 

     function createPlayer(name, marker){
        return{name, marker}
    }    
   
    const playerUn = createPlayer('Edukun', 'X')
    const playerDeux= createPlayer('Jodadiah', 'O')

    return [playerUn, playerDeux]

}


function gameController () { 
    const playerArray = spaceData()
    console.log(playerArray[0].marker)

    


    let currentPlayer = playerArray[1]

    if (currentPlayer === playerArray[1]) {
        currentPlayer = playerArray[0]
    } else {
        currentPlayer = playerArray[1]
    }

    placeMarker()
    function placeMarker(){
        x = prompt('pick row number')
        y = prompt('pick column number')
        const gameState = gameGrid(currentPlayer.marker, x,y) //need to save console.table
        
        gameState.insertMarkers()
        gameState.helloGrid()

        
    }


    

    //control flow of game
        

    
    //win condition: 
        //make sure to add if statement checking if false

}
// gameController() in console to play game in console for now
gameController() 

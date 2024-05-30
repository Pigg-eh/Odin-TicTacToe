let grid = [] 

function gameGrid (processedPlayer, x, y) { 

    if (grid.length === 0){for(i=0; i< 3; i++) {
            grid[i] = [];
            for (j=0; j< 3; j++){
                grid[i].push('') 
            }
        }
    }

    const insertMarkers = () => {
        if(grid[x][y] === ''){
            grid[x].splice(y, 1, processedPlayer.marker)
        } else {
            alert('wrong input,please try again') //on wrong input helloGrid is being called twice
            gameController.placeMarker(processedPlayer)
        } 
    } 


    const getGrid = () => grid
    const getGridTest = grid

    const helloGrid =  () => { //delete later after DOM
        console.table(getGrid()) 
    }

    return{getGrid, helloGrid, insertMarkers, getGridTest} 
}

const spaceData=()=>{ 

     function createPlayer(name, marker){
        return{name, marker}
    }    
   
    const playerUn = createPlayer('Edukun', 'X')
    const playerDeux= createPlayer('Jodadiah', 'O')

    return [playerUn, playerDeux]

}

let toggle = true
function gameController () { 
    const playerArray = spaceData()

     
    toggle = toggle ? false : true;
    let currentPlayer = (toggle) ? playerArray[0] : playerArray[1]

    
    console.log(`currentplayername:${currentPlayer.name}`)
    
    placeMarker(currentPlayer)
    function placeMarker(processedPlayer){
        x = prompt('pick row number')
        y = prompt('pick column number')
        const gameState = gameGrid(processedPlayer, x,y) //need to save console.table
        
        gameState.insertMarkers()
        gameState.helloGrid()

        
    }
    gameController.placeMarker = placeMarker

    

    //control flow of game
        

    
    //win condition: 
        //make sure to add if statement checking if false

}
// gameController() in console to play game in console for now
gameController() 

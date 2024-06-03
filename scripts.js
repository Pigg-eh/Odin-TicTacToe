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
            alert('wrong input,please try again') 
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

let toggle=true 
function gameController () { 

   
    
    
        const playerArray = spaceData()
        const gameCall = gameGrid() 
        toggle = !toggle
        let currentPlayer = (toggle) ? playerArray[0] : playerArray[1]

        
        console.log(`currentplayername:${currentPlayer.name}`)
        
        placeMarker(currentPlayer)
        function placeMarker(processedPlayer){
            x = prompt('pick row number')
            y = prompt('pick column number')
            const gameState = gameGrid(processedPlayer, x,y) 
            
            gameState.insertMarkers()

        }
        gameController.placeMarker = placeMarker
        
        gameCall.helloGrid()

        
        winCond(gameCall.getGrid())
        function winCond(array){
            let numberedGrid = [0,1,2,3,4,5,6,7,8]
            winCheck = [].concat(...array);
            return console.log(winCheck)//delete later
            //check arrayFlat against numberedGrid with below conditions
            
            //[0,1,2][3,4,5][6,7,8]
            //[0,3,6][1,4,7][2,5,8]
            //[0,4,8][2,4,6]
        }

}


// gameController() in console to play game in console for now

gameController()

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

let toggle=true //encapsulate the gameController function
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

        
        winCheck(gameCall.getGrid())
        function winCheck(array){

            const winningIndices = [
                [0, 1, 2],
                [3, 4, 5],
                [6, 7, 8],
                [0, 3, 6],
                [1, 4, 7],
                [2, 5, 8],
                [0, 4, 8],
                [2, 4, 6]
            ];
            let roundWon = false
            let flatArray = [].concat(...array);
            console.log(`winCheck: ${flatArray}`)//delete later
            //check arrayFlat against numberedGrid with below conditions
            
            for(i=0; i<=7; i++){
                const threeInARow = winningIndices[i]

                a=flatArray[threeInARow[0]]
                b=flatArray[threeInARow[1]]
                c=flatArray[threeInARow[2]]

                if (a === '' || b === '' || c === '') {
                    continue;
                }
            
                if (a === b && b === c) {
                    roundWon = true;
                    break
                }

            }
            console.log(roundWon)
        }
}


// gameController() in console to play game in console for now

gameController()

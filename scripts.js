

const gameGridCreation = (function(){ 
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
                playGame.placeMarker(processedPlayer)
            } 
        } 


        const getGrid = () => grid
        const getGridTest = grid

        const helloGrid =  () => { //delete later after DOM
            console.table(getGrid())
        }

        return{getGrid, helloGrid, insertMarkers, getGridTest} 
    }
 return {
    gameGrid
 }
})();

const spaceData=()=>{ 

     function createPlayer(name, marker){
        return{name, marker}
    }    
   
    const playerUn = createPlayer('Edukun', 'X')
    const playerDeux= createPlayer('Jodadiah', 'O')

    return [playerUn, playerDeux]

}


const gameController = (function(){ 

    let toggle=true 
    let round = 0
    function gameController () { 
        const playerArray = spaceData()
        const gameCall = gameGridCreation.gameGrid() 
        toggle = !toggle
        let currentPlayer = (toggle) ? playerArray[0] : playerArray[1]

        
        console.log(`currentplayername:${currentPlayer.name}`)
        
        placeMarker(currentPlayer)
        function placeMarker(processedPlayer){
            x = prompt('pick row number')
            y = prompt('pick column number')
            const gameState = gameGridCreation.gameGrid(processedPlayer, x,y) 
            
            gameState.insertMarkers()

        }
        playGame.placeMarker = placeMarker
        gameCall.helloGrid()

    
        winCheck(gameCall.getGrid(),currentPlayer.name)
        
        function winCheck(array,player){

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
            let roundTie = false
            
            let flatArray = [].concat(...array);
            console.log(`winCheck: ${flatArray}`)//delete after DOM
            
            
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
                    alert(`Player: ${player} Wins`) // winner logic here, find way to grab current player
                    break
                }

            }
            round++
            if(round===9){
                roundTie = true
                alert(`IT BE TIE`) //tie logic here
            }
            console.log(`roundWon: ${roundWon}`)//delete after DOM
            console.log(`roundTie: ${roundTie}`)//delete after DOM
            console.log(`ROUND: ${round}`)
        }
    }

return {
    gameController
};
})();

function handleEvents(){
    let squares = document.querySelectorAll('div.square')
    squares.forEach(square => {
        square.addEventListener('click', playGame)
    });
}



const playGame = gameController.gameController
handleEvents()
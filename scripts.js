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
                playGame()
            } 
        } 


        const getGrid = () => grid

        const helloGrid =  () => { //delete later after DOM
            console.table(getGrid())
        }

        return{getGrid, helloGrid, insertMarkers} 
    }

    function clearGrid(){
        grid = []
    }
 return {
    gameGrid,
    clearGrid
 }
})();

const spaceData=()=>{ 

     function createPlayer(name, marker){
        return{name, marker}
    }    
   

    const playerUn = createPlayer('Player 1', 'X')
    const playerDeux= createPlayer('Player 2', 'O')

    return [playerUn, playerDeux]

}


const gameController = (function(){ 

    let toggle = () => true 
    let round = 0
    const playerArray = spaceData() //NAMES CHANGE HERE
    function gameController(x,y,node) { 
    
        // const playerArray = spaceData() //NAMES CHANGE HERE
        const gameCall = gameGridCreation.gameGrid() 
        toggle = !toggle
        let currentPlayer =  (toggle) ? playerArray[1] : playerArray[0]

        if (node.textContent===''){
            node.textContent=(currentPlayer.marker)
        }
        // clearGrid()
        console.log(`currentplayername:${currentPlayer.name}`)
        
        if (x!=undefined){
            placeMarker(currentPlayer)
            gameCall.helloGrid()
            winCheck(gameCall.getGrid(),currentPlayer.name)
            
        }

        function placeMarker(processedPlayer){
            
            const gameState = gameGridCreation.gameGrid(processedPlayer, x,y) 
            
            gameState.insertMarkers()
            
        }
                
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
            let tieBool = (currentValue) => currentValue != ''
            
            let flatArray = [].concat(...array);
            
            
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

            if (flatArray.every(tieBool) && !roundWon){
                roundTie = true
                alert(`IT BE TIE`) //tie logic here
            }
            
            round++
            
            console.log(`roundWon: ${roundWon}`)//delete after DOM
            console.log(`roundTie: ${roundTie}`)//delete after DOM
            console.log(`ROUND: ${round}`)
        }
    }

    function changeName(event){
        event.preventDefault()
        clearName()
        playerArray[0].name = document.getElementById('player1').value;
        playerArray[1].name = document.getElementById('player2').value;
        
    }

    function clearName(){
        playerArray[0].name = 'Player 1'
        playerArray[1].name = 'Player 2'
        round = 0
        

    }


return {
    gameController,
    changeName,
    clearName
};
})();


const startGame = (function(){ 
        function handleEvents(){
            
                    
            let squares = document.querySelectorAll('div.square')

            let array=[]
            squares.forEach((square) => {
                square.addEventListener('click', (e) =>{
                    let clickedNode = e.target
                    let pulledString = e.target.getAttribute('data-coordinates')
                    array = pulledString.split('')
                    console.log(array)
                    playGame(array[0],array[1],clickedNode)
                    
                    
                }) 
            });
            
        }

        function clearDOM(){
            let squares = document.querySelectorAll('div.square')
            squares.forEach((square) => {
                square.textContent=''
            });
        }

        

        function hideForm(){
            let form = document.querySelector('form')
            let startBtn= document.querySelector('button.start')
            form.style.visibility = 'hidden'; 
            startBtn.style.visibility = 'hidden'; 
            // startBtn.css('display','none')
        } 

        function showForm(){
            let form = document.querySelector('form')
            let startBtn= document.querySelector('button.start')
            form.style.visibility = 'visible'; 
            startBtn.style.visibility = 'visible'; 
        }

        function clearAll(){
            gameController.clearName()
            clearDOM()
            gameGridCreation.clearGrid()
        }

        return {handleEvents,
                hideForm,
                showForm,
                clearAll
            }
})();

const playGame = gameController.gameController
const callGame = gameController

//names at start
//start/restart
//end results
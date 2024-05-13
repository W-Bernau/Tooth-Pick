
const playingArea = document.querySelector('#gamespace')
const infoArea = document.querySelector('#infoSpace')
width = 4

const initialLines = [
'vertical','top','vertical','top','vertical','top','vertical',
'vertical','top','vertical','top', 'vertical', 'top', 'vertical',
'vertical','top','vertical','top', 'vertical', 'top', 'vertical',
'top', 'top', 'top'



]

const winningPatterns = [
    //bigInt("11010001011100000100"), bigInt("1011001110100010000"), bigInt("10111001001000010000"), bigInt("11101000100100010000"),
    //bigInt("10000000010000010001000")
    bigInt("10000000010000010001000")
]


const maximumAllowedMoves = 4;

var numberOfMovesMade = 0;


function createPuzzle() {
    for (var i = 0; i < initialLines.length; i++){
        if(initialLines[i] == "vertical"){
        const edge = document.createElement('button')
        binary = (2**i).toString(2)
        edge.id = "edgeID-"+i
        edge.classList.add('column')
        edge.classList.add('black')
        playingArea.append(edge)
        }
        else if (initialLines[i] == 'top'){
        const edge = document.createElement('button')
        binary = (2**i).toString(2)
        edge.classList.add(binary)
        edge.id = "edgeID-"+i
        edge.classList.add('edge')
        edge.classList.add('black')
        playingArea.append(edge)
    }
    }

}
function createInfo() {
    for (var i = 0; i < maximumAllowedMoves; i++){
        const movePlaceholder = document.createElement('button')
        movePlaceholder.id = "moveNumber-"+i
        movePlaceholder.classList.add('movePlaceholder')
        movePlaceholder.classList.add('black')
        infoArea.append(movePlaceholder)
    }
}

function usedMove(){
    numberOfMovesMade = numberOfMovesMade + 1;
}

function checkWinCondition(finalPatternNumber, solutionPatterns) {
    console.log((finalPatternNumber.compare(solutionPatterns[0])))
    for (var i = 0; i < solutionPatterns.length; i++){
   if (finalPatternNumber.compare(solutionPatterns[i]) == 0){
    customAlert.alert('Sign in to save your progress. Come back tomorrow for more.','You won!')
   }
}
}

function applyRules() {
    var finalPatternArray = []
    var finalPatternNumber = BigInt(0)
    for (var i = 0; i < initialLines.length; i++){
        const edgeNumber =  document.getElementById("edgeID-"+i);
        const binary = (2**i).toString(2)
        const moveNumber = document.getElementsByClassName('movePlaceholder')
        document.getElementById("edgeID-"+i).onclick = function(){
            finalPatternArray.push(BigInt(binary))
            console.log(finalPatternArray)
            edgeNumber.classList.toggle('black');
            moveNumber[numberOfMovesMade].classList.remove('black');
            usedMove();

            if(numberOfMovesMade == maximumAllowedMoves){
                alert("You're all out of moves!");
                finalPatternArray.forEach( num => {
                    finalPatternNumber += num
                })
                alert(finalPatternNumber)
                checkWinCondition(bigInt(finalPatternNumber), winningPatterns)
            }
        }
        
    }
}


createPuzzle()
createInfo()
applyRules()












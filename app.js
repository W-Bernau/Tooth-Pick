const playingArea = document.querySelector('#gamespace')
const infoArea = document.querySelector('#infoSpace')
width = 4

//Write out the initial 3x3 square pattern
const initialLines = [
'vertical','top','vertical','top','vertical','top','vertical',
'vertical','top','vertical','top', 'vertical', 'top', 'vertical',
'vertical','top','vertical','top', 'vertical', 'top', 'vertical',
'top', 'top', 'top'
]

//After doing the above, and setting maximumAllowedMoves to the desired value,
// enter your solution, 
// and paste the binary number into the bigInt("")
const winningPatterns = [
    //bigInt("11010001011100000100"), bigInt("1011001110100010000"), bigInt("10111001001000010000"), bigInt("11101000100100010000"),
    //bigInt("10000000010000010001000")
    bigInt("10000000010000010001000")
]

//Setting moves made and max moves
const maximumAllowedMoves = 4;
var numberOfMovesMade = 0;

//Create a function to create the puzzle board by appending the pattern above onto the HTML
//This will also allow us to check for if cells have been clicked
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

//Now create the section below the game board-
//This will hold the move placeholder circles and difficulty button
function createInfo() {
    for (var i = 0; i < maximumAllowedMoves; i++){
        const movePlaceholder = document.createElement('button')
        movePlaceholder.id = "moveNumber-"+i
        movePlaceholder.classList.add('movePlaceholder')
        movePlaceholder.classList.add('black')
        infoArea.append(movePlaceholder)
    }
    //To-Do:
    //Implement difficulty button/dropdown here
}

//Defining a function to be used when a button is pressed
function usedMove(){
    numberOfMovesMade = numberOfMovesMade + 1;
}

//Defining a function that is called when the number of moves made has reached the limit we set in the header
//Notice that this is were the customAlert (defined in alertbox.js) is called
function checkWinCondition(finalPatternNumber, solutionPatterns) {
    console.log((finalPatternNumber.compare(solutionPatterns[0])))
    for (var i = 0; i < solutionPatterns.length; i++){
   if (finalPatternNumber.compare(solutionPatterns[i]) == 0){
    customAlert.alert('Sign in to save your progress. Come back tomorrow for more.','You won!')
   }
}
}

//Defining a function that:
// 1. Makes the buttons change on click
// 2. Updates the number of moves made on click
// 3. Gets the assigned binary ID of the clicked button and adds it to the total
// 4. Calls checkWinCondition when all allowed moves have been made
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
                checkWinCondition(bigInt(finalPatternNumber), winningPatterns)
            }
        }
        
    }
}

// Calling all defined functions
createPuzzle()
createInfo()
applyRules()












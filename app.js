const playingArea = document.querySelector('#gamespace')

const initialLines = [
'','',''
]

function createPuzzle() {
    initialLines.forEach((initialLine) => {
        const edge = document.createElement('button')
        edge.classList.add('edge')
        edge.classList.add('black')
        playingArea.append(edge)
    })
}
createPuzzle()
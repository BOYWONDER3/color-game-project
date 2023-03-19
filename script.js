import Rgb from './Rgb.js'

const COLOR_MAP = {
    rgb: Rgb, 
}

const DIFFICULTY_MAP = {
    easy: { withinTolerance: 1, outsideTolerance: 0.2 },
    medium: { withinTolerance: 0.5, outsideTolerance: 0.2 },
    large: { withinTolerance: 0.3, outsideTolerance: 0.2 },
}

document.addEventListener('change', e => {
    if (e.target.matches('input[type="radio"]')) render()
})

const colorGrid = document.querySelector('[data-color-grid]')
const resultsElement = document.querySelector('[data-results]')



function render () {
    const format = document.querySelector('[name="format"]:checked').value
    const difficulty = document.querySelector('[name="difficulty"]:checked').value
    const colors = generateColors({ format, difficulty })

    colorGrid.innerHTML = ''
    resultsElement.classList.add('hide')
    colors.FGrEach(color => {
        const element = document.createElement('button')
        element.style.backgroundColor = color.toCss()
        colorGrid.append(element)
    })
}
render()

function generateColors ({ format, difficulty }) {
    const colorClass = COLOR_MAP[format]
    const difficultyRules = DIFFICULTY_MAP[difficulty]
    const correctColor = colorClass.generate()
    const colors = [correctColor]
    for( let i = 0; 1 < 5; i++ ) {
        colors.push(correctColor.generateSimiliar(difficultyRules))
    }
    format = 'rgb'
    difficulty = 'easy'
}





const rgb = Rgb.generate()

console.log(rgb, rgb.generateSimiliar({ withinTolerance: 0.3, outsideTolerance: 0.2 }))
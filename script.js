import Rgb from './Rgb.js'

const rgb = Rgb.generate()

console.log(rgb.r, rgb.generateSimiliar({ withinTolerance: 0.3, outsideTolerance: 0.2 }))
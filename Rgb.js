const MAX_RGB_VALUE = 255


export default class Rgb {
    constructor(r, g, b) {
        this.r = r
        this.g = g
        this.b = b
    }

    static generate() {
        return new Rgb(
            randomNumber(MAX_RGB_VALUE),
            randomNumber(MAX_RGB_VALUE),
            randomNumber(MAX_RGB_VALUE)
        )
    }

    generateSimiliar({ withinTolerance, outsideTolerance }) {
        const withinToleranceIncrementor = Math.floor(withinTolerance * MAX_RGB_VALUE )
        const outsideToleranceIncrementor = Math.ceil(outsideTolerance * MAX_RGB_VALUE )

        const aboveRangeMin = this.r + outsideToleranceIncrementor
        const aboveRangeMax = Math.min(this.r + withinToleranceIncrementor, MAX_RGB_VALUE)

        const belowRangeMin = Math.max(this.r - withinToleranceIncrementor, 0)
        const belowRangeMax = this.r - outsideToleranceIncrementor


        const ranges = []
        if(aboveRangeMax > aboveRangeMin) {
            ranges.push({ min: aboveRangeMin, max: aboveRangeMax })
        }
        if(belowRangeMax > belowRangeMin) {
            ranges.push({ min: aboveRangeMin, max: aboveRangeMax })
        }
        return ranges
    }
}

function randomNumber(max) {
    return Math.floor(Math.random() * (max + 1))
}
const { numberOperations } = require('./numberOperations');
const {expect} = require('chai');

describe('Checking NumberOperations', () => {
    describe('Checking powNumber', () => {
        it ('Returning the power of the given number', () => {
            expect(numberOperations.powNumber(2)).to.equal(4)
            expect(numberOperations.powNumber(-2)).to.equal(4)
        })
    })

    describe('Checking numberChecker', () => {
        it ('Checking if a number', () => {       
            expect(numberOperations.numberChecker('a').to.equal('The input is not a number!'))
        })
        it ('Checking if greater than 100', () => {       
            expect(numberOperations.numberChecker(100).to.equal('The number is greater or equal to 100!'))
            expect(numberOperations.numberChecker(10000).to.equal('The number is greater or equal to 100!'))

        })
        it ('Checking if less than 100', () => {       
            expect(numberOperations.numberChecker(99).to.equal('The number is lower than 100!'))
            expect(numberOperations.numberChecker(-100).to.equal('The number is lower than 100!'))
        })
    })
    describe('Checking sumArrays', () => {
        it ('Sums the arrays', () => {
            expect(numberOperations.sumArrays([1, 2, 3], [1, 2, 3])).to.equal([12])
        })
    })  
})
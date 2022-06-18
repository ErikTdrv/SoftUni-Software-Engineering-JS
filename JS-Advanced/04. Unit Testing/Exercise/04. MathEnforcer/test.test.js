const {mathEnforcer} = require('./MathEnforcer');
const {expect} = require('chai');

describe('all',() => {

    describe('Checking AddFive', () => {
        it ('Check if the parameter is a number', () => {
            expect(mathEnforcer.addFive('2')).to.be.undefined
            
        })
        it ('Check if will add 5 to the number', () =>{
            expect(mathEnforcer.addFive(5)).to.equal(10)
            expect(mathEnforcer.addFive(-5)).to.equal(0)
            expect(mathEnforcer.addFive(3.14)).to.be.closeTo(8.14, 0.01)


        })
    })
    describe('Checking subtractTen', () => {
        it('Check if the parameter is valid', () => {
            expect(mathEnforcer.subtractTen('2')).to.be.undefined
            expect(mathEnforcer.subtractTen(-10)).to.equal(-20)
            expect(mathEnforcer.subtractTen(3.14)).to.be.closeTo(-6.86, 0.01)
        })
        it('Check subtract 10', () => {
            expect(mathEnforcer.subtractTen('test')).to.be.undefined
            expect(mathEnforcer.subtractTen(20)).to.equal(10)
            expect(mathEnforcer.subtractTen(-2)).to.equal(-12)
            expect(mathEnforcer.subtractTen(3.14)).to.be.closeTo(-6.86, 0.01)

        })
    })
    describe('Checking sum', () => {
        it('Checking if the parameters are valid', () => {
            expect(mathEnforcer.sum('1', '1')).to.be.undefined;
            expect(mathEnforcer.sum('1', '')).to.be.undefined;
            expect(mathEnforcer.sum(5, -4)).to.equal(1);
            expect(mathEnforcer.sum(2.7, 2.4)).to.be.closeTo(5.1, 0,01);

            expect(mathEnforcer.sum(1, '1')).to.be.undefined;
            expect(mathEnforcer.sum('1', 1)).to.be.undefined;
        })
        it('Check if the sum works', () => {
            expect(mathEnforcer.sum(5, 5)).to.equal(10)
            expect(mathEnforcer.sum(-5, 5)).to.equal(0)
            expect(mathEnforcer.sum(-5, -5)).to.equal(-10)


        })
    })


})
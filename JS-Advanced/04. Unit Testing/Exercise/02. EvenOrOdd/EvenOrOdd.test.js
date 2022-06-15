const { isOddOrEven } = require('./EvenOrOdd');
const { expect } = require('chai');

describe('EvenOrOddCheck', () => {
    it('if parameter is not valid', () => {
        expect(isOddOrEven(2)).to.be.undefined;
        expect(isOddOrEven([])).to.be.undefined;
        expect(isOddOrEven({})).to.be.undefined;
    })
    it ('if is even return even', () => {
        expect(isOddOrEven('hi')).to.equal('even');
    })
    it ('if is odd return odd', () => {
        expect(isOddOrEven('hii')).to.equal('odd');

    })
})
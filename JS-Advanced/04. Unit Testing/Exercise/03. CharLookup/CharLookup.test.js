const {expect} = require('chai');
const {lookupChar} = require('./CharLookup');

describe ('CharLookup', () => {
    it ('Check if first parameter is valid', () => {
        expect(lookupChar(2, 0)).to.be.undefined;
        expect(lookupChar([])).to.be.undefined;
        expect(lookupChar({})).to.be.undefined;
    })
    it ('Check if second parameter is valid', () => {
        expect(lookupChar('2')).to.be.undefined;
        expect(lookupChar([])).to.be.undefined;
        expect(lookupChar({})).to.be.undefined;
        expect(lookupChar('i' , 0.1)).to.be.undefined
    })
    it ('Check value with index bigger than string length', () => {
        expect(lookupChar('hi', 10)).to.equal('Incorrect index')
    })
    it ('Check value with negative index', () => {
        expect(lookupChar('hi', -10)).to.equal('Incorrect index')

    })
    it ('Check value with valid params', () => {
        expect(lookupChar('hello', 1)).to.equal('e')
    })
})
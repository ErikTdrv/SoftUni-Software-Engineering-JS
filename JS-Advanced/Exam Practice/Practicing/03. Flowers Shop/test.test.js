const { flowerShop } = require('./flowerShop');
const { expect } = require('chai');

describe("Tests FlowerShop", () => {

    describe("Testing CalcPriceFlowers", () => {
        it('Check for invalid parameters', () => {
            expect(() => flowerShop.calcPriceOfFlowers(5)).to.throw(Error, 'Invalid input!');
            expect(() => flowerShop.calcPriceOfFlowers('string', 'string', 'string')).to.throw(Error, 'Invalid input!');
            expect(() => flowerShop.calcPriceOfFlowers('string', 5, '10')).to.throw(Error, 'Invalid input!');
        });

        it ('Checks for valid inputs', () => {
            expect(flowerShop.calcPriceOfFlowers('flower', 5, 2)).to.equal('You need $10.00 to buy flower!')
            expect(flowerShop.calcPriceOfFlowers('flower', 0, 2)).to.equal('You need $0.00 to buy flower!')
        })
    })

    describe('Testing CheckFlowersAvailable', () => {
        it('Should be available', () => {
            expect(flowerShop.checkFlowersAvailable('Rose', ["Rose", "Lily", "Orchid"])).to.equal('The Rose are available!')
            expect(flowerShop.checkFlowersAvailable('Orchid', ["Rose", "Lily", "Orchid"])).to.equal('The Orchid are available!')
            expect(flowerShop.checkFlowersAvailable('Lily', ["Rose", "Lily", "Orchid"])).to.equal('The Lily are available!')
        })
        it("Shouldn't be available", () => {
            expect(flowerShop.checkFlowersAvailable('Link', ["Rose", "Lily", "Orchid"])).to.equal('The Link are sold! You need to purchase more!')
        })
    })

    describe('Testing sellFlowers', () => {
        it ('Checks for invalid parameters', () => {
            expect(() => flowerShop.sellFlowers('s', 5)).to.throw(Error, 'Invalid input!');
            expect(() => flowerShop.sellFlowers([], 's')).to.throw(Error, 'Invalid input!');
            expect(() => flowerShop.sellFlowers('s', 's')).to.throw(Error, 'Invalid input!');
            expect(() => flowerShop.sellFlowers([], -1)).to.throw(Error, 'Invalid input!');
            expect(() => flowerShop.sellFlowers([], 4.5)).to.throw(Error, 'Invalid input!');
        })

        it ('Checks for the operation', () => {
            expect(flowerShop.sellFlowers(['Rose', 'Lily', 'Orchid'], 1)).to.equal('Rose / Orchid')
            expect(flowerShop.sellFlowers(['Rose', 'Lily', 'Orchid'], 2)).to.equal('Rose / Lily')
        })
    })
     
});

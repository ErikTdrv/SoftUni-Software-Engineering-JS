const {rentCar} = require('./rentCar')
const {expect} = require('chai');

describe ('Testing the func', () => {

    describe('Testing searchCar', () => {
        it ('Should check for model', () => {
            expect(rentCar.searchCar(['Audi', 'BMW'], 'Audi')).to.equals(`There is 1 car of model Audi in the catalog!`)
            expect(rentCar.searchCar(['Audi', 'BMW', 'Audi'], 'Audi')).to.equals(`There is 2 car of model Audi in the catalog!`)
            expect(() => rentCar.searchCar('Audi', 'Audi')).to.throw(Error, 'Invalid input!')
            expect(() => rentCar.searchCar(['Audi'], 5)).to.throw(Error, 'Invalid input!')
            expect(() => rentCar.searchCar(5, [])).to.throw(Error, 'Invalid input!')
            expect(() => rentCar.searchCar(['Audi', 'BMW', 'Audi'], 'Mercedes')).to.throw(Error, `There are no such models in the catalog!`)
        })
    })

    describe('Testing calculatePriceOfCar', () => {
        it ('Should validate params', () => {
            expect(() => rentCar.calculatePriceOfCar(5, 'days')).to.throw(Error, 'Invalid input!')
            expect(() => rentCar.calculatePriceOfCar('days', [])).to.throw(Error, 'Invalid input!')
            expect(() => rentCar.calculatePriceOfCar(5, 5)).to.throw(Error, 'Invalid input!')
            expect(() => rentCar.calculatePriceOfCar('days', 'days')).to.throw(Error, 'Invalid input!')
        })
        it('Should return the right result', () => {
            expect(rentCar.calculatePriceOfCar('Audi', 3)).to.equals('You choose Audi and it will cost $108!')
            expect(rentCar.calculatePriceOfCar('Volkswagen', 3)).to.equals('You choose Volkswagen and it will cost $60!')
            expect(() => rentCar.calculatePriceOfCar('Bentley', 5)).to.throw(Error, 'No such model in the catalog!')
        })
    })

    describe('Testing checkBudget', () => {
        it ('Should validate input', () => {
            expect(() => rentCar.checkBudget('2','2','3')).to.throw(Error, 'Invalid input!')
            expect(() => rentCar.checkBudget('2','2',3)).to.throw(Error, 'Invalid input!')
            expect(() => rentCar.checkBudget('2',2,'3')).to.throw(Error, 'Invalid input!')
            expect(() => rentCar.checkBudget(1,'2','3')).to.throw(Error, 'Invalid input!')
            expect(() => rentCar.checkBudget(1,2,'3')).to.throw(Error, 'Invalid input!')
            expect(() => rentCar.checkBudget(1,'2',3)).to.throw(Error, 'Invalid input!')
            expect(() => rentCar.checkBudget('2',1,3)).to.throw(Error, 'Invalid input!')


        })

        it ('Should be valid', () => {
            expect(rentCar.checkBudget(3, 1, 3)).to.equals('You rent a car!')
            expect(rentCar.checkBudget(3, 1, 4)).to.equals('You rent a car!')
            expect(rentCar.checkBudget(3, 1, 1)).to.equals('You need a bigger budget!')
            expect(rentCar.checkBudget(3, 1, 2)).to.equals('You need a bigger budget!')

        })
    })
})
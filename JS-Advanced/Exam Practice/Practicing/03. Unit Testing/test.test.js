const {library} = require('./library');
const {expect} = require('chai');

describe('Testing library function', () => {
    describe ('Testing calcPriceOfBook', () => {
        it ('Valid params', () => {
            expect(() => library.calcPriceOfBook(5, 1.5)).to.throw(Error, 'Invalid input')
            expect(() => library.calcPriceOfBook(5, -5)).to.throw(Error, 'Invalid input')
            expect(() => library.calcPriceOfBook(5, '1.5')).to.throw(Error, 'Invalid input')
            expect(() => library.calcPriceOfBook('harry', '1.5')).to.throw(Error, 'Invalid input')
            expect(() => library.calcPriceOfBook('harry', 'marry')).to.throw(Error, 'Invalid input')


        })
        it ('Should work', () => {
            expect(library.calcPriceOfBook('Merry', 1970)).to.equals(`Price of Merry is 10.00`)
            expect(library.calcPriceOfBook('Harry', 1980)).to.equals(`Price of Harry is 10.00`)
            expect(library.calcPriceOfBook('Harry', 2000)).to.equals(`Price of Harry is 20.00`)
        })
    })

    describe(`Testing findBook`, () => {
        it ('Should test arr length', () => {
            expect(() => library.findBook([], 'Harry')).to.throw(Error, 'No books currently available')
            expect(library.findBook(['Harry', 'Marry'], 'Harry')).to.equals(`We found the book you want.`)
            expect(library.findBook(['Harry', 'Marry'], 'AHarry')).to.equals(`The book you are looking for is not here!`)
        })
    })

    describe('Testing arrangeTheBooks', () => {
        it ('test', () => {
            expect(() => library.arrangeTheBooks(5.5)).to.throw(Error, 'Invalid input')
            expect(() => library.arrangeTheBooks(-5)).to.throw(Error, 'Invalid input')
        })
        it ('should test', () => {
            
            expect(library.arrangeTheBooks(5)).to.equals('Great job, the books are arranged.')
            expect(library.arrangeTheBooks(40)).to.equals('Great job, the books are arranged.')
            expect(library.arrangeTheBooks(500)).to.equals("Insufficient space, more shelves need to be purchased.")
        })
    })
})
const {bookSelection} = require('./bookSelection');
const {expect} = require('chai');
const { describe } = require('mocha');



describe("Tests …", function() {
    describe("isGenreSuitable", () => {
        it ('Input validation', () => {
            expect(bookSelection.isGenreSuitable('Thriller', 12)).to.equals(`Books with Thriller genre are not suitable for kids at 12 age`)
            expect(bookSelection.isGenreSuitable('Thriller', 5)).to.equals(`Books with Thriller genre are not suitable for kids at 5 age`)
            expect(bookSelection.isGenreSuitable('Horror', 12)).to.equals(`Books with Horror genre are not suitable for kids at 12 age`)
            expect(bookSelection.isGenreSuitable('Horror', 5)).to.equals(`Books with Horror genre are not suitable for kids at 5 age`)
            expect(bookSelection.isGenreSuitable('something', 12)).to.equals(`Those books are suitable`)
            expect(bookSelection.isGenreSuitable('Thriller', 50)).to.equals(`Those books are suitable`)
        })
     });

     describe('Testing isItAffordable', () => {
        it ('Happy path', () => {
            expect(bookSelection.isItAffordable(5, 10)).to.equals(`Book bought. You have 5$ left`)
            expect(bookSelection.isItAffordable(11, 10)).to.equals("You don't have enough money")
            expect(() => bookSelection.isItAffordable('s', 10)).to.throw(Error, "Invalid input")
            expect(() => bookSelection.isItAffordable('s', 'ss')).to.throw(Error, "Invalid input")
        })
     })
     describe('Testing SuitableTitles', () => {
        it('Valid params', () => {
            expect(() => bookSelection.suitableTitles('string', 5)).to.throw(Error, "Invalid input")
            expect(() => bookSelection.suitableTitles(5, 5)).to.throw(Error, "Invalid input")
            expect(bookSelection.suitableTitles([{ title: 'why', genre: "Horror" }, {title: 'ok', genre: 'Horror'}], 'Horror')).to.deep.equals([ 'why','ok' ])
            expect(bookSelection.suitableTitles([{ title: 'why', genre: "Horror" }], 'Horror')).to.deep.equals([ 'why' ])

        })
     })
});

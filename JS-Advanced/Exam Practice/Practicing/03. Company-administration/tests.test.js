const {companyAdministration} = require('./companyAdministration');
const {expect} = require('chai')

describe('Checking companyAdministration', () => {
    describe('Checking hiringEmployee', () => {
        it ('Should throw an error for invalid params', () => {
            expect(() => companyAdministration.hiringEmployee('Ivan', 3)).to.throw(Error, 'We are not looking for workers for this position.')
            expect(() => companyAdministration.hiringEmployee('Ivan', {})).to.throw(Error, 'We are not looking for workers for this position.')
            expect(() => companyAdministration.hiringEmployee('Ivan', [])).to.throw(Error, 'We are not looking for workers for this position.')
            expect(() => companyAdministration.hiringEmployee('Ivan', 'string')).to.throw(Error, 'We are not looking for workers for this position.')
        })
        it ('Should meet params', () => {
            expect(companyAdministration.hiringEmployee('Ivan', 'Programmer', 4)).to.equals('Ivan was successfully hired for the position Programmer.')
            expect(companyAdministration.hiringEmployee('Ivan', 'Programmer', 3.5)).to.equals('Ivan was successfully hired for the position Programmer.')
            expect(companyAdministration.hiringEmployee('Ivan', 'Programmer', 3)).to.equals('Ivan was successfully hired for the position Programmer.')
        })
        it ('Will not meet the params', () => {
            expect(companyAdministration.hiringEmployee('Ivan', 'Programmer', 1)).to.equals('Ivan is not approved for this position.')
            expect(companyAdministration.hiringEmployee('Ivan', 'Programmer', 2)).to.equals('Ivan is not approved for this position.')

        })
    })

    describe('Checking calculateSalary', () => {
        it('Should return the salary', () => {
            expect(companyAdministration.calculateSalary(161)).to.equals(3415)
            expect(companyAdministration.calculateSalary(5)).to.equals(75)
        })
        it ('Should have a valid input', () => {
            expect(() => companyAdministration.calculateSalary('5')).to.throw(Error, 'Invalid hours')
            expect(() => companyAdministration.calculateSalary('string')).to.throw(Error, 'Invalid hours')
            expect(() => companyAdministration.calculateSalary([])).to.throw(Error, 'Invalid hours')
            expect(() => companyAdministration.calculateSalary({})).to.throw(Error, 'Invalid hours')
            expect(() => companyAdministration.calculateSalary(-5)).to.throw(Error, 'Invalid hours')
        })
        
    })

    describe('Checking firedEmployee', () => {
        it ('Should work properly', () => {
            expect(companyAdministration.firedEmployee(['Petar', 'Ivan', 'George'], 1)).to.equals('Petar, George')
            expect(companyAdministration.firedEmployee(['Petar','George'], 1)).to.equals('Petar')
        })
        it ('Should have valid params', () => {
            expect(() => companyAdministration.firedEmployee(['Petar', 'Geoge'], 200)).to.throw(Error, 'Invalid input');
            expect(() => companyAdministration.firedEmployee(['Petar', 'Geoge'], -1)).to.throw(Error, 'Invalid input');
            expect(() => companyAdministration.firedEmployee('Petar', 200)).to.throw(Error, 'Invalid input');
            expect(() => companyAdministration.firedEmployee(['Petar', 'Geoge'], 'okay')).to.throw(Error, 'Invalid input');


        })
    })
})
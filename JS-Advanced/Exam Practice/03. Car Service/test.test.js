const { expect } = require('chai');
const {carService} = require('./03. Car service_Resources');

describe('Testing car service', () => {

    describe('Testing isItExpensive', () => {

        it ('Should be more expensive', () => {
            expect(carService.isItExpensive('Transmission')).to.equals(`The issue with the car is more severe and it will cost more money`)
            expect(carService.isItExpensive('Engine')).to.equals(`The issue with the car is more severe and it will cost more money`)
            expect(carService.isItExpensive('Wheel')).to.equals(`The overall price will be a bit cheaper`)
            expect(carService.isItExpensive(5)).to.equals(`The overall price will be a bit cheaper`)
        })
        it ('Should return valid', () => {
            expect(carService.isItExpensive('ok')).to.equals(`The overall price will be a bit cheaper`)
        })
    })


    describe('Testing discount', () => {
        it ('Should test discount', () => {
            expect(carService.discount(7, 100.50)).to.equals(`Discount applied! You saved 15.075$`)
            expect(carService.discount(8, 100.50)).to.equals(`Discount applied! You saved 30.15$`)

            expect(carService.discount(4, 50)).to.equals(`Discount applied! You saved 7.5$`)
            expect(carService.discount(7, 100)).to.equals(`Discount applied! You saved 15$`)
            expect(carService.discount(2, 100)).to.equals(`You cannot apply a discount`)
            expect(carService.discount(1, 100)).to.equals(`You cannot apply a discount`)
            expect(carService.discount(8, 100)).to.equals(`Discount applied! You saved 30$`)
            expect(carService.discount(8, 1000)).to.equals(`Discount applied! You saved 300$`)
        })
        it ('Validate the input', () => {
            expect(() => carService.discount([], 5)).to.throw(Error, 'Invalid input')
            expect(() => carService.discount('string', [])).to.throw(Error, 'Invalid input')
            expect(() => carService.discount([], {})).to.throw(Error, 'Invalid input')
            expect(() => carService.discount('string', 'string')).to.throw(Error, 'Invalid input')
            expect(() => carService.discount(5, 'string')).to.throw(Error, 'Invalid input')
            expect(() => carService.discount('string', 5)).to.throw(Error, 'Invalid input')
        })
    })

    describe('Testing partsToBuy', () => {
        it ('Validation', () => {
            // expect(carService.partsToBuy([{ part: "blowoff valve", price: 145 }, { part: "coil springs", price: 230 }], [])).to.equals(0);
            expect(carService.partsToBuy([], [])).to.equals(0);

            expect(carService.partsToBuy([], ["blowoff valve", "coil springs"])).to.equals(0);

            expect(() => carService.partsToBuy(5, '5')).to.throw(Error, 'Invalid input')
            expect(() => carService.partsToBuy('5', ["blowoff valve", "coil springs"])).to.throw(Error, 'Invalid input')
            expect(() => carService.partsToBuy([{ part: "blowoff valve", price: 145 }, { part: "coil springs", price: 230 }], '5')).to.throw(Error, 'Invalid input')

            expect(() => carService.partsToBuy({}, [])).to.throw(Error, 'Invalid input')
            expect(() => carService.partsToBuy([], '5')).to.throw(Error, 'Invalid input')
        })
        it ('Should work', () => {
            expect(carService.partsToBuy([{ part: "blowoff valve", price: 145 }, { part: "coil springs", price: 230 }],["blowoff valve", "coil springs"])).to.equals(375)
            expect(carService.partsToBuy([{ part: "injectors", price: 1445 }],["blowoff valve", "injectors"])).to.equals(1445)
            expect(carService.partsToBuy([{ part: "injectors", price: 1445 }],["blowoff valve", "something"])).to.equals(0)
            

        })
    })


})
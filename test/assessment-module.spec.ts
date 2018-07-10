import { sum, isValid, count } from '../src/assessment-module';
import { expect } from 'chai';
import 'mocha';

describe('Assessment Module', () => {

    describe('Sum function', () => {
        it('Should return 10 when params are (2,8)', () => {
            const result = sum(2, 8);
            expect(result).to.equal(10);
        });

        it('Should return 18 when params are (9,9)', () => {
            const result = sum(9, 9);
            expect(result).to.equal(18);
        });

        it('Should return 7 when params are (5,2)', () => {
            const result = sum(5, 2);
            expect(result).to.equal(7);
        });

        it('Should return 10 when params are (2)(8)', () => {
           const result = sum(2)(8);
           expect(result).to.equal(10);
        });

    });

    describe('Valid function', () => {

        it('Should return valid string on true', () => {
            const result = isValid(true);
            expect(result).to.equal('valid');
        });

        it('Should return invalid string on false', () => {
            const result = isValid(false);
            expect(result).to.equal('invalid');
        });

    });

    describe('Counter function', () => {

        it('Should return 5 after five calls to count', () => {
            count();
            count();
            count();
            count();
            const result = count();
            expect(result).to.equal(5);
        });

    });

});
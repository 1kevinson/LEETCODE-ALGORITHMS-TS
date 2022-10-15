import {TwoSum} from "../src/index";

let twoSum: TwoSum;

beforeEach(() => {
    twoSum = new TwoSum();
})

describe('Two Sum Algorithm Leetcode', () => {
    it('return array of indices for an array of 2 numbers', () => {
        const array: number[] = [3, 3];
        expect(twoSum.getIndice(array, 6)).toEqual([0, 1]);
    });

    it('return array of indices for an array of 3 numbers', () => {
        const array: number[] = [3, 2, 4];
        expect(twoSum.getIndice(array, 6)).toEqual([1, 2]);
    });

    it('return array of indices for an array of 5 numbers', () => {
        const array: number[] = [3, 2, 4, 6, 9];
        expect(twoSum.getIndice(array, 13)).toEqual([2, 4]);
    });

    it('return array of indices for an array of 10 numbers', () => {
        const array: number[] = [3, 2, 4, 86, 9, 6, 33, 5, 17, 8];
        expect(twoSum.getIndice(array, 15)).toEqual([4, 5]);
    });
});

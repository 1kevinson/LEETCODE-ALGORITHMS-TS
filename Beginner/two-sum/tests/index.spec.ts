import { TwoSum } from "../src/index";

let twoSum: TwoSum;

beforeEach(() => {
  twoSum = new TwoSum();
})

describe('Two Sum Algorithm Leetcode', () => {
  test('return array of indice of one number', () => {
    expect(twoSum.getIndice([2, 8, 5, 6])).toEqual(expect.arrayContaining([1]));
  });

  test('return array of indice of two numbers', () => {
    expect(twoSum.getIndice([2, 8, 5, 6])).toEqual([1, 3]);
  });

  test('return array of indice of two numbers which sum equals target', () => {
    expect(twoSum.getSum([2, 8, 5, 6], 10)).toEqual([1, 2]);
  });
});



/*
Scenarios
---------

- Return array of indice of one number
- Return array of indice of two numbers
- Return array of indice of two numbers which sum = target
- Return array of indice of two numbers which sum = target without using the same element twice

*/ 
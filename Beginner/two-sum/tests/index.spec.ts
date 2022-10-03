import { TwoSum } from "../src/index";

let twoSum: TwoSum;

beforeEach(() => {
  twoSum = new TwoSum();
})

describe('Two Sum Algorithm Leetcode', () => {
  test('return array of indice of one number', () => {
    const indiceOfNumbers: number[] = twoSum.getIndice([2, 8, 5, 6]);
    expect(indiceOfNumbers).toEqual(expect.arrayContaining([1]));
  });

  test('return array of indice of two numbers', () => {
    const indiceOfNumbers: number[] = twoSum.getIndice([2, 8, 5, 6]);
    expect(indiceOfNumbers).toEqual([1, 3]);
  })


});



/*
Scenarios
---------

- Return array of indice of one number
- Return array of indice of two numbers
- Return array of indice of two numbers which sum = target
- Return array of indice of two numbers which sum = target without using the same element twice

*/ 
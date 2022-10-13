import { TwoSum } from "../src/index";

let twoSum: TwoSum;

beforeEach(() => {
  twoSum = new TwoSum();
})

describe('Two Sum Algorithm Leetcode', () => {
  it('should return an array of indice of one number', () => {
    expect(twoSum.getIndice([2, 8, 5, 6])).toEqual(expect.arrayContaining([1]));
  });

  it('should return an array of indice of two numbers', () => {
    expect(twoSum.getIndice([2, 8, 5, 6])).toEqual([1, 3]);
  });

  it('should return an array of indice of two numbers which sum equals target', () => {
    expect(twoSum.getSum([2, 8, 5, 6], 10)).toEqual([1, 2]);
  });
});

// From the book Mindset, sometimes is absolutely normal for something 
// new to learn to put a lot of efforts in the beginning

/*

Given an array of integers nums and an integer target, 
return indices of the two numbers such that they add up to target.
You may assume that each input would have exactly one solution, 
and you may not use the same element twice.

You can return the answer in any order.

Example 
-------
Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].


Scenarios
---------
- Return array of indice of one number
- Return array of indice of two numbers
- Return array of indice of two numbers which sum = target
- Return array of indice of two numbers which sum = target without using the same element twice

*/ 
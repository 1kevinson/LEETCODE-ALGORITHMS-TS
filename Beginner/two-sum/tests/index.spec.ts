import {TwoSum} from "../src/index";

let twoSum: TwoSum;
const array: number[] = [3, 7, 4, 21, 66, 12];

beforeEach(() => {
    twoSum = new TwoSum();
})

describe('Two Sum Algorithm Leetcode', () => {
    it('return array of indices of 1 number', () => {
        expect(twoSum.getIndice(array, 7)).toEqual([1]);
    });

    it('return array of indices of 1 number such that the number = target', () => {
        expect(twoSum.getIndice(array, 21)).toEqual([3]);
    });
});


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
- Return array of indices of one number
- Return array of indices of one number = target
- Return array of indices of two numbers which sum = target without using the same element twice

*/ 
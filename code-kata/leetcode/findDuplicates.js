/*
Given an array of integers, 1 ≤ a[i] ≤ n (n = size of array), some elements appear twice and others appear once.
Find all the elements that appear twice in this array.
Could you do it without extra space and in O(n) runtime?
* @param {number[]} nums
* @return {number[]}
*/

// not the most optimal solution but it passed all tests

var findDuplicates = function (nums) {
  const newArr = []
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] === nums[j]) {
        newArr.push(nums[i])
        break
      }
    }
  }

  return newArr
}

findDuplicates([4, 3, 2, 7, 8, 2, 3, 1])

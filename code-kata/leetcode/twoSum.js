/* Given an array of integers, return indices of the two numbers such that they add up to a specific target.
You may assume that each input would have exactly one solution, and you may not use the same element twice.
Example:
Given nums = [2, 75, 11, 7], target = 9
Because nums[0] + nums[1] = 2 + 7 = 9
return [0, 3]. */

var twoSum = function (nums, target) {
  const arr = []
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        arr.push(i, j)
        break
      }
    }
  }
  return arr
}

var twoSum2 = function (nums, target) {
  const arr = []
  for (let i = 0; i < nums.length; i++) {
    const diff = nums.indexOf(target - nums[i])
    if (diff > 0) {
      arr.push(i, diff)
      break
    }
  }
  return arr
}

twoSum([2, 5, 8, 21, 6, 1], 11)
twoSum2([2, 8, 18, 1, 26, 16], 28)

/*
The set S originally contains numbers from 1 to n. But unfortunately, due to the data error,
one of the numbers in the set got duplicated to another number in the set,
which results in repetition of one number and loss of another number.
Given an array nums representing the data status of this set after the error.
Your task is to firstly find the number occurs twice and then find the number that is missing.
Return them in the form of an array
 * @param {number[]} nums
 * @return {number[]}
 */

var findErrorNums = function (nums) {
  const newArr = []
  const len = nums.length
  // total is the sum between and including 1 till n without duplicates
  const total = (len * (len + 1)) / 2
  let duplicate = 0
  let sum = 0
  for (let i = 0; i < len; i++) {
    for (let j = i + 1; j < len; j++) {
      if (nums[i] === nums[j]) {
        duplicate = nums[i]
        break
      }
    }
    // sum of the given array with duplicates
    sum = sum + nums[i]
  }
  const missNum = duplicate + (total - sum)
  newArr.push(duplicate, missNum)
  return newArr
}

findErrorNums([8, 7, 2, 5, 6, 1, 4, 2])
findErrorNums([1, 1])

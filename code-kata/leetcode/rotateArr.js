// Given an array, rotate the array to the right by k steps, where k is non-negative.
// https://leetcode.com/problems/rotate-array/

function rotateArr (arr, k) {
  k = k % arr.length
  const next = arr.splice(arr.length - k, arr.length)
  let i = 0
  while (i < k) {
    arr.unshift(next.pop())
    i++
  }
  return arr
}

console.log(rotateArr([1, -22, 3, -774, 5], 2))

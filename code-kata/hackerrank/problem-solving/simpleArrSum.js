/* Given an array of integers, find the sum of its elements.
For example, if the array ar = [1, 2, 3], 1 + 2 + 3 = 6 so return 6.

Complete the simpleArraySum function in the editor below.
It must return the sum of the array elements as an integer.

The first line contains an integer n, denoting the size of the array.
The second line contains n space-separated integers representing the array's elements. */

function simpleArraySum (n, arr) {
  n = arr.length
  let sum = 0
  for (let i = 0; i < n; i++) {
    sum += arr[i]
  }
  return sum
}

simpleArraySum(4, [5, 4, 5, 1])

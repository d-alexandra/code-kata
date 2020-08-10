/* Write a recursive function called productOfArray which takes in an array of numbers
and returns the product of them all. */

function productOfArray (arr) {
  if (!arr.length) return 1
  return arr.pop() * productOfArray(arr)
}

productOfArray([1, 2, 3]) // returns 6
productOfArray([4, 8, 100]) // returns 3200

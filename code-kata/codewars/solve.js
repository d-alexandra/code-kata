/* In this Kata, you will be given an array of integers whose elements have both a negative and a positive value,
except for one integer that is either only negative or only positive. Your task will be to find that integer. */

function solve (arr) {
  const setArr = new Set(arr)
  return Array.from(setArr).reduce((a, b) => (a + b))
}

solve([-110, 110, -38, -38, -62, 62, -38, -38, -38])

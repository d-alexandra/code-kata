/* Given two integers a and b, which can be positive or negative,
find the sum of all the numbers between including them too and return it.
If the two numbers are equal return a or b. Note: a and b are not ordered! */

// my first version
function getSum (a, b) {
  if (a === b) return a || b
  let c = 0
  if (a < b) {
    for (let i = a; i <= b; i++) {
      c = c + i
    }
  } else {
    for (let i = b; i <= a; i++) {
      c = c + i
    }
  }
  return c
}

// my second version
function getSum2 (a, b) {
  if (a === b) return a || b
  let min = Math.min(a, b)
  const max = Math.max(a, b)
  for (let i = min + 1; i <= max; i++) {
    min = min + i
  }
  return min
}

getSum(-120, 450)
getSum2(-120, 450)

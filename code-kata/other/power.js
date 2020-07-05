/* Write a recursive function called power which accepts a base and an exponent.
The function should return the power of the base to the exponent.
This function should mimic the functionality of Math.pow() */

function power (a, b) {
  if (b === 0) return 1
  let result = a
  result = result * power(a, b - 1)
  return result
}

power(2, 0)
power(2, 2)
power(2, 4)

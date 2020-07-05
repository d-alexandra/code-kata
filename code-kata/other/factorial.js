/* Write a recursive function factorial which accepts a number and returns the factorial of that number.
A factorial is the product of an integer and all the integers below it.
e.g. factorial (!4) is equal to 24 because 4*3*2*1 = 24 */

function factorial (num) {
  if (num === 0) return 1
  return num * factorial(num - 1)
}
factorial(5)

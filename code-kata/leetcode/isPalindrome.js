/**
Determine whether an integer is a palindrome.
An integer is a palindrome when it reads the same backward as forward.
 * @param {number} x
 * @return {boolean}
 */

// my first solution
var isPalindrome = function (x) {
  return (
    x === parseInt(x.toString().split('').reverse().join('') * Math.sign(x))
  )
}

isPalindrome(-123321)

// my second version without converting to a string

var isPalindrome2 = function (x) {
  let prev = x
  let rev = 0
  while (prev > 0) {
    rev = (rev * 10) + (prev % 10)
    prev = Math.floor(prev / 10)
  }
  return rev === x
}
isPalindrome2(1233210)

// the last solution that passed all tests with the least runtime

var isPalindrome3 = function (x) {
  if (x < 0 || (x % 10 === 0 && x !== 0)) return false
  if (x === 0) return true
  let prev = x
  let rev = 0
  while (prev > 0) {
    rev = (rev * 10) + (prev % 10)
    prev = Math.floor(prev / 10)
  }
  return rev === x
}
isPalindrome3(1233210)

/* Given a 32-bit signed integer, reverse digits of an integer.
Assume we are dealing with an environment which could only store integers within the 32-bit
signed integer range: [−231,  231 − 1]. For the purpose of this problem,
assume that your function returns 0 when the reversed integer overflows. */

var reverse = function (x) {
  if (x === 0) return x
  let prev = x
  x = 0
  const sign = prev < 0 ? (-1) : 1
  if (prev < 0) prev = prev * (-1)
  while (prev > 0) {
    x = (x * 10) + (prev % 10)
    prev = Math.floor(prev / 10)
  }
  x = x * sign
  if (x < (Math.pow(2, 31) * -1) || x > Math.pow(2, 31) - 1) return 0
  return x
}
reverse(-321)

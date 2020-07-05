/* Write a function that reverses the bits in an integer.
For example, the number 417 is 110100001 in binary. Reversing the binary is 100001011 which is 267.
You can assume that the number is not negative. */

function reverseBits (n) {
  if (n === Number.MAX_SAFE_INTEGER) return Number.MAX_SAFE_INTEGER
  const bits = n.toString(2)
  const reverse = bits.split('').reverse().join('')
  const digit = parseInt(reverse, 2)
  return digit
}

reverseBits(417)

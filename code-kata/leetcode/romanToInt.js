/* Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.
For example, two is written as II in Roman numeral, just two one's added together.
Twelve is written as, XII, which is simply X + II. The number twenty seven is written as XXVII, which is XX + V + II.

Roman numerals are usually written largest to smallest from left to right.
However, the numeral for four is not IIII. Instead, the number four is written as IV.
Because the one is before the five we subtract it making four. The same principle applies to the number nine,
which is written as IX. There are six instances where subtraction is used:

I can be placed before V (5) and X (10) to make 4 and 9.
X can be placed before L (50) and C (100) to make 40 and 90.
C can be placed before D (500) and M (1000) to make 400 and 900.
Given a roman numeral, convert it to an integer. Input is guaranteed to be within the range from 1 to 3999. */

var romanToInt = function (s) {
  let sum = 0

  const cm = s.indexOf('CM')
  const cd = s.indexOf('CD')
  const xc = s.indexOf('XC')
  const xl = s.indexOf('XL')
  const ix = s.indexOf('IX')
  const iv = s.indexOf('IV')

  // calculate unique elements and add them to sum
  if (cm > -1) {
    sum = sum + 900
    s = s.replace('CM', '')
  }

  if (cd > -1) {
    sum = sum + 400
    s = s.replace('CD', '')
  }

  if (xc > -1) {
    sum = sum + 90
    s = s.replace('XC', '')
  }

  if (xl > -1) {
    sum = sum + 40
    s = s.replace('XL', '')
  }

  if (ix > -1) {
    sum = sum + 9
    s = s.replace('IX', '')
  }

  if (iv > -1) {
    sum = sum + 4
    s = s.replace('IV', '')
  }

  // if any elements with same value, add them up to sum
  const thous = s.split('M').length - 1
  sum = sum + 1000 * thous

  const petsto = s.split('D').length - 1
  sum = sum + 500 * petsto

  const sto = s.split('C').length - 1
  sum = sum + 100 * sto

  const pees = s.split('L').length - 1
  sum = sum + 50 * pees

  const ten = s.split('X').length - 1
  sum = sum + 10 * ten

  const pet = s.split('V').length - 1
  sum = sum + 5 * pet

  const eden = s.split('I').length - 1
  sum = sum + 1 * eden
  return sum
}

romanToInt('MCDXLIV')

/* Given two strings s and t, write a function to determine if t is an anagram of s.
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
	s = s.replace(' ', '')
	t = t.replace(' ', '')
  s = s.split('').sort().join('').toLowerCase()
  t = t.split('').sort().join('').toLowerCase()
  return (s === t)
}

isAnagram('anagram', 'naga ram') // true
isAnagram('car', 'pet') // false
isAnagram('Astronomer', 'moon starer') // true

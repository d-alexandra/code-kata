/* Given two strings s and t, write a function to determine if t is an anagram of s.
* You may assume the string contains only lowercase alphabets, ignores special characters and spaces.
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  if (s.length !== t.length) return false
  s = s.split('').sort().join('')
  t = t.split('').sort().join('')
  return (s === t)
}

isAnagram('anagram', 'nagaram') // true
isAnagram('car', 'pet') // false
isAnagram('Astronomer', 'moonstarer') // true

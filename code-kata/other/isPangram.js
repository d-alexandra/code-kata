/* A pangram or holoalphabetic sentence is a sentence
using every letter of a given alphabet at least once */

function isPangram (pangram) {
  for (let ch = 97; ch <= 122; ch++) {
    const charCh = String.fromCharCode(ch)
    if (!pangram.toLowerCase().includes(charCh)) return false
  }
  return true
}

isPangram('THE five boxing wizards jump quickly.')
isPangram('Pack my box with five dozen liquor jugs.')

/* A perfect pangram contains every letter of the alphabet only once
and can be considered an anagram of the alphabet. */

function isPerfectPangram (pangram) {
  if (!isPangram(pangram)) return false
  const charMap = new Map()
  const str = 'abcdefghijklmnopqrstuvwxyz'
  for (let i = 0; i < pangram.length; i++) {
    const char = pangram[i].toLowerCase()
    if (str.includes(char)) {
      if (charMap.has(char)) return false
      else charMap.set(char, 1)
    }
  }
  return true
}
isPerfectPangram('TV quiz drag nymphs blew JFK cox')

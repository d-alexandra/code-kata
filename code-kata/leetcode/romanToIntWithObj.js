var romanToInt = function (s) {
  let sum = 0

  const year = { CM: 900, CD: 400, XC: 90, XL: 40, IX: 9, IV: 4 }
  for (const roman in year) {
    if (s.indexOf(roman) > -1) {
      s = s.replace(roman, '')
      sum = sum + year[roman]
    }
  }

  const year2 = { M: 1000, D: 500, C: 100, L: 50, X: 10, V: 5, I: 1 }
  for (const roman2 in year2) {
    sum = sum + year2[roman2] * (s.split(roman2).length - 1)
  }
  return sum
}

console.log(romanToInt('MCDXLIV'))

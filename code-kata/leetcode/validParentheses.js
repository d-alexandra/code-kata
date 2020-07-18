/* Given a string containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
Note that an empty string is also considered valid. */

var isValid = function (s) {
  const arr = []
  for (const num of s) {
    if (num === '(' || num === '[' || num === '{') arr.unshift(num)
    else {
      const i = arr[0]
      if (i === '(' && num === ')') arr.shift()
      else if (i === '[' && num === ']') arr.shift()
      else if (i === '{' && num === '}') arr.shift()
      else return false
    }
  }
  return (!arr.length)
}

console.log(isValid('()[]{}'))

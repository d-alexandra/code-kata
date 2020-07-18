/* Write a function to find the longest common prefix string amongst an array of strings.
If there is no common prefix, return an empty string "".
All given inputs are in lowercase letters a-z. */

function findPrefix (prefix, str) {
  for (let i = prefix.length - 1; i >= 0; i--) {
    if (str.startsWith(prefix)) return prefix
    else prefix = prefix.slice(0, i)
  }
  return prefix
}

var longestCommonPrefix = function (strs) {
  if (!strs.length) return ''
  let prefix = strs[0]
  for (const str of strs) {
    if (!prefix) return ''
    else if (!str.startsWith(prefix)) prefix = findPrefix(prefix, str)
  }
  return prefix
}

longestCommonPrefix(['carpet', 'car', 'carwash'])

// password validator. to be less than 8 characters,
// without spaces and to not contain the username.

function isValidPassword (password, username) {
  if (password.length < 8) {
    return false
  }
  if (password.indexOf(' ') !== -1) {
    return false
  }
  if (password.indexOf(username) !== -1) {
    return false
  }
  return true
}

function isValidPassword2 (password, username) {
  const tooShort = password.length < 8
  const hasSpace = password.indexOf(' ') !== -1
  const tooSimilar = password.indexOf(username !== -1)
  return (!tooShort && !hasSpace && !tooSimilar)
}
isValidPassword('cheese123shvcv', 'something1')
isValidPassword2('hqwcbj', 'sjqfbwiy47284')

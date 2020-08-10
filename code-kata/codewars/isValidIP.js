/* Write an algorithm that will identify valid IPv4 addresses in dot-decimal format.
IPs should be considered valid if they consist of four octets, with values between 0 and 255, inclusive.
Input to the function is guaranteed to be a single string.
Note that leading zeros (e.g. 01.02.03.04) are considered invalid. */

function isValidIP (str) {
  if (str.match(/[a-z,' '\n-]/g)) return false
  const ip = str.split('.')
  if (ip.length !== 4) return false
  for (let i = 0; i < ip.length; i++) {
    if (ip[i] === '') return false
    const nbr = Number(ip[i])
    if (ip[i].startsWith(0) && ip[i].length > 1) return false
    if (nbr < 0 || nbr > 255) return false
  }
  return true
}

isValidIP('.1.3.255\n')
isValidIP('a4c.3ef.6hi.1kl')
isValidIP('127..43.0.1')

// CHALLENGE Leap Year

function isLeap (year) {
  if (year % 4 > 0) {
    return ('Not leap year.')
  }
  if (year % 4 === 0 && year % 100 > 0) {
    return ('Leap year.')
  }
  if (year % 4 === 0 && year % 100 === 0) {
    if (year % 400 === 0) {
      return ('Leap year.')
    } else {
      return ('Not leap year.')
    }
  } else {
    return ('Not leap year.')
  }
}
isLeap(1998)
// Second much better version

function isLeap2 (year) {
  if (year % 4 > 0) {
    return ('Not leap year.')
  }
  if (year % 100 > 0) {
    return ('Leap year.')
  }
  if (year % 400 === 0) {
    return ('Leap year.')
  } else {
    return ('Not leap year.')
  }
}
isLeap2(2000)

// FIZZ BUZZ CHALLENGE

function fizzBuzz () {
  const output = []
  let n = 1
  while (n <= 100) {
    output.push(n)
    if (n % 3 === 0 && n % 5 === 0) {
      output.pop(n)
      output.push('FizzBuzz')
    } else if (n % 3 === 0) {
      output.pop(n)
      output.push('Fizz')
    } else if (n % 5 === 0) {
      output.pop(n)
      output.push('Buzz')
    }
    n++
  }
  return (output)
}

console.log(fizzBuzz())

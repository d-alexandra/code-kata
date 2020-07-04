// Fibonacci algorithm

function fibonacciGenerator (n) {
  let output = []
  let a = 0
  let b = 1
  let index = 0
  if (n === 1) {
    output = [0]
  } else {
    while (index < n) {
      const c = a
      a = b
      b = c + a
      output.push(c)
      index++
    }
  }
  return output
}
fibonacciGenerator(10)

/* Given three integers a ,b ,c, return the largest number obtained after inserting the following operators and brackets: +, *, ()
In other words , try every combination of a,b,c with [*+()] , and return the Maximum Obtained
The numbers are always positive.
The numbers are in the range (1≤a,b,c≤10).
You can use the same operation more than once.
It's not necessary to place all the signs and brackets.
Repetition in numbers may occur.
You cannot swap the operands.
*/

function expressionMatter (a, b, c) {
  const arr = []
  arr.push(a + b + c)
  arr.push(a + b * c)
  arr.push(a * b + c)
  arr.push(a * b * c)
  arr.push((a + b) * c)
  arr.push(a * (b + c))
  return (Math.max(...arr))
}

expressionMatter(2, 1, 2) // 6
expressionMatter(2, 1, 3) // 9
expressionMatter(1, 1, 1) // 3

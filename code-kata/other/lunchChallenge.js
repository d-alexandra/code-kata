// WHO WILL PAY THE LUNCH

function whosPaying (names) {
  const numberOfPeople = names.length
  const personPosition = Math.floor(Math.random() * numberOfPeople)
  const randomPerson = names[personPosition]
  return randomPerson + ' is going to buy lunch today!'
}
const listNames = ['Anita', 'Bob', 'Jenny', 'Michael', 'Chloe']

console.log(whosPaying(listNames))

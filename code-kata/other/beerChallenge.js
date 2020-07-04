// BEER CHALLENGE

function beer () {
  let bottleOfBeer = 99
  while (bottleOfBeer >= 2) {
    console.log(bottleOfBeer + ' bottles of beer on the wall, ' + bottleOfBeer + ' bottles of beer.')
    let bottle = 'bottles'
    if (bottleOfBeer === 2) {
      bottle = 'bottle'
    }
    console.log('Take one down and pass it around, ' + (bottleOfBeer - 1) + ' ' + bottle + ' of beer on the wall.')
    bottleOfBeer--
  }
  console.log(bottleOfBeer + ' bottle of beer on the wall, ' + bottleOfBeer + ' bottle of beer.')
  console.log('Take one down and pass it around, no more bottles of beer on the wall.')
}
beer()

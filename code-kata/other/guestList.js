// Guest List - includes

function checkGuest (name) {
  const guestList = ['Angela', 'Natalia', 'John', 'Ema', 'Alexandra', 'Louisa', 'Arthur']
  if (guestList.includes(name)) {
    window.alert('Your name ' + name + ' is on the list. Welcome to the party.')
  } else {
    window.alert('Your name ' + name + ' is not on the list. I"m sorry but you can not enter.')
  }
}
checkGuest()

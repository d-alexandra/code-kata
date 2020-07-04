/* In this kata you will create a function
that takes a list of non-negative integers and strings
and returns a new list with the strings filtered out. */

function filter_list (l) {
  const newItem = l.filter(item => typeof (item) !== 'string')
  return newItem
}

filter_list(['a', 'b', 1, 2, 'c', 'd', 33, 44])

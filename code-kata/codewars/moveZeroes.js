/* Write an algorithm that takes an array and moves all of the zeros to the end,
preserving the order of the other elements. */

var moveZeros = function (arr) {
  const len = arr.length
  for (let i = 0; i < len; i++) {
    if (arr[i] === 0) {
      for (let j = i + 1; j < len; j++) {
        if (arr[j] !== 0) {
          arr[i] = arr[j]
          arr[j] = 0
          break
        }
      }
    }
  }
  return arr
}
moveZeros([false, 1, 0, 1, 2, 0, 1, 3, 'a'])
// returns[false,1,1,2,1,3,"a",0,0]

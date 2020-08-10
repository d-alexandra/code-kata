/* Complete the staircase function in the editor below. It should print a staircase as described above.
Consider a staircase of size : 4
   #
  ##
 ###
####
staircase has the following parameter(s):
A single integer n, denoting the size of the staircase.
Print a staircase of size n using # symbols and spaces.
Note: The last line must have 0 spaces in it. */

function staircase (n) {
  for (let base = 0; base < n; base++) {
    let str = ''
    for (let height = 0; height < n; height++) {
      if (n - base > height + 1) {
        str = str.concat(' ')
      } else {
        str = str.concat('#')
      }
    }
    console.log(str)
  }
}

staircase(4)

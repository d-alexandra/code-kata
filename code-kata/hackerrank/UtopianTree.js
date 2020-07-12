/* The Utopian Tree goes through 2 cycles of growth every year. Each spring, it doubles in height. Each summer, its height increases by 1 meter.
Laura plants a Utopian Tree sapling with a height of 1 meter at the onset of spring. How tall will her tree be after n growth cycles?
For example, if the number of growth cycles is 5, the calculations are as follows:
Period  Height
0          1
1          2
2          3
3          6
4          7
5          14
It should return the integer height of the tree after the input number of growth cycles.
utopianTree has the following parameter(s):
n: an integer, the number of growth cycles to simulate
*/

function utopianTree (n) {
  if (!n) return 1
  let h = 1
  for (let i = 1; i <= n; i++) {
    if (i % 2 === 0) h = h + 1
    else h = h * 2
  }
  return h
}

utopianTree(5)

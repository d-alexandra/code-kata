/* Given a square matrix, calculate the absolute difference between the sums of its diagonals.
The first line contains a single integer n, the number of rows and columns in the matrix arr.
3
1 2 3
4 5 6
9 8 9
The left-to-right diagonal = 1 + 5 + 9 = 15. The right to left diagonal = 3 + 5 + 9 = 17. Their absolute difference is 2.
Input
Each of the next n lines describes a row, arr[i], and consists of n space-separated integers arr[i][j].
Output
Print the absolute difference between the sums of the matrix's two diagonals as a single integer.
*/

function diagonalDifference (arr) {
  const n = arr[0]
  let sum = 0
  let sum2 = 0
  for (let i = 1; i <= n; i++) {
    sum += arr[i][i - 1]
    sum2 += arr[i][n - i]
  }
  if (sum - sum2 < 0) return (sum - sum2) * (-1)
  return sum - sum2
}
const arr = [3,
  [11, 2, 4],
  [4, 5, 6],
  [10, 8, -12]]
diagonalDifference(arr)

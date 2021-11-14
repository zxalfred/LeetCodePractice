/*
 * @lc app=leetcode.cn id=999 lang=javascript
 *
 * [999] 车的可用捕获量
 */

// @lc code=start
/**
 * @param {character[][]} board
 * @return {number}
 */
const numRookCaptures = function (board) {
  let x; let
    y
  let count = 0
  for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 8; j++) {
      if (board[i][j] === 'R') {
        x = i
        y = j
      }
    }
  }

  const diff = [[1, 0], [-1, 0], [0, 1], [0, -1]]

  for (const item of diff) {
    let a = x + item[0]
    let b = y + item[1]
    while (
      a >= 0 && a < 8
      && b >= 0 && b < 8
    ) {
      const val = board[a][b]
      if (val === 'p') {
        count++
        break
      } else if (val === 'B') {
        break
      }
      a += item[0]
      b += item[1]
    }
  }

  return count
}
// @lc code=end

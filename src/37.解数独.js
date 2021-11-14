/*
 * @lc app=leetcode.cn id=37 lang=javascript
 *
 * [37] 解数独
 */

// @lc code=start
/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
const isValid = function (board, row, col, c) {
  for (let i = 0; i < 9; i++) {
    if (board[i][col] !== '.' && board[i][col] === c) return false
    if (board[row][i] !== '.' && board[row][i] === c) return false
    if (board[3 * ~~(row / 3) + ~~(i / 3)][3 * ~~(col / 3) + ~~(i % 3)] !== '.' && board[3 * ~~(row / 3) + ~~(i / 3)][3 * ~~(col / 3) + ~~(i % 3)] === c) return false
  }
  return true
}

var solve = function (board) {
  const l = board.length
  for (let i = 0; i < l; i++) {
    for (let j = 0; j < board[0].length; j++) {
      if (board[i][j] === '.') {
        for (let val = 1; val <= 9; val++) {
          if (isValid(board, i, j, String(val))) {
            board[i][j] = String(val)
            if (solve(board)) {
              return true
            }
            board[i][j] = '.'
          }
        }
        return false
      }
    }
  }
  return true
}

const solveSudoku = function (board) {
  if (board === null || board.length === 0) return

  solve(board)
}
// @lc code=end

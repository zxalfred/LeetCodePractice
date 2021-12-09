/*
 * @lc app=leetcode.cn id=794 lang=javascript
 *
 * [794] 有效的井字游戏
 */

// @lc code=start
/**
 * @param {string[]} board
 * @return {boolean}
 */
const validTicTacToe = function (board) {
  let XCount = 0
  let OCount = 0
  let winner = ''
  // check every row
  for (const row of board) {
    if (row === 'XXX' || row === 'OOO') {
      if (winner) return false
      winner = row === 'XXX' ? 'X' : 'O'
    }
    for (const item of row) {
      if (item === 'X') XCount++
      if (item === 'O') OCount++
    }
  }
  if (XCount > 5 || OCount > 5 || OCount > XCount || XCount - OCount > 1) return false
  if (winner === 'X' && XCount - OCount !== 1) return false
  if (winner === 'O' && XCount !== OCount) return false
  // check every col
  winner = ''
  let cross1 = ''
  let cross2 = ''
  for (let i = 0; i < 3; i++) {
    let col = ''
    cross1 += board[i][i]
    cross2 += board[i][2 - i]
    for (let j = 0; j < 3; j++) {
      col += board[j][i]
    }
    if (col === 'XXX' || col === 'OOO') {
      if (winner) return false
      winner = col === 'XXX' ? 'X' : 'O'
    }
  }
  if (cross1 === 'XXX' || cross2 === 'XXX') winner = 'X'
  if (cross1 === 'OOO' || cross2 === 'OOO') winner = 'O'
  if (winner === 'X' && XCount - OCount !== 1) return false
  if (winner === 'O' && XCount !== OCount) return false

  return true
}

// @lc code=end

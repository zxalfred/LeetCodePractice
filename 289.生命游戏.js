/*
 * @lc app=leetcode.cn id=289 lang=javascript
 *
 * [289] 生命游戏
 */

// @lc code=start
/**
 * @param {number[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var isAlive = function (board, i, j) {
  let aliveNeibor = 0
  let val = board[i][j]
  for (let a = -1; a < 2; a++) {
    for (let b = -1; b < 2; b++) {
      if (a === 0 && b === 0) continue
      if (board[i + a] && board[i + a][j + b] === 1) {
        aliveNeibor++
      }
    }
  }
  switch(aliveNeibor) {
    case 2: {
      val = val
      break
    }
    case 3: {
      val = 1
      break
    }
    default: {
      val = 0
    }
  }
  return val
}

var gameOfLife = function(board) {
  const rowLength = board.length
  const colLength = board[0].length
  
  const help = (board, i, j) => {
    if (i === rowLength || j === colLength) return
    const val = isAlive(board, i, j)
    const x = i
    const y = j

    j++
    if (j === colLength) {
      j = 0
      i++
    }
    help(board, i, j)
    board[x][y] = val
  }

  help(board, 0, 0)
};
// @lc code=end


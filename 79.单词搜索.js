/*
 * @lc app=leetcode.cn id=79 lang=javascript
 *
 * [79] 单词搜索
 */

// @lc code=start
/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {
  const rowLen = board.length
  const colLen = board[0].length
  const xyDiff = [[1, 0], [-1, 0], [0, 1], [0, -1]]

  var isValid = function(index, i, j) {
    if (board[i][j] !== word[index]) {
      return false
    }
    
    index++
    if (index === word.length) return true

    const temp = board[i][j]
    board[i][j] = ''
    for (const diff of xyDiff) {
      const _i = i + diff[0]
      const _j = j + diff[1]
      if (_i >= 0 && _i < rowLen
        && _j >=0 && _j < colLen
        && board[_i][_j] !== ''
        && isValid(index, _i, _j)
      ) return true
    }

    board[i][j] = temp
    return false
  }

  for (let a = 0; a < rowLen; a++) {
    for (let b = 0; b < colLen; b++) {
      if (isValid(0, a, b)) {
        return true
      }
    }
  }
  return false
};
// @lc code=end


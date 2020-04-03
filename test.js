var exist = function(board, word) {
  const rowLen = board.length
  const colLen = board[0].length
  const set = new Set()

  var isValid = function(index, i, j) {
    if (board[i][j] !== word[index]) {
      return false
    }
    set.add(`${i},${j}`)
    index++
    if (index === word.length) return true
    if ((i + 1 < rowLen && !set.has(`${i+1},${j}`))
      && isValid(index, i + 1, j)) return true
    if ((i - 1 >= 0 && !set.has(`${i-1},${j}`))
      && isValid(index, i - 1, j)) return true
    if ((j + 1 < colLen && !set.has(`${i},${j+1}`))
      && isValid(index, i, j + 1)) return true
    if ((j - 1 >= 0 && !set.has(`${i},${j-1}`))
      && isValid(index, i, j - 1)) return true

    set.delete(`${i},${j}`)
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

console.log(exist([["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], "ABCCED"))
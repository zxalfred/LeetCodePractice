var isValid = function(board, row, col, c) {
  for (let i = 0; i < 9; i++) {
    if (board[i][col] !== '.' && board[i][col] === c) return false
    if (board[row][i] !== '.' && board[row][i] === c) return false
    if (board[3 * ~~(row / 3) + ~~(i / 3)][3 * ~~(col / 3) + ~~(i % 3)] !== '.' && board[3 * ~~(row / 3) + ~~(i / 3)][3 * ~~(col / 3) + ~~(i % 3)] === c) return false
  }
  return true
}

var solve = function(board) {
  const l = board.length
  for (let i = 0; i < l; i++) {
    for (let j = 0; j < board[0].length; j++) {
      if (board[i][j] === '.') {
        for (let val = 1; val <= 9; val++) {
          if (isValid(board, i, j, String(val))) {
            board[i][j] = String(val)
            if (solve(board)) {
              return true
            } else {
              board[i][j] = '.'
            }
          }
          return false
        }
      }
      return true
    }
  }
}

const a = [["5","3",".",".","7",".",".",".","."],["6",".",".","1","9","5",".",".","."],[".","9","8",".",".",".",".","6","."],["8",".",".",".","6",".",".",".","3"],["4",".",".","8",".","3",".",".","1"],["7",".",".",".","2",".",".",".","6"],[".","6",".",".",".",".","2","8","."],[".",".",".","4","1","9",".",".","5"],[".",".",".",".","8",".",".","7","9"]]

solve(a)
console.log(a)
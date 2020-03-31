var solveNQueens = function(n) {
  if (n < 1) return []
  const result = []
  const help = (row, col, xySum, xyDiff) => {
    if (row >= n) {
      result.push(col)
      return
    }
    for (let i = 0; i < n; i++) {
      if (xySum.includes(i + row) || xyDiff.includes(i - row) || col.includes(i)) {
        continue
      }

      col.push(i)
      xySum.push(i + row)
      xyDiff.push(i - row)
      
      help(row + 1, col, xySum, xyDiff)
    }
  }
  help(0, [], [], [])

  // format result
  for (let i = 0, l = result.length; i < l; i++) {
    for (let j = 0; j < n; j++) {
      const index = result[i][j]
      let val = new Array(n).fill('.')
      val[index] = 'Q'
      val = val.join('')
      result[i][j] = val
    }
  }

  return result
};

solveNQueens(4)
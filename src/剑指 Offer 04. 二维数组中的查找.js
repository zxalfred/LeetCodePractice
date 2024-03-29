const findNumberIn2DArray = function (matrix, target) {
  const row = matrix.length
  const col = matrix[0] ? matrix[0].length : 0

  let i = row - 1
  let j = 0
  while (i < row && i >= 0 && j >= 0 && j < col) {
    const val = matrix[i][j]
    if (val === target) return true
    if (val > target) {
      i--
    } else {
      j++
    }
  }

  return false
}

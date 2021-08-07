/*
 * @lc app=leetcode.cn id=54 lang=javascript
 *
 * [54] 螺旋矩阵
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
  const result = []
  const row = matrix.length
  const col = matrix[0].length

  let m1 = 0
  let m2 = row - 1
  let n1 = 0
  let n2 = col - 1
  
  while (m1 <= m2 && n1 <= n2) {
    let i = m1
    let j = n1
    while (j <= n2) {
      result.push(matrix[i][j])
      j++
    }
    j--
    i++
    if (i > m2) return result
    while (i <= m2) {
      result.push(matrix[i][j])
      i++
    }
    i--
    j--
    if (j < n1) return result
    while (j >= n1) {
      result.push(matrix[i][j])
      j--
    }
    j++
    i--
    while (i > m1) {
      result.push(matrix[i][j])
      i--
    }
    m1++
    m2--
    n1++
    n2--
  }

  return result
};

// @lc code=end


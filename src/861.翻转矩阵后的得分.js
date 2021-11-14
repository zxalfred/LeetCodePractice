/*
 * @lc app=leetcode.cn id=861 lang=javascript
 *
 * [861] 翻转矩阵后的得分
 */

// @lc code=start
/**
 * @param {number[][]} A
 * @return {number}
 */
var matrixScore = function(A) {
  const row = A.length
  const col = A[0].length
  const map = new Map() // record amount of 1 of each col
  const target = Math.ceil(row / 2)
  for (let i = 0; i < row; i++) {
    if (A[i][0] === 0) {
      A[i] = A[i].map((val, index) => {
        if (val === 0) {
          map.set(index, (map.get(index) || 0) + 1)
          return 1
        } else {
          return 0
        }
      })
    } else {
      A[i].forEach((val, index) => {
        if (val === 1) {
          map.set(index, (map.get(index) || 0) + 1)
        }
      })
    }
  }
  
  for (let i = 0; i < row; i++) {
    for (let j = 1; j < col; j++) {
      if ((map.get(j) || 0) < target) {
        A[i][j] = A[i][j] === 0 ? 1 : 0
      }
    }
  }
  let result = 0
  for (let i = 0; i < row; i++) {
    result += Number(`0b${A[i].join('')}`)
  }

  return result
};
// @lc code=end


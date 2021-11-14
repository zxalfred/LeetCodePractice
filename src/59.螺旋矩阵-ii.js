/*
 * @lc app=leetcode.cn id=59 lang=javascript
 *
 * [59] 螺旋矩阵 II
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function(n) {
  const result = []
  for (let i = 0; i < n; i++) {
    result[i] = []
  }

  let up = 0
  let down = n - 1
  let left = 0
  let right = n - 1
  let x = 1
  const max = n * n
  while(true) {
    for (let i = left; i <= right; i++) {
      result[up][i] = x
      x++
    }
    up++
    if (up > down) break
    for (let i = up; i <= down; i++) {
      result[i][right] = x
      x++
    }
    right--
    for (let i = right; i >= left; i--) {
      result[down][i] = x
      x++
    }
    down--
    for (let i = down; i >= up; i--) {
      result[i][left] = x
      x++
    }
    left++
  }
    
  return result
};

console.log(generateMatrix(5))
// @lc code=end


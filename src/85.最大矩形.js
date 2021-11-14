/*
 * @lc app=leetcode.cn id=85 lang=javascript
 *
 * [85] 最大矩形
 */

// @lc code=start
/**
 * @param {character[][]} matrix
 * @return {number}
 */
const largestRectangleArea = function (heights) {
  const l = heights.length
  const stack = [0]
  const arr = [0, ...heights, 0]
  let result = 0

  for (let i = 1; i < arr.length; i++) {
    const stackTop = stack[stack.length - 1]
    if (arr[i] < arr[stackTop]) {
      while (stack.length > 1 && arr[stack[stack.length - 1]] > arr[i]) {
        const topIndex = stack.pop()
        result = Math.max(result, (i - stack[stack.length - 1] - 1) * arr[topIndex])
      }
    }
    stack.push(i)
  }
  while (stack.length > 1) {
    const now = stack.pop()
    const prev = stack[stack.length - 1]
    result = Math.max(result, (l - prev) * arr[now])
  }
  return result
}
const maximalRectangle = function (matrix) {
  const row = matrix.length
  if (!row) return 0
  const col = matrix[0].length
  let result = 0
  const left = new Array(row).fill(0).map(() => new Array(col))
  const heights = new Array(col).fill(0).map(() => new Array())
  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      if (matrix[i][j] === '0') {
        left[i][j] = 0
      } else {
        left[i][j] = (left[i][j - 1] || 0) + 1
      }
      heights[j].push(left[i][j])
    }
  }

  for (let i = 0; i < col; i++) {
    result = Math.max(result, largestRectangleArea(heights[i]))
  }

  return result
}

// @lc code=end

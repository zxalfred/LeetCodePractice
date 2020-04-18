/*
 * @lc app=leetcode.cn id=11 lang=javascript
 *
 * [11] 盛最多水的容器
 */

// @lc code=start
/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
  let i = 0
  let j = height.length - 1
  let result = 0

  while (i < j) {
    const leftHeight = height[i]
    const rightHeight = height[j]
    if (leftHeight < rightHeight) {
      result = Math.max(result, (j - i) * leftHeight)
      i++
    } else {
      result = Math.max(result, (j - i) * rightHeight)
      j--
    }
  }

  return result
};
// @lc code=end


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
    const leftH = height[i]
    const rightH = height[j]

    if (leftH < rightH) {
      result = Math.max(result, leftH * (j - i))
      i++
    } else {
      result = Math.max(result, rightH * (j - i))
      j--
    }
  }

  return result
};
// @lc code=end


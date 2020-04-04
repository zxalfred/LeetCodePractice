/*
 * @lc app=leetcode.cn id=42 lang=javascript
 *
 * [42] 接雨水
 */

// @lc code=start
/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
  let left = 0
  let right = height.length - 1
  let maxLeft = 0
  let maxRight = 0
  let result = 0

  while (left < right) {
    const lHeight = height[left]
    const rHeight = height[right]
    if (lHeight < rHeight) {
      if (lHeight >= maxLeft) {
        maxLeft = lHeight
      } else {
        result += maxLeft - lHeight
      }
      left++
    } else {
      if (rHeight >= maxRight) {
        maxRight = rHeight
      } else {
        result += maxRight - rHeight
      }
      right--
    }
  }

  return result
};
// @lc code=end


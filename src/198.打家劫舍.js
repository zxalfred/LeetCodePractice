/*
 * @lc app=leetcode.cn id=198 lang=javascript
 *
 * [198] 打家劫舍
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
  let prevMax = 0
  let currMax = 0
  for (const item of nums) {
    const temp = currMax
    currMax = Math.max(prevMax + item, currMax)
    prevMax = temp
  }
  return currMax
};
// @lc code=end


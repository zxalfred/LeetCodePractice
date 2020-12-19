/*
 * @lc app=leetcode.cn id=75 lang=javascript
 *
 * [75] 颜色分类
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
  if (nums.length < 2) return
  const l = nums.length
  let white = 0
  let slow = 0
  let fast = 0
  while (fast < l) {
    const fastVal = nums[fast]
    if (fastVal === 0) {
      nums[slow] = 0
      slow++
    } else if (fastVal === 1) {
      white++
    }
    fast++
  }
  while (slow < l) {
    if (white > 0) {
      nums[slow] = 1
      white--
    } else {
      nums[slow] = 2
    }
    slow++
  }
  return nums
};
// @lc code=end


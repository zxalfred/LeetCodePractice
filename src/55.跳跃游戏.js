/*
 * @lc app=leetcode.cn id=55 lang=javascript
 *
 * [55] 跳跃游戏
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {boolean}
 */
const canJump = function (nums) {
  if (nums.length < 2) return true
  let last = 0
  const l = nums.length - 1
  for (let i = 0; i < l; i++) {
    if (i <= last) {
      last = Math.max(last, i + nums[i])
      if (last >= l) {
        return true
      }
    }
  }
  return false
}
// @lc code=end

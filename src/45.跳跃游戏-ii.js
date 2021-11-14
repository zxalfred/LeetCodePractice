/*
 * @lc app=leetcode.cn id=45 lang=javascript
 *
 * [45] 跳跃游戏 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
const jump = function (nums) {
  let canJumpMax = 0
  let lastCanJumpMax = 0
  let step = 0
  const l = nums.length - 1
  for (let i = 0; i < l; i++) {
    canJumpMax = Math.max(canJumpMax, i + nums[i])
    if (lastCanJumpMax === i) {
      lastCanJumpMax = canJumpMax
      step++
    }
    if (lastCanJumpMax >= l) {
      break
    }
  }
  return step
}
// @lc code=end

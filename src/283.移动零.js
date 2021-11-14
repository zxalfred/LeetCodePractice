/*
 * @lc app=leetcode.cn id=283 lang=javascript
 *
 * [283] 移动零
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
const moveZeroes = function (nums) {
  const l = nums.length
  let i = 0 // 前探
  let j = 0 // 后置

  while (i < l) {
    if (nums[i] !== 0) {
      nums[j] = nums[i]
      j++
    }
    i++
  }

  while (j < l) {
    nums[j] = 0
    j++
  }
}

// @lc code=end

/*
 * @lc app=leetcode.cn id=27 lang=javascript
 *
 * [27] 移除元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
const removeElement = function (nums, val) {
  let i = 0
  let j = 0

  while (j < nums.length) {
    if (nums[j] === val) {
      j++
    } else {
      nums[i] = nums[j]
      i++
      j++
    }
  }
  return i
}
// @lc code=end

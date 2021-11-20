/*
 * @lc app=leetcode.cn id=26 lang=javascript
 *
 * [26] 删除有序数组中的重复项
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
const removeDuplicates = function (nums) {
  const l = nums.length
  if (l < 2) return l
  let slow = 1
  let fast = 1

  while (fast < l) {
    if (nums[fast] !== nums[slow - 1]) {
      nums[slow] = nums[fast]
      slow++
    }
    fast++
  }

  return slow
}
// @lc code=end

/*
 * @lc app=leetcode.cn id=35 lang=javascript
 *
 * [35] 搜索插入位置
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
  let i = 0
  let j = nums.length - 1

  while (i <= j) {
    const mid = i + ((j - i) >> 1)
    const val = nums[mid]
    if (val === target) return mid
    if (val > target) {
      j = mid - 1
    } else {
      i = mid + 1
    }
  }

  return i
};
// @lc code=end


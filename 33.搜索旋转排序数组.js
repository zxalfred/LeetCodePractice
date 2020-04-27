/*
 * @lc app=leetcode.cn id=33 lang=javascript
 *
 * [33] 搜索旋转排序数组
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
  let left = 0
  let right = nums.length - 1

  while (left <= right) {
    const mid = left + ((right - left) >> 1)
    if (nums[mid] === target) return mid

    if (nums[mid] >= nums[left]) {
      if (nums[mid] >= target && target >= nums[left]) {
        right = mid - 1
      } else {
        left = mid + 1
      }
    } else {
      if (nums[mid] <= target && target <= nums[right]) {
        left = mid + 1
      } else {
        right = mid - 1
      }
    }
  }

  return -1
};
// @lc code=end


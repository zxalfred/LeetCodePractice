/*
 * @lc app=leetcode.cn id=704 lang=javascript
 *
 * [704] 二分查找
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const search = function (nums, target) {
  if (nums[nums.length - 1] === target) return nums.length - 1

  const find = (nums, left = 0, right = nums.length - 1) => {
    if (left === right) return nums[right] === target ? right : -1
    const mid = (left + right) >> 1
    if (nums[mid] === target) return mid
    if (nums[mid] > target) {
      return find(nums, left, mid)
    }
    return find(nums, mid + 1, right)
  }

  return find(nums)
}

// @lc code=end

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
  const split = (i, j) => {
    if (i >= j) {
      return nums[i] === target ? i : -1
    }
    const mid = i + ((j - i) >> 1)
    const left = nums[i]
    const right = nums[j]
    const middle = nums[mid]
    if (target === middle)  return mid
    if (left < middle) {
      if (target === left) return i
      if (target < middle && target > left)  {
        return split(i, mid - 1)
      } else {
        return split(mid + 1, j)
      }
    } else {
      if (target === right) return j
      if (target > middle && target < right) {
        return split(mid + 1, j)
      } else {
        return split(i, mid - 1)
      }
    }
  }

  return split(0, nums.length - 1)
};
// @lc code=end


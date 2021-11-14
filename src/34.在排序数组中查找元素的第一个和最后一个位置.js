/*
 * @lc app=leetcode.cn id=34 lang=javascript
 *
 * [34] 在排序数组中查找元素的第一个和最后一个位置
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
  const help = (left, right) => {
    if (left > right) return -1
    const mid = left + ((right - left) >> 1)
    if (nums[mid] === target) return mid
    if (nums[mid] > target) {
      return help(left, mid - 1)
    } else{
      return help(mid + 1, right)
    }
  }

  const index = help(0, nums.length - 1)
  if (index === -1) return [-1, -1]
  let i = index - 1
  while(i >=0 && nums[i] === target) {
    i--
  }
  i++
  let j = index + 1
  while (j < nums.length && nums[j] === target) {
    j++
  }
  j--
  return [i, j]
};
// @lc code=end


/*
 * @lc app=leetcode.cn id=330 lang=javascript
 *
 * [330] 按要求补齐数组
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number}
 */
const minPatches = function (nums, n) {
  let result = 0
  let x = 1
  const { length } = nums
  let index = 0
  while (x <= n) {
    if (index < length && nums[index] <= x) {
      x += nums[index]
      index++
    } else {
      x *= 2
      result++
    }
  }
  return result
}

// @lc code=end

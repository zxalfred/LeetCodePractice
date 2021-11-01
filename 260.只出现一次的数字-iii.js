/*
 * @lc app=leetcode.cn id=260 lang=javascript
 *
 * [260] 只出现一次的数字 III
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var singleNumber = function(nums) {
  let x = 0
  for (const val of nums) {
    x ^= val
  }

  const lowestOne = x & (-x)
  let a = 0
  let b = 0
  for (const val of nums) {
    if (val & lowestOne) {
      a ^= val
    } else {
      b ^= val
    }
  }
  return [a, b]
};
// @lc code=end


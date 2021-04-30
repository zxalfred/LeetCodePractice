/*
 * @lc app=leetcode.cn id=137 lang=javascript
 *
 * [137] 只出现一次的数字 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
  let result = 0
  for (let i = 0; i < 32; i++) {
    let sum = 0
    for (const num of nums) {
      sum += (num >> i) & 1
    }
    if (sum % 3 !== 0) {
      result |= 1 << i
    }
  }
  return result
};

// @lc code=end


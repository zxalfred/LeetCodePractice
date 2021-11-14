/*
 * @lc app=leetcode.cn id=268 lang=javascript
 *
 * [268] 丢失的数字
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
  const l = nums.length
  const sum = (1 + l) * l / 2
  return nums.reduce((diff, item) => diff - item, sum)
};

// @lc code=end


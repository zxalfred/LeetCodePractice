/*
 * @lc app=leetcode.cn id=209 lang=javascript
 *
 * [209] 长度最小的子数组
 */

// @lc code=start
/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(target, nums) {
  let i = 0
  let j = 0
  let sum = 0
  let result = Infinity
  while (j < nums.length) {
    sum = sum + nums[j]
    if (sum >= target) {
      result = Math.min(result, j - i + 1)
      while (true) {
        sum = sum - nums[i]
        i++
        if (sum >= target) {
          result = Math.min(result, j - i + 1)
        } else break
      }
    }
    j++
  }

  return isFinite(result) ? result : 0
};

// @lc code=end


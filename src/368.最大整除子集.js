/*
 * @lc app=leetcode.cn id=368 lang=javascript
 *
 * [368] 最大整除子集
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var largestDivisibleSubset = function(nums) {
  const l = nums.length
  if (l === 1) return nums
  nums = nums.sort((a, b) => a - b)
  let result = [nums[1]]
  const dp = new Array(l)
  dp[0] = [nums[0]]
  for (let i = 1; i < l; i++) {
    let maxPrev = []
    for (let j = i - 1; j >= 0; j--) {
      if (nums[i] % nums[j] === 0) {
        maxPrev = dp[j].length > maxPrev.length ? dp[j] : maxPrev
      }
    }
    dp[i] = maxPrev.concat(nums[i])
    result = result.length < dp[i].length ? dp[i] : result
  }

  return result
};

// @lc code=end


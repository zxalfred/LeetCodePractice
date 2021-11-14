/*
 * @lc app=leetcode.cn id=560 lang=javascript
 *
 * [560] 和为K的子数组
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function(nums, k) {
  const map = new Map([[0, 1]])
  let result = 0
  let sum = 0
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i]
    const diff = sum - k
    if (map.has(diff)) {
      result += map.get(diff)
    }
    if (map.has(sum)) {
      map.set(sum, map.get(sum) + 1)
    } else {
      map.set(sum, 1)
    }
  }

  return result
};
// @lc code=end


/*
 * @lc app=leetcode.cn id=594 lang=javascript
 *
 * [594] 最长和谐子序列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var findLHS = function(nums) {
  const map = new Map()
  let result = 0
  for (const item of nums) {
    map.set(item, (map.get(item) || 0) + 1)
  }
  for (const [key, val] of map) {
    const x = map.get(key + 1)
    if (x) {
      result = Math.max(result, val + x)
    }
  }

  return result
};
// @lc code=end


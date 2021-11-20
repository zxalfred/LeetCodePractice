/*
 * @lc app=leetcode.cn id=46 lang=javascript
 *
 * [46] 全排列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const permute = function (nums) {
  const result = []
  const l = nums.length
  const backTrack = (now, set) => {
    if (now.length === l) {
      result.push(now)
      return
    }
    for (const val of nums) {
      if (!set.has(val)) {
        backTrack(now.concat(val), set.add(val))
        set.delete(val)
      }
    }
  }

  for (const val of nums) {
    backTrack([val], new Set([val]))
  }

  return result
}
// @lc code=end

/*
 * @lc app=leetcode.cn id=39 lang=javascript
 *
 * [39] 组合总和
 */

// @lc code=start
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
  const result = []
  const backtracking = (arr, sum) => {
    if (sum === target) {
      result.push(arr)
      return true
    }
    if (sum > target) return false
    for (const item of candidates) {
      // backtracking(condi)
    }
  }

  backtracking([], 0)

  return result
};
// @lc code=end


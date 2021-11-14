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
const combinationSum = function (candidates, target) {
  const result = []
  const backtracking = (arr, sum) => {
    if (sum === target) {
      result.push(arr)
      return
    }
    if (sum > target) return
    for (const item of candidates) {
      if (!arr.length || item >= arr[arr.length - 1]) backtracking(arr.concat(item), sum + item)
    }
  }

  backtracking([], 0)

  return result
}
// @lc code=end

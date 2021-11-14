/*
 * @lc app=leetcode.cn id=77 lang=javascript
 *
 * [77] 组合
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function(n, k) {
  const result = []

  const backtrack = (arr, cur, left) => {
    arr.push(cur)
    if (arr.length === k) {
      result.push([...arr])
      return
    }
    for (let i = cur + 1; i <= n - left + 1; i++) {
      backtrack(arr, i, left - 1)
      arr.pop()
    }
  }

  for (let i = 1; i <= n - k + 1; i++) {
    backtrack([], i, k - 1)
  }

  return result
};

// @lc code=end


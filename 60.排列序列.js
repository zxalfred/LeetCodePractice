/*
 * @lc app=leetcode.cn id=60 lang=javascript
 *
 * [60] 排列序列
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number} k
 * @return {string}
 */
var getPermutation = function(n, k) {
  let count = 0
  let result = ''

  // memo[index] is true when used
  const backTrack = (str, memo) => {
    if (str.length === n) {
      count++
      if (count === k) {
        result = str
      }
      return
    }

    for (let i = 0; i < n; i++) {
      if (memo[i] !== true) {
        memo[i] = true
        backTrack(`${str}${i + 1}`, memo)
        if (result) return
        memo[i] = false
      }
    }
  }

  backTrack('', [])

  return result
};

// @lc code=end


/*
 * @lc app=leetcode.cn id=455 lang=javascript
 *
 * [455] 分发饼干
 */

// @lc code=start
/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
var findContentChildren = function(g, s) {
  g.sort((a, b) => a - b)
  s.sort((a, b) => a - b)
  const gLen = g.length
  const sLen = s.length
  let result = 0
  let i = 0
  let j = 0
  while (i < gLen && j < sLen) {
    if (s[j] >= g[i]) {
      result++
      i++
      j++
    } else {
      j++
    }
  }

  return result
}

// @lc code=end


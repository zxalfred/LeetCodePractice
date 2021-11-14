/*
 * @lc app=leetcode.cn id=409 lang=javascript
 *
 * [409] 最长回文串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
const longestPalindrome = function (s) {
  const set = new Set()

  for (let i = 0; i < s.length; i++) {
    if (set.has(s[i])) {
      set.delete(s[i])
    } else {
      set.add(s[i])
    }
  }

  if (set.size === 0) {
    return s.length
  }
  return (s.length - set.size) + 1
}
// @lc code=end

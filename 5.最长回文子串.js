/*
 * @lc app=leetcode.cn id=5 lang=javascript
 *
 * [5] 最长回文子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
  if (!s) return ''
  let max = 1
  let result = s[0]
  for (let i = 0; i < s.length; i++) {
    let j = 1
    while (
      i + j < s.length
      && i - j >= 0
      && s[i + j] === s[i - j]
    ) {
      const length = j * 2 + 1
      if (length > max) {
        max = length
        result = s.substring(i - j, i + j + 1)
      }
      j++
    }
    if (s[i + 1] === s[i]) {
      j = 0
      while (
        i - j >= 0
        && i + j + 1 < s.length
        && s[i - j] === s[i + j + 1]
      ) {
        const length = j * 2 + 2
        if (length > max) {
          max = length
          result = s.substring(i - j, i + j + 2)
        }
        j++
      }
    }
  }
  return result
};
// @lc code=end


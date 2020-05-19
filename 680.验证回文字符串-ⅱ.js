/*
 * @lc app=leetcode.cn id=680 lang=javascript
 *
 * [680] 验证回文字符串 Ⅱ
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var validPalindrome = function(s) {
  if (s.length === 1) return true

  let i = 0
  let j = s.length - 1
  let flag = true
  while (i < j) {
    if (s[i] !== s[j]) {
      flag = false
      break
    }
    i++
    j--
  }
  if (flag) return true
  let left = true
  let right = true
  let a = i + 1
  let b = j
  while (a < b) {
    if (s[a] !== s[b]) {
      left = false
      break
    }
    a++
    b--
  }
  a = i
  b = j - 1
  while (a < b) {
    if (s[a] !== s[b]) {
      right = false
      break
    }
    a++
    b--
  }
  return left || right
};
// @lc code=end


/*
 * @lc app=leetcode.cn id=20 lang=javascript
 *
 * [20] 有效的括号
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  const l = s.length
  const arr = []
  const map = new Map([
    ['(', ')'],
    ['{', '}'],
    ['[', ']']
  ])
  for (let i = 0; i < l; i++) {
    const val = s[i]
    if (map.has(val)) {
      arr.push(val)
      continue
    } else if (val !== map.get(arr.pop())) {
      return false
    }
  }
  return !arr.length
};
// @lc code=end


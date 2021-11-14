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
  const map = new Map([
    [')', '('],
    [']', '['],
    ['}', '{']
  ])
  const stack = []

  for (let i = 0; i < l; i++) {
    const val = s[i]
    const pair = map.get(val)
    if (pair === undefined) {
      stack.push(val)
    } else if (pair !== stack.pop()) {
      return false
    }
  }

  return !stack.length
};
// @lc code=end


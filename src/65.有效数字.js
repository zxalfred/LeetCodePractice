/*
 * @lc app=leetcode.cn id=65 lang=javascript
 *
 * [65] 有效数字
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
const isNumber = function (s) {
  const str = s.trim()
  if (!str) return false
  const memo = [
    [1, 2, 4, -1],
    [-1, 2, 4, -1],
    [-1, 2, 3, 5],
    [-1, 3, -1, 5],
    [-1, 3, -1, -1],
    [6, 7, -1, -1],
    [-1, 7, -1, -1],
    [-1, 7, -1, -1],
  ]
  const dfa = (index, action) => {
    let col
    switch (action) {
      case '+':
      case '-': {
        col = 0
        break
      }
      case '.': {
        col = 2
        break
      }
      case 'e':
      case 'E': {
        col = 3
        break
      }
      default: {
        const code = action.charCodeAt()
        if (code >= 48 && code <= 57) {
          col = 1
        } else {
          return -1
        }
      }
    }
    return memo[index][col]
  }
  let status = 0
  for (let i = 0; i < str.length; i++) {
    status = dfa(status, str[i])
    if (status === -1) return false
  }
  return status === 2 || status === 3 || status === 7
}

// @lc code=end

/*
 * @lc app=leetcode.cn id=71 lang=javascript
 *
 * [71] 简化路径
 */

// @lc code=start
/**
 * @param {string} path
 * @return {string}
 */
const simplifyPath = function (path) {
  const pathArr = path.split('/')
  const stack = []
  for (let i = 0, l = pathArr.length; i < l; i++) {
    const val = pathArr[i]
    if (val === '.' || val === '') continue
    if (val === '..') {
      stack.pop()
    } else {
      stack.push(val)
    }
  }
  return `/${stack.join('/')}`
}
// @lc code=end

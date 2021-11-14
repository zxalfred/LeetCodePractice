/*
 * @lc app=leetcode.cn id=389 lang=javascript
 *
 * [389] 找不同
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
const findTheDifference = function (s, t) {
  const map = new Map()
  for (let i = 0, l = s.length; i < l; i++) {
    map.set(s[i], (map.get(s[i]) || 0) + 1)
  }
  for (let i = 0, l = t.length; i < l; i++) {
    const count = (map.get(t[i]) || 0) - 1
    if (count < 0) {
      return t[i]
    }
    map.set(t[i], count)
  }
}
// @lc code=end

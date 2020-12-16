/*
 * @lc app=leetcode.cn id=290 lang=javascript
 *
 * [290] 单词规律
 */

// @lc code=start
/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function(pattern, s) {
  const str = s.split(' ')
  const map = new Map()
  if (pattern.length !== str.length) return false
  for (let i = 0; i < pattern.length; i++) {
    if (!map.get(pattern[i])) {
      map.set(pattern[i], str[i])
    } else if (map.get(pattern[i]) !== str[i]) return false
  }
  const set = new Set()
  for (const [,val] of map) {
    if (set.has(val)) return false
    set.add(val)
  }

  return true
};
// @lc code=end


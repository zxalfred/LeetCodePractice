/*
 * @lc app=leetcode.cn id=242 lang=javascript
 *
 * [242] 有效的字母异位词
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
const isAnagram = function (s, t) {
  const sMap = new Map()
  const tMap = new Map()

  for (const item of s) {
    const val = sMap.get(item)
    if (val) {
      sMap.set(item, val + 1)
    } else {
      sMap.set(item, 1)
    }
  }

  for (const item of t) {
    const val = tMap.get(item)
    if (val) {
      tMap.set(item, val + 1)
    } else {
      tMap.set(item, 1)
    }
  }
  if (sMap.size !== tMap.size) return false
  for (const key of sMap.keys()) {
    if (sMap.get(key) !== tMap.get(key)) return false
  }
  return true
}
// @lc code=end

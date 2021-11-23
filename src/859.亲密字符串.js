/*
 * @lc app=leetcode.cn id=859 lang=javascript
 *
 * [859] 亲密字符串
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} goal
 * @return {boolean}
 */
const buddyStrings = function (s, goal) {
  if (s.length !== goal.length) return false
  const { length: l } = s

  if (s === goal) {
    const set = new Set(s.split(''))
    return set.size !== l
  }

  let diffS
  let diffG
  let swapped = false
  for (let i = 0; i < l; i++) {
    if (s[i] !== goal[i]) {
      if (swapped) return false
      if (!diffS) {
        diffS = s[i]
        diffG = goal[i]
      } else if (s[i] === diffG && goal[i] === diffS) {
        diffS = undefined
        swapped = true
      } else {
        return false
      }
    }
  }
  return !diffS
}
// @lc code=end

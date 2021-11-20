/*
 * @lc app=leetcode.cn id=941 lang=javascript
 *
 * [941] 有效的山脉数组
 */

// @lc code=start
/**
 * @param {number[]} A
 * @return {boolean}
 */
const validMountainArray = function (A) {
  const l = A.length
  if (l < 2) return false

  let flag = 1

  for (let i = 1; i < l; i++) {
    const prev = A[i - 1]
    const now = A[i]
    const diff = (now - prev) * flag
    if (diff === 0) return false
    if (diff < 0) {
      if (flag > 0 && i > 1) {
        flag = -1
      } else {
        return false
      }
    }
  }
  return flag < 0
}
// @lc code=end

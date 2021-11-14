/*
 * @lc app=leetcode.cn id=1011 lang=javascript
 *
 * [1011] 在 D 天内送达包裹的能力
 */

// @lc code=start
/**
 * @param {number[]} weights
 * @param {number} D
 * @return {number}
 */
const shipWithinDays = function (weights, D) {
  let right = 0
  let left = 0
  const l = weights.length
  for (let i = 0; i < l; i++) {
    left = Math.max(left, weights[i])
    right += weights[i]
  }
  if (D === 1) return right
  if (D === l) return left
  left--
  let mid = (left + right) >> 1
  while (mid !== left) {
    let carried = 0
    let times = 1
    for (let i = 0; i < l; i++) {
      carried += weights[i]
      if (carried > mid) {
        times++
        carried = weights[i]
      }
    }
    if (times > D) {
      left = mid
    } else {
      right = mid
    }
    mid = (left + right) >> 1
  }
  return right
}

// @lc code=end

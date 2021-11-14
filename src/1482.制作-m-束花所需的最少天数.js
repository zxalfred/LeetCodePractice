/*
 * @lc app=leetcode.cn id=1482 lang=javascript
 *
 * [1482] 制作 m 束花所需的最少天数
 */

// @lc code=start
/**
 * @param {number[]} bloomDay
 * @param {number} m
 * @param {number} k
 * @return {number}
 */
const minDays = function(bloomDay, m, k) {
  const length = bloomDay.length
  if (m * k > length) return -1
  let l = Infinity
  let r = 0
  for (let i = 0; i < length; i++) {
    l = Math.min(l, bloomDay[i])
    r = Math.max(r, bloomDay[i])
  }
  bloomDay.push(Infinity)
  const check = (day) => {
    let continuous = 0
    let count = 0
    for (let i = 0; i <= length; i++) {
      if (day - bloomDay[i] >= 0) {
        continuous++
        if (continuous === k) {
          continuous = 0
          count++
        }
      } else {
        continuous = 0
      }
    }
    return count >= m
  }
  
  while (l < r) {
    let mid = ~~((l + r) >> 1)
    if (check(mid)) {
      r = mid
    } else {
      l = mid + 1
    }
  }

  return l
};

// @lc code=end


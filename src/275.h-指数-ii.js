/*
 * @lc app=leetcode.cn id=275 lang=javascript
 *
 * [275] H 指数 II
 */

// @lc code=start
/**
 * @param {number[]} citations
 * @return {number}
 */
const hIndex = function (citations) {
  const l = citations.length
  if (!l) return 0
  let left = 0
  let right = l - 1

  while (left <= right) {
    const mid = Math.floor((left + right) / 2)
    if (citations[mid] >= l - mid) {
      right = mid - 1
    } else {
      left = mid + 1
    }
  }

  return l - left
}

// @lc code=end

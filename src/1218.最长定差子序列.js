/*
 * @lc app=leetcode.cn id=1218 lang=javascript
 *
 * [1218] 最长定差子序列
 */

// @lc code=start
/**
 * @param {number[]} arr
 * @param {number} difference
 * @return {number}
 */
const longestSubsequence = function (arr, difference) {
  const l = arr.length
  let result = 1
  const map = new Map([[arr[0], 1]])
  for (let i = 1; i < l; i++) {
    const prevMaxVal = map.get(arr[i] - difference)
    const val = (prevMaxVal || 0) + 1
    map.set(arr[i], val)
    result = Math.max(result, val)
  }
  return result
}

// @lc code=end

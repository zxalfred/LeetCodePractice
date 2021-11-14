/*
 * @lc app=leetcode.cn id=165 lang=javascript
 *
 * [165] 比较版本号
 */

// @lc code=start
/**
 * @param {string} version1
 * @param {string} version2
 * @return {number}
 */
const compareVersion = function (version1, version2) {
  const reg = /\d+(?=\.)/g
  const v1 = (`${version1}.`).match(reg).map((val) => Number(val))
  const v2 = (`${version2}.`).match(reg).map((val) => Number(val))
  let i = 0
  while (i < v1.length) {
    const v2Value = v2[i] || 0
    if (v1[i] > v2Value) {
      return 1
    } if (v1[i] < v2Value) {
      return -1
    }
    i++
  }
  while (i < v2.length) {
    if (v2[i] > 0) return -1
    i++
  }
  return 0
}

// @lc code=end

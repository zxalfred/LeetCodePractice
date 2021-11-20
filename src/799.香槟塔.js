/*
 * @lc app=leetcode.cn id=799 lang=javascript
 *
 * [799] 香槟塔
 */

// @lc code=start
/**
 * @param {number} poured
 * @param {number} query_row
 * @param {number} query_glass
 * @return {number}
 */
const champagneTower = function (poured, query_row, query_glass) {
  const arr = new Array(100)
  for (let i = 0; i < 100; i++) {
    arr[i] = new Array(i + 1).fill(0)
  }
  arr[0][0] = poured
  for (let i = 0; i < query_row; i++) {
    for (let j = 0; j <= i; j++) {
      const a = (arr[i][j] - 1) / 2
      if (a > 0) {
        arr[i + 1][j] += a
        arr[i + 1][j + 1] += a
      }
    }
  }

  return Math.min(1, arr[query_row][query_glass] || 0)
}
console.log(champagneTower(100000009, 33, 17))
// @lc code=end

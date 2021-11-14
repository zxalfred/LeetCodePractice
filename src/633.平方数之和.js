/*
 * @lc app=leetcode.cn id=633 lang=javascript
 *
 * [633] 平方数之和
 */

// @lc code=start
/**
 * @param {number} c
 * @return {boolean}
 */
var judgeSquareSum = function(c) {
  if (c === 0) return true
  const squareRoot = Math.sqrt(c)
  let i = 0
  let j = ~~squareRoot
  while (i <= j) {
    const sum = (i * i) + (j * j)
    if (sum === c) return true
    if (sum > c) {
      j--
    } else {
      i++
    }
  }
  return false
};

// @lc code=end


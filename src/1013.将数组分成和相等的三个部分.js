/*
 * @lc app=leetcode.cn id=1013 lang=javascript
 *
 * [1013] 将数组分成和相等的三个部分
 */

// @lc code=start
/**
 * @param {number[]} A
 * @return {boolean}
 */
var canThreePartsEqualSum = function(A) {
  const target = A.reduce((a, b) => a + b) / 3
  if (target % 1) return false
  const l = A.length
  let i = 0
  let sum = 0
  while (i < l) {
    sum += A[i]
    if (sum === target) {
      break
    }
    i++
  }
  sum = 0
  if (i >= l) return false
  i++
  while (i < l) {
    sum += A[i]
    if (sum === target) {
      break
    }
    i++
  }
  if (i >= l - 1) return false

  return true
};

// @lc code=end


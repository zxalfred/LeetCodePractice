/*
 * @lc app=leetcode.cn id=367 lang=javascript
 *
 * [367] 有效的完全平方数
 */

// @lc code=start
/**
 * @param {number} num
 * @return {boolean}
 */
// 1. 二分法
// var isPerfectSquare = function(num) {
//   if (num === 1) return true
//   if (num <= 3) return false
//   const help = (left, right) => {
//     if (right - left <= 1) {
//       return right ** 2 === num || left ** 2 === num
//     }
//     const middle = (right + left) >> 1
//     const val = middle ** 2
//     if (val === num) return true
//     if (val > num) {
//       return help(left, middle)
//     } else {
//       return help(middle, right)
//     }
//   }
//   return help(1, num >> 1)
// };
// 2. 公式
var isPerfectSquare = function(num) {
  if (num === 1) return true
  let square = 1
  let n = 1
  while (square < num) {
    square += 2 * n + 1
    if (square === num) return true
    n++
  }

  return false
}
// @lc code=end


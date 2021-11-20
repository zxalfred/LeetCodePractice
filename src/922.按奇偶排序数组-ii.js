/*
 * @lc app=leetcode.cn id=922 lang=javascript
 *
 * [922] 按奇偶排序数组 II
 */

// @lc code=start
/**
 * @param {number[]} A
 * @return {number[]}
 */
const sortArrayByParityII = function (A) {
  const len = A.length
  const evenArr = []
  const oddArr = []
  const result = []
  for (let i = 0; i < len; i++) {
    if ((A[i] & 1) === 0) {
      evenArr.push(i)
    } else {
      oddArr.push(i)
    }
  }
  for (let i = 0; i < len / 2; i++) {
    result.push(A[evenArr[i]], A[oddArr[i]])
  }
  return result
}
// @lc code=end

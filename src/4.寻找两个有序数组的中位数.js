/*
 * @lc app=leetcode.cn id=4 lang=javascript
 *
 * [4] 寻找两个有序数组的中位数
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(A, B) {
  let m = A.length
  let n = B.length
  // 保持 m <= n
  if (m > n) {
    const temp = A
    A = B
    B = temp
    const tmp = m
    m = n
    n = tmp
  }
  let iMin = 0
  let iMax = m
  while (iMin <= iMax) {
    let i = (iMin + iMax) >> 1
    let j = ((m + n + 1) >> 1) - i
    if (i < iMax && B[j - 1] > A[i]) {
      iMin = i + 1
    } else if (i > iMin && A[i - 1] > B[j]) {
      iMax = i - 1
    } else {
      let maxLeft
      if (i === 0) {
        maxLeft = B[j - 1]
      } else if (j === 0) {
        maxLeft = A[i - 1]
      } else {
        maxLeft = Math.max(A[i - 1], B[j - 1])
      }

      if ((m + n) & 1) return maxLeft
 
      let minRight
      if (i === m) {
        minRight = B[j]
      } else if (j === n) {
        minRight = A[i]
      } else {
        minRight = Math.min(B[j], A[i])
      }

      return (maxLeft + minRight) / 2
    }
  }

  return 0
};
// @lc code=end


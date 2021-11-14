/*
 * @lc app=leetcode.cn id=976 lang=javascript
 *
 * [976] 三角形的最大周长
 */

// @lc code=start
/**
 * @param {number[]} A
 * @return {number}
 */
var largestPerimeter = function(A) {
  const arr = A.sort((a, b) => a - b)
  const len = arr.length

  for (let i = len - 1; i > 1; i--) {
    if ((arr[i] - arr[i - 1]) < arr[i - 2]) {
      return arr[i] + arr[j] + arr[k]
    }
  }

  return 0
};

// @lc code=end


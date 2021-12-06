/*
 * @lc app=leetcode.cn id=786 lang=javascript
 *
 * [786] 第 K 个最小的素数分数
 */

// @lc code=start
/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number[]}
 */
const kthSmallestPrimeFraction = function(arr, k) {
  const { length: l } = arr
  const temp = []

  for (let i = 0; i < l - 1; i++) {
    for (let j = i + 1; j < l; j++) {
      temp.push([arr[i], arr[j]])
    }
  }

  temp.sort((a, b) => (a[0] * b[1]) - (b[0] * a[1]))
  return [temp[k - 1][0], temp[k - 1][1]]
};

// @lc code=end


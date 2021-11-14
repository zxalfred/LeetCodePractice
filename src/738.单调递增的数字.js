/*
 * @lc app=leetcode.cn id=738 lang=javascript
 *
 * [738] 单调递增的数字
 */

// @lc code=start
/**
 * @param {number} N
 * @return {number}
 */
var monotoneIncreasingDigits = function(N) {
  if (N < 10) return N

  const n = String(N).split('').map(x => Number(x))
  const len = n.length
  let i = 0
  for (; i < len - 1; i++) {
    if (n[i] > n[i + 1]) {
      n[i] = n[i] - 1
      break
    }
  }
  for (let j = i + 1; j < len; j++) {
    n[j] = 9
  }
  for (; i >= 1; i--) {
    if (n[i] < n[i - 1]) {
      n[i] = 9
      n[i - 1] = n[i - 1] - 1
    }
  }
  return Number(n.join(''))
};

// @lc code=end


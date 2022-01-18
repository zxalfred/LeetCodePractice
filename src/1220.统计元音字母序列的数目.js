/*
 * @lc app=leetcode.cn id=1220 lang=javascript
 *
 * [1220] 统计元音字母序列的数目
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
let countVowelPermutation = function (n) {
  let cur = [1, 1, 1, 1, 1]
  while (n > 1) {
    const temp = [
      (cur[1] + cur[2] + cur[4]) % 1000000007,
      (cur[0] + cur[2]) % 1000000007,
      (cur[1] + cur[3]) % 1000000007,
      cur[2],
      (cur[2] + cur[3]) % 1000000007,
    ]
    cur = temp
    n--
  }

  return cur.reduce((a, b) => a + b) % 1000000007
}

// @lc code=end

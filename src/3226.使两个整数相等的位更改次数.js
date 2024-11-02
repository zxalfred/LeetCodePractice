/*
 * @lc app=leetcode.cn id=3226 lang=javascript
 *
 * [3226] 使两个整数相等的位更改次数
 */
// 计算一个数字的二进制
function getBinaryString(n) {
  const res = []
  while (n > 1) {
    res.push(n % 2)
    n = ~~(n / 2)
  }
  res.join('')
}

// @lc code=start
/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
let minChanges = function (n, k) {
  if (n === k) return 0
  let count = 0
  while (n > 0 || k > 0) {
    const rN = n % 2
    const rK = k % 2
    if (rN === 1 && rK === 0) {
      count++
    } else if (rN === 0 && rK === 1) {
      return -1
    }
    n = ~~(n / 2)
    k = ~~(k / 2)
  }
  return count
}
// @lc code=end

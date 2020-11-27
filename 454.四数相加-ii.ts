/*
 * @lc app=leetcode.cn id=454 lang=typescript
 *
 * [454] 四数相加 II
 */

// @lc code=start
function fourSumCount(A: number[], B: number[], C: number[], D: number[]): number {
  const len = A.length
  if (!len) return 0

  const map = new Map<number, number>()
  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len; j++) {
      const sum = A[i] + B[j]
      const count = map.get(sum)
      map.set(sum, count ? count + 1 : 1)
    }
  }

  let result = 0

  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len; j++) {
      const target = -(C[i] + D[j])
      result += map.get(target) || 0
    }
  }

  return result
};
// @lc code=end


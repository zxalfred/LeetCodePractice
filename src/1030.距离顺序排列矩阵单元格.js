/*
 * @lc app=leetcode.cn id=1030 lang=javascript
 *
 * [1030] 距离顺序排列矩阵单元格
 */

// @lc code=start
/**
 * @param {number} R
 * @param {number} C
 * @param {number} r0
 * @param {number} c0
 * @return {number[][]}
 */
const allCellsDistOrder = function (R, C, r0, c0) {
  const arr = []

  const map = new Map()

  for (let i = 0; i < R; i++) {
    for (let j = 0; j < C; j++) {
      arr.push([i, j])
    }
  }

  return arr.sort((a, b) => {
    const keyA = a.join(',')
    let distanceA = map.get(keyA)
    if (distanceA === undefined) {
      distanceA = Math.abs(a[0] - r0) + Math.abs(a[1] - c0)
      map.set(keyA, distanceA)
    }

    const keyB = b.join(',')
    let distanceB = map.get(keyB)
    if (distanceB === undefined) {
      distanceB = Math.abs(b[0] - r0) + Math.abs(b[1] - c0)
      map.set(keyB, distanceB)
    }

    return distanceA - distanceB
  })
}
// @lc code=end

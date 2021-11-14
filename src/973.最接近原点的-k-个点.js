/*
 * @lc app=leetcode.cn id=973 lang=javascript
 *
 * [973] 最接近原点的 K 个点
 */

// @lc code=start
/**
 * @param {number[][]} points
 * @param {number} K
 * @return {number[][]}
 */
const kClosest = function (points, K) {
  const map = new Map()

  const sorted = points.sort((a, b) => {
    const keyA = a.join(',')
    const keyB = b.join(',')
    let distanceA = map.get(keyA)
    let distanceB = map.get(keyB)
    if (!distanceA) {
      distanceA = a[0] ** 2 + a[1] ** 2
      map.set(keyA, distanceA)
    }
    if (!distanceB) {
      distanceB = b[0] ** 2 + b[1] ** 2
      map.set(keyB, distanceB)
    }
    return distanceA - distanceB
  })

  return sorted.slice(0, K)
}
// @lc code=end

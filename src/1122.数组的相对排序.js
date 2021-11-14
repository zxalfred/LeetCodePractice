/*
 * @lc app=leetcode.cn id=1122 lang=javascript
 *
 * [1122] 数组的相对排序
 */

// @lc code=start
/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number[]}
 */
const relativeSortArray = function (arr1, arr2) {
  const map = new Map()

  for (let i = 0; i < arr2.length; i++) {
    map.set(arr2[i], i)
  }

  return arr1.sort((a, b) => {
    const aIndex = map.get(a)
    const bIndex = map.get(b)
    if (aIndex !== undefined && bIndex != undefined) {
      return map.get(a) - map.get(b)
    } if (aIndex !== undefined) {
      return -1
    } if (bIndex !== undefined) {
      return 1
    }
    return a - b
  })
}
// @lc code=end

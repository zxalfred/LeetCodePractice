/*
 * @lc app=leetcode.cn id=912 lang=javascript
 *
 * [912] 排序数组
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function(nums) {
  const sort = (arr, left = 0, right = arr.length - 1) => {
    if (left >= right) return
    let i = left
    let j = right
    const baseVal = arr[j]
    while (i < j) {
      while (i < j && arr[i] <= baseVal) {
        i++
      }
      arr[j] = arr[i]
      while (i < j && arr[j] >= baseVal) {
        j--
      }
      arr[i] = arr[j]
    }
    arr[i] = baseVal
    sort(arr, left, i - 1)
    sort(arr, i + 1, right)
  }

  const arr = [...nums]
  sort(arr)
  return arr
};
// @lc code=end


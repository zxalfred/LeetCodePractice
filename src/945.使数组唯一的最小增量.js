/*
 * @lc app=leetcode.cn id=945 lang=javascript
 *
 * [945] 使数组唯一的最小增量
 */

// @lc code=start
/**
 * @param {number[]} A
 * @return {number}
 */
const quickSort = (a) => {
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

  const newArr = [...a]
  sort(newArr)
  return newArr
}

const minIncrementForUnique = function (A) {
  if (A.length < 2) return 0
  const arr = quickSort(A)

  let prev = 0
  let curr = 1
  let count = 0

  while (curr < arr.length) {
    if (arr[prev] >= arr[curr]) {
      count += (arr[prev] - arr[curr] + 1)
      arr[curr] = arr[prev] + 1
    }
    curr++
    prev++
  }

  return count
}
// @lc code=end

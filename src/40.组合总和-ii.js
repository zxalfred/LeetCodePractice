/*
 * @lc app=leetcode.cn id=40 lang=javascript
 *
 * [40] 组合总和 II
 */

// @lc code=start
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
const quickSort = (nums) => {
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
  sort(nums)
  return nums
}
const combinationSum2 = function (candidates, target) {
  quickSort(candidates)
  const result = []
  const backtrack = (arr, index, sum) => {
    if (sum > target) return
    if (sum === target) {
      result.push(arr)
    }

    for (let i = index; i < candidates.length; i++) {
      const val = candidates[i]
      if (i > index && val === candidates[i - 1]) continue
      arr.push(val)
      backtrack([...arr], i + 1, sum + val)
      arr.pop()
    }
  }

  backtrack([], 0, 0)

  return result
}
// @lc code=end

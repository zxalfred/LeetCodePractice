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
var merge = function(left, right) {
  const result = []
  let i = 0
  let j = 0

  while (i < left.length && j < right.length) {
    if (left[i] < right[j]) {
      result.push(left[i])
      i++
    } else {
      result.push(right[j])
      j++
    }
  }

  if (i === left.length) {
    return result.concat(right.slice(j))
  } else {
    return result.concat(left.slice(i))
  }
}

var sortArray1 = function(nums) {
  if (nums.length < 2) return nums
  const middle = nums.length >> 1
  const left = nums.slice(0, middle)
  const right = nums.slice(middle)

  return merge(sortArray(left), sortArray(right))
}

const swap = (arr, i, j) => {
  [arr[i], arr[j]] = [arr[j], arr[i]]
}

const partition = (arr, left, right) => {
  const randomIndex = ~~(Math.random() * (right - left + 1) + left)
  const base = arr[randomIndex]
  swap(arr, right, randomIndex)
  let i = left
  for (let j = left; j < right; j++) {
    if (arr[j] <= base) {
      swap(arr, i, j)
      i++
    }
  }
  swap(arr, i, right)
  return i
}

const quickSort = (arr, left = 0, right = arr.length - 1) => {
  if (right <= left) return
  const index = partition(arr, left, right)
  quickSort(arr, left, index - 1)
  quickSort(arr, index + 1, right)
}

var sortArray2 = function(nums) {
  quickSort(nums)
  return nums
}

console.log(sortArray2([5,1,1,2,0,0]))
// @lc code=end


/*
 * @lc app=leetcode.cn id=31 lang=javascript
 *
 * [31] 下一个排列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var swap = function(arr, a, b) {
  const temp = arr[a]
  arr[a] = arr[b]
  arr[b] = temp
}
var reverse = function(nums, start) {
  let i = start
  let j = nums.length - 1

  while (i < j) {
    swap(nums, i, j)
    i++
    j--
  }
}
var nextPermutation = function(nums) {
  const len = nums.length
  if (len < 2) return nums
  let i = len - 2
  while (i >= 0 && nums[i + 1] <= nums[i]) {
    i--
  }
  if (i >= 0) {
    let j = len - 1
    while (j >= 0 && nums[j] <= nums[i]) {
      j--
    }
    swap(nums, i, j)
  }

  reverse(nums, i + 1)
}
// @lc code=end


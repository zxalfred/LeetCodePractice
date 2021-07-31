/*
 * @lc app=leetcode.cn id=215 lang=javascript
 *
 * [215] 数组中的第K个最大元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
 var findKthLargest = function(nums, k) {
  const swap = (a, i, j) => {
    [a[i], a[j]] = [a[j], a[i]]
  }
  let partition = (arr, left, right) => {
    const randomIndex = Math.floor(Math.random() * (right - left + 1) + left)
    const base = arr[randomIndex]
    swap(arr, right, randomIndex)
    let i = left
    for (let j = left; j < right; j++) {
      if (arr[j] <= base) {
        swap(arr, j, i)
        i++
      }
    }
    swap(arr, i, right)
    return i
  }
  
  const quickSelect = (arr, left, right, k) => {
    const index = partition(arr, left, right)
    if (index === k) {
      return arr[index]
    } else if (index < k) {
      return quickSelect(arr, index, right, k)
    } else {
      return quickSelect(arr, left, index - 1, k)
    }
  }
  return quickSelect(nums, 0, nums.length - 1, nums.length - k)
};

// @lc code=end


/*
 * @lc app=leetcode.cn id=88 lang=javascript
 *
 * [88] 合并两个有序数组
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
  let i = m - 1
  let j = n - 1
  let curr = m + n - 1
  while (j >= 0) {
    if (nums2[j] >= nums1[i] || i < 0) {
      nums1[curr] = nums2[j]
      j--
    } else {
      nums1[curr] = nums1[i]
      i--
    }
    curr--
  }
};

// @lc code=end


/*
 * @lc app=leetcode.cn id=1005 lang=javascript
 *
 * [1005] K 次取反后最大化的数组和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
const largestSumAfterKNegations = function (nums, k) {
  const bucket = new Array(201).fill(0)
  let max = -Infinity
  for (const item of nums) {
    max = Math.max(max, item)
    const index = item + 100
    bucket[index]++
  }

  let num = -100
  while (num <= max && k > 0) {
    if (bucket[num + 100] === 0) {
      num++
      continue
    }
    if (num < 0) {
      bucket[num + 100]--
      bucket[100 - num]++
      k--
    } else if (num === 0) {
      k = 0
      break
    } else {
      if (k & 1) {
        bucket[num + 100]--
        bucket[100 - num]++
      }
      k = 0
      break
    }
  }
  if (k > 0 && k & 1) {
    num--
    bucket[num + 100]++
    bucket[100 - num]--
  }

  let result = 0
  for (let i = 0; i < 201; i++) {
    if (bucket[i]) {
      result += (i - 100) * bucket[i]
    }
  }
  return result
}

// @lc code=end

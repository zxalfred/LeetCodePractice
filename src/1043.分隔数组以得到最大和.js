/*
 * @lc app=leetcode.cn id=1043 lang=javascript
 *
 * [1043] 分隔数组以得到最大和
 */

// @lc code=start
/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
const maxSumAfterPartitioning = function (arr, k) {
  if (arr.length === 1) return arr[0]

  const dp = []
  dp[0] = arr[0]
  let initMax = dp[0]
  for (let i = 1; i < k; i++) {
    initMax = Math.max(initMax, arr[i])
    dp[i] = initMax * (i + 1)
  }

  for (let i = k; i < arr.length; i++) {
    dp[i] = dp[i - 1] + arr[i]
    let max = arr[i]
    for (let j = 1; j < k; j++) {
      const prev = i - j
      max = Math.max(max, arr[prev])
      dp[i] = Math.max(dp[i], dp[prev - 1] + max * (j + 1))
    }
  }

  return dp[dp.length - 1]
}

// @lc code=end

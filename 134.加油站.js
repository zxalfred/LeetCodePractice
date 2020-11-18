/*
 * @lc app=leetcode.cn id=134 lang=javascript
 *
 * [134] 加油站
 */

// @lc code=start
/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
var canCompleteCircuit = function(gas, cost) {
  const len = gas.length

  for (let i = 0; i < len; i++) {
    let remain = gas[i]
    let step = 0
    let j = i
    let valid = true
    while (step < len) {
      let next = j + 1
      if (next === len) next = 0
      if (remain - cost[j] < 0) {
        valid = false
        break
      }
      remain = remain - cost[j] + gas[next]
      j = next
      step++
    }
    if (valid) return i
  }

  return -1
};

// @lc code=end


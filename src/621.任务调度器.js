/*
 * @lc app=leetcode.cn id=621 lang=javascript
 *
 * [621] 任务调度器
 */

// @lc code=start
/**
 * @param {character[]} tasks
 * @param {number} n
 * @return {number}
 */
const leastInterval = function (tasks, n) {
  const map = new Map()
  let max = 0
  let maxCount = 0
  for (const x of tasks) {
    map.set(x, (map.get(x) || 0) + 1)
  }

  for (const [, val] of map) {
    if (val > max) {
      max = val
      maxCount = 1
    } else if (val === max) {
      maxCount++
    }
  }

  return Math.max((max - 1) * (n + 1) + maxCount, tasks.length)
}
// @lc code=end

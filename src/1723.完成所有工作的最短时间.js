/*
 * @lc app=leetcode.cn id=1723 lang=javascript
 *
 * [1723] 完成所有工作的最短时间
 */

// @lc code=start
/**
 * @param {number[]} jobs
 * @param {number} k
 * @return {number}
 */
const minimumTimeRequired = function (jobs, k) {
  jobs = jobs.sort((a, b) => b - a)
  let l = jobs[0]
  let r = jobs.reduce((a, b) => a + b)
  while (l < r) {
    const mid = ~~((l + r) >> 1)
    if (check(jobs, mid, k)) {
      r = mid
    } else {
      l = mid + 1
    }
  }
  return l
}

const check = (jobs, limit, k) => {
  const workloads = new Array(k).fill(0)
  return backtrack(workloads, jobs, 0, limit)
}

const backtrack = (workloads, jobs, i, limit) => {
  if (i >= jobs.length) return true

  const curr = jobs[i]
  for (let j = 0; j < workloads.length; j++) {
    if (workloads[j] + curr <= limit) {
      workloads[j] += curr
      if (backtrack(workloads, jobs, i + 1, limit)) {
        return true
      }
      workloads[j] -= curr
    }

    if (workloads[j] === 0 || workloads[j] + curr === limit) break
  }

  return false
}

// @lc code=end

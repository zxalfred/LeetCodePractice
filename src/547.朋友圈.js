/*
 * @lc app=leetcode.cn id=547 lang=javascript
 *
 * [547] 朋友圈
 */

// @lc code=start
/**
 * @param {number[][]} M
 * @return {number}
 */
var findCircleNum = function(M) {
  const l = M.length
  if (!l) return 0
  let result = 0
  const color = new Array(l).fill(0)

  const bfs = (queue) => {
    while(queue.length) {
      const u = queue.pop()
      if (color[u] === 1) continue
      color[u] = 1
      for (let i = 0; i < l; i++) {
        if (M[u][i] === 1) {
          queue.push(i)
        }
      }
    }
  }

  for (let i = 0; i < l; i++) {
    if (color[i] === 0) {
      result++
      bfs([i])
    }
  }

  return result
};
// @lc code=end


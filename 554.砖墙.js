/*
 * @lc app=leetcode.cn id=554 lang=javascript
 *
 * [554] 砖墙
 */

// @lc code=start
/**
 * @param {number[][]} wall
 * @return {number}
 */
var leastBricks = function(wall) {
  const l = wall.length
  const map = new Map()
  let allSingle = true
  for (let i = 0; i < l; i++) {
    const item = wall[i]
    let prev = item[0]
    let count = map.get(prev)
    map.set(prev, count ? count + 1 : 1)
    if (item.length > 1) allSingle = false
    for (let j = 1; j < item.length - 1; j++) {
      prev = prev + item [j]
      count = map.get(prev)
      map.set(prev, count ? count + 1 : 1)
    }
  }
  if (allSingle) return l
  const arr = [...map]
  let result = 0
  for (let i = 0; i < arr.length; i++) {
    result = Math.max(result, arr[i][1])
  }

  return l - result
};
// @lc code=end


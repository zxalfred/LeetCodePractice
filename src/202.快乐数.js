/*
 * @lc app=leetcode.cn id=202 lang=javascript
 *
 * [202] 快乐数
 */

// @lc code=start
/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
  let b = n
  const set = new Set()
  set.add(b)
  var getSum = (num) => {
    const a = String(num)
    let result = 0
    for (let i = 0; i < a.length; i++) {
      result += Number(a[i]) ** 2
    }
    return result
  }

  while (b !== 1) {
    b = getSum(b)
    if (set.has(b)) return false
    set.add(b)
  }
  
  return true
};
// @lc code=end


/*
 * @lc app=leetcode.cn id=519 lang=javascript
 *
 * [519] 随机翻转矩阵
 */

// @lc code=start
/**
 * @param {number} m
 * @param {number} n
 */
const Solution = function(m, n) {
  // not selected arr
  this.m = m
  this.n = n
  this.total = n * m
  this.map = new Map()
};

/**
 * @return {number[]}
 */
Solution.prototype.flip = function() {
  const x = ~~(Math.random() * this.total)
  this.total--
  const index = this.map.get(x) || x
  this.map.set(x, this.map.get(this.total) || this.total)
  return [~~(index / this.n), index % this.n]
};

/**
 * @return {void}
 */
Solution.prototype.reset = function() {
  this.map.clear()
  this.total = this.n * this.m
};

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(m, n)
 * var param_1 = obj.flip()
 * obj.reset()
 */
// @lc code=end


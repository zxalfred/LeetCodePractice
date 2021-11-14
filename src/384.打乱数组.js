/*
 * @lc app=leetcode.cn id=384 lang=javascript
 *
 * [384] 打乱数组
 */

// @lc code=start
/**
 * @param {number[]} nums
 */
const Solution = function (nums) {
  this.rowArr = [...nums]
}

/**
 * @return {number[]}
 */
Solution.prototype.reset = function () {
  return this.rowArr
}

/**
 * @return {number[]}
 */
Solution.prototype.shuffle = function () {
  const result = [...this.rowArr]
  for (let i = this.rowArr.length - 1; i > 0; i--) {
    const randomIdx = ~~(Math.random() * (i + 1));
    [result[i], result[randomIdx]] = [result[randomIdx], result[i]]
  }
  return result
}

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(nums)
 * var param_1 = obj.reset()
 * var param_2 = obj.shuffle()
 */
// @lc code=end

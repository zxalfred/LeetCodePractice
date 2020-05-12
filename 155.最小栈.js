/*
 * @lc app=leetcode.cn id=155 lang=javascript
 *
 * [155] 最小栈
 */

// @lc code=start
/**
 * initialize your data structure here.
 */
/** 
 * @param {number} x
 * @return {void}
 */
var MinStack = function() {
  this.stack = []
  this.min = Infinity
};

/** 
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function(x) {
  this.stack.push(x)
  this.min = Math.min(x, this.min)
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
  const val = this.stack.pop()
  if (val === this.min) {
    this.min = this.stack.reduce((a, b) => {
      return Math.min(a, b)
    })
  }
  return val
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
  return this.stack[this.stack.length - 1]
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
  return this.min
};

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
// @lc code=end


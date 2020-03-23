/*
 * @lc app=leetcode.cn id=225 lang=javascript
 *
 * [225] 用队列实现栈
 */

// @lc code=start
/**
 * Initialize your data structure here.
 */
var MyStack = function() {
  this.queue = []
};

/**
 * Push element x onto stack. 
 * @param {number} x
 * @return {void}
 */
MyStack.prototype.push = function(x) {
  this.queue.push(x)
};

/**
 * Removes the element on top of the stack and returns that element.
 * @return {number}
 */
MyStack.prototype.pop = function() {
  if (this.empty()) return undefined
  const temp = []
  let result = undefined
  while (!this.empty()) {
    const a = this.queue.shift()
    if (!this.empty()) {
      temp.push(a)
    }
    result = a
  }
  this.queue = temp
  return result
};

/**
 * Get the top element.
 * @return {number}
 */
MyStack.prototype.top = function() {
  if (this.empty()) return undefined
  const temp = []
  let result = undefined
  while (!this.empty()) {
    const a = this.queue.shift()
    temp.push(a)
    result = a
  }
  this.queue = temp
  return result
};

/**
 * Returns whether the stack is empty.
 * @return {boolean}
 */
MyStack.prototype.empty = function() {
  return !this.queue.length
};

/**
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */
// @lc code=end


/*
 * @lc app=leetcode.cn id=225 lang=javascript
 *
 * [225] 用队列实现栈
 */

// @lc code=start
/**
 * Initialize your data structure here.
 */
const MyStack = function () {
  this.arr1 = []
  this.arr2 = []
}

/**
 * Push element x onto stack.
 * @param {number} x
 * @return {void}
 */
MyStack.prototype.push = function (x) {
  this.arr2.push(x)
  return x
}

/**
 * Removes the element on top of the stack and returns that element.
 * @return {number}
 */
MyStack.prototype.pop = function () {
  if (this.arr2.length > this.arr1.length) {
    [this.arr1, this.arr2] = [this.arr2, this.arr1]
  }
  while (this.arr1.length > 1) {
    this.arr2.push(this.arr1.shift())
  }
  return this.arr1.shift()
}

/**
 * Get the top element.
 * @return {number}
 */
MyStack.prototype.top = function () {
  if (this.arr2.length > this.arr1.length) {
    [this.arr1, this.arr2] = [this.arr2, this.arr1]
  }
  while (this.arr1.length > 1) {
    this.arr2.push(this.arr1.shift())
  }
  const result = this.arr1.shift()
  this.arr2.push(result)
  return result
}

/**
 * Returns whether the stack is empty.
 * @return {boolean}
 */
MyStack.prototype.empty = function () {
  return this.arr1.length === 0 && this.arr2.length === 0
}

/**
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */
// @lc code=end

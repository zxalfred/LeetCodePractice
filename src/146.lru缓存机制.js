/*
 * @lc app=leetcode.cn id=146 lang=javascript
 *
 * [146] LRU缓存机制
 */

// @lc code=start
class Node {
  constructor(key, val) {
    this.key = key
    this.val = val
  }
}

class DoubleList {
  constructor() {
    this.head = new Node(0, 0)
    this.tail = new Node(0, 0)
    this.size = 0
    this.head.next = this.tail
    this.tail.prev = this.head
  }

  addFirst(node) {
    node.next = this.head.next
    node.prev = this.head
    this.head.next.prev = node
    this.head.next = node
    this.size++
  }

  remove(node) {
    node.prev.next = node.next
    node.next.prev = node.prev
    this.size--
  }

  removeLast() {
    if (this.tail.prev === this.head) {
      return null
    }
    const last = this.tail.prev
    this.remove(last)
    return last
  }
}
/**
 * @param {number} capacity
 */
const LRUCache = function (capacity) {
  this.cap = capacity
  this.map = new Map()
  this.cache = new DoubleList()
}

/**
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function (key) {
  if (!this.map.has(key)) {
    return -1
  }
  const { val } = this.map.get(key)
  this.put(key, val)
  return val
}

/**
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function (key, value) {
  const node = new Node(key, value)
  if (this.map.has(key)) {
    this.cache.remove(this.map.get(key))
  } else if (this.cap === this.cache.size) {
    const last = this.cache.removeLast()
    this.map.delete(last.key)
  }
  this.cache.addFirst(node)
  this.map.set(key, node)
}

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
// @lc code=end

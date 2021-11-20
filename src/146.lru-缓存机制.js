/*
 * @lc app=leetcode.cn id=146 lang=javascript
 *
 * [146] LRU 缓存机制
 */

// @lc code=start
class Node {
  constructor(key, val) {
    this.val = val
    this.key = key
    this.prev = null
    this.next = null
  }
}

class DoubleLinkedList {
  constructor() {
    this.head = new Node(null)
    this.tail = new Node(null)
    this.head.next = this.tail
    this.tail.prev = this.head
    this.size = 0
  }

  addFirst(node) {
    this.head.next.prev = node
    node.next = this.head.next
    this.head.next = node
    node.prev = this.head
    this.size++
  }

  removeTail() {
    if (this.tail.prev === this.head) return
    return this.remove(this.tail.prev)
  }

  remove(node) {
    if (!node) return
    node.prev.next = node.next
    node.next.prev = node.prev
    this.size--
    return node
  }
}

/**
 * @param {number} capacity
 */
const LRUCache = function (capacity) {
  this.capacity = capacity
  this.map = new Map()
  this.cache = new DoubleLinkedList()
}

/**
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function (key) {
  const node = this.map.get(key)
  if (node) {
    this.put(key, node.val)
    return node.val
  }
  return -1
}

/**
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function (key, value) {
  const node = new Node(key, value)
  const old = this.map.get(key)
  if (old) {
    this.cache.remove(old)
  } else if (this.cache.size >= this.capacity) {
    const removed = this.cache.removeTail()
    this.map.delete(removed.key)
  }
  this.map.set(key, node)
  this.cache.addFirst(node)
}

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
// @lc code=end

/*
 * @lc app=leetcode.cn id=460 lang=javascript
 *
 * [460] LFU缓存
 */

// @lc code=start
class Node {
  constructor(key, val) {
    this.key = key
    this.val = val
    this.freq = 1
    this.pre = null
    this.post = null
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = new Node()
    this.tail = new Node()
    this.head.post = this.tail
    this.tail.pre = this.head
  }

  removeNode(node) {
    node.pre.post = node.post
    node.post.pre = node.pre
  }

  addNode(node) {
    node.post = this.head.post
    this.head.post.pre = node
    this.head.post = node
    node.pre = this.head
  }
}

class LFUCache {
  constructor(capacity) {
    this.capacity = capacity
    this.size = 0
    this.minFreq = 0
    this.cacheMap = new Map() // key-value map
    this.freqMap = new Map() // 频率 key-value
  }

  get(key) {
    if (!this.cacheMap.has(key)) {
      return -1
    }
    const node = this.cacheMap.get(key)
    this.incFreq(node)
    return node.val
  }

  put(key, value) {
    if (this.capacity === 0) {
      return
    }
    const node = this.cacheMap.get(key)
    if (node) {
      node.val = value
      this.incFreq(node)
    } else {
      if (this.capacity === this.size) {
        const minFreqLinkedList = this.freqMap.get(this.minFreq)
        this.cacheMap.delete(minFreqLinkedList.tail.pre.key)
        minFreqLinkedList.removeNode(minFreqLinkedList.tail.pre)
        this.size--
      }
      const newNode = new Node(key, value)
      this.cacheMap.set(key, newNode)
      let linkedList = this.freqMap.get(1)
      if (!linkedList) {
        linkedList = new DoublyLinkedList()
        this.freqMap.set(1, linkedList)
      }
      linkedList.addNode(newNode)
      this.size++
      this.minFreq = 1
    }
  }

  incFreq(node) {
    let freq = node.freq
    let linkedList = this.freqMap.get(freq)
    linkedList.removeNode(node)
    if (freq === this.minFreq && linkedList.head.post === linkedList.tail) {
      this.minFreq = freq + 1
    }
    node.freq++
    linkedList = this.freqMap.get(freq + 1)
    if (!linkedList) {
      linkedList = new DoublyLinkedList()
      this.freqMap.set(freq + 1, linkedList)
    }
    linkedList.addNode(node)
  }

}

/**
 * Your LFUCache object will be instantiated and called as such:
 * var obj = new LFUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
// @lc code=end


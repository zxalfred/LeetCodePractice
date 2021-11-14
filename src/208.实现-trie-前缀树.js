/*
 * @lc app=leetcode.cn id=208 lang=javascript
 *
 * [208] 实现 Trie (前缀树)
 */

// @lc code=start
/**
 * Initialize your data structure here.
 */
class Trie {
  constructor() {
    this.isEnd = false
    this.root = {}
  }

  insert(word) {
    let node = this.root
    for (let i = 0; i < word.length; i++) {
      if (!node[word[i]]) node[word[i]] = {}
      node = node[word[i]]
    }
    node.isEnd = true
  }

  search(word) {
    const node = this._search(word)
    return !!(node && node.isEnd)
  }

  startsWith(prefix) {
    const node = this._search(prefix)
    return !!node
  }

  _search(word) {
    let node = this.root
    for (let i = 0; i < word.length; i++) {
      if (!node[word[i]]) return
      node = node[word[i]]
    }
    return node
  }
}

/**
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */
// @lc code=end


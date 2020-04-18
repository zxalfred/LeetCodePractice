/*
 * @lc app=leetcode.cn id=820 lang=javascript
 *
 * [820] 单词的压缩编码
 */

// @lc code=start
/**
 * @param {string[]} words
 * @return {number}
 */
class Trie {
  constructor() {
    this.children = new Array(26)
  }

  insert(word) {
    let root = this
    let isNew = false
    for (let i = word.length - 1; i >=0; i--) {
      const code = word.charCodeAt(i) - 97
      if (!root.children[code]) {
        isNew = true
        root.children[code] = new Trie()
      }
      root = root.children[code]
    }
    return isNew ? (word.length + 1) : 0
  }
}

var minimumLengthEncoding = function(words) {
  words.sort((a, b) => {
    return b.length - a.length
  })
  let num = 0
  const trie = new Trie()
  for (let i = 0; i < words.length; i++) {
    num += trie.insert(words[i])
  }
  return num

};
// @lc code=end


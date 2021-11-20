/*
 * @lc app=leetcode.cn id=127 lang=javascript
 *
 * [127] 单词接龙
 */

// @lc code=start
/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */
const ladderLength = function (beginWord, endWord, wordList) {
  if (!endWord || !wordList.includes(endWord)) return 0
  const map = new Map()
  const { length: len } = beginWord

  for (let i = 0; i < wordList.length; i++) {
    for (let j = 0; j < len; j++) {
      const word = wordList[i]
      const key = `${word.substring(0, j)}*${word.substring(j + 1, len)}`
      !map.has(key) && map.set(key, [])
      map.get(key).push(word)
    }
  }

  const queue = [[beginWord, 1]]
  const memo = { beginWord: true }

  while (queue.length) {
    const currNode = queue.shift()
    const [currWord, currLevel] = currNode
    for (let i = 0; i < len; i++) {
      const key = `${currWord.substring(0, i)}*${currWord.substring(i + 1, len)}`
      if (map.has(key)) {
        const words = map.get(key)
        for (let j = 0; j < words.length; j++) {
          const word = words[j]
          if (word === endWord) return currLevel + 1
          if (!memo[word]) {
            memo[word] = true
            queue.push([word, currLevel + 1])
          }
        }
      }
    }
  }

  return 0
}

// @lc code=end

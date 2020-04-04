class Trie {
  constructor (){
    this.root = {}
    this.isEnd = false
  }

  insert(word) {
    let node = this.root
    for (let i = 0; i < word.length; i++) {
      if (!node[word[i]]) node[word[i]] = {}
      node = node[word[i]]
    }
    node.isEnd = true
  }
}

var findWords = function(board, words) {
  if (!words.length || !board.length || !board[0].length) return []

  const result = new Set()
  const trie = new Trie()
  for (let word of words) trie.insert(word)

  const dfs = (board, node, word, row, col, result) => {
    const xyDiff = [[1, 0], [-1, 0], [0, 1], [0, -1]]
    if (node.isEnd) {
      result.add(word)
    }
    const temp = board[row][col]
    board[row][col] = ''
    for (const diff of xyDiff) {
      const nextRow = row + diff[0]
      const nextCol = col + diff[1]
      if (nextRow >=0 && nextRow < board.length
        && nextCol >=0 && nextCol < board[0].length
      ) {
        const nextVal = board[nextRow][nextCol]
        if ( nextVal !== '' && node[nextVal]) {
          dfs(board, node[nextVal], word + nextVal, nextRow, nextCol, result)
        }
      }
    }
    board[row][col] = temp
  }
  
  for (let row = 0; row < board.length; row++) {
    for (let col = 0; col < board[0].length; col++) {
      const letter = board[row][col]
      if (trie.root[letter]) {
        dfs(board, trie.root[letter], letter, row, col, result)
      }
    }
  }

  return [...result]
};


console.log(findWords([["a","b"],["a","a"]],["aba","baa","bab","aaab","aaa","aaaa","aaba"]))
var ladderLength = function(beginWord, endWord, wordList) {
  if (!endWord || !wordList.includes(endWord)) return 0

  const comboDicts = new Map()
  const len = beginWord.length

  for (let i = 0; i < wordList.length; i++) {
    for (let j = 0; j < len; j++) {
      const adjacentWord = `${wordList[i].substring(0, j)}*${wordList[i].substring(j + 1, len)}`
      !comboDicts.has(adjacentWord) && comboDicts.set(adjacentWord, [])
      comboDicts.get(adjacentWord).push(wordList[i])
    }
  }

  const queue = [[beginWord, 1]]
  const visited = { beginWord: true }

  while (queue.length) {
    const currNode = queue.shift()
    const [currWord, currLevel] = currNode
    for (let i = 0; i < len; i++) {
      const adjacentWord = `${currWord.substring(0, i)}*${currWord.substring(i + 1,len)}`
      if (comboDicts.has(adjacentWord)) {
        const tmpWords = comboDicts.get(adjacentWord)
        for (let j = 0; j < tmpWords.length; j++) {
          if (tmpWords[j] === endWord) return currLevel + 1
          if (!visited[tmpWords[j]]) {
            visited[tmpWords[j]] = true
            queue.push([tmpWords[j], currLevel + 1])
          }
        }
      }
    }
  }
  return 0
}

console.log(ladderLength('qa', 'sq', ["si","go","se","cm","so","ph","mt","db","mb","sb","kr","ln","tm","le","av","sm","ar","ci","ca","br","ti","ba","to","ra","fa","yo","ow","sn","ya","cr","po","fe","ho","ma","re","or","rn","au","ur","rh","sr","tc","lt","lo","as","fr","nb","yb","if","pb","ge","th","pm","rb","sh","co","ga","li","ha","hz","no","bi","di","hi","qa","pi","os","uh","wm","an","me","mo","na","la","st","er","sc","ne","mn","mi","am","ex","pt","io","be","fm","ta","tb","ni","mr","pa","he","lr","sq","ye"]))

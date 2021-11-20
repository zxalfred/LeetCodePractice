const generateParenthesis = function (n) {
  const result = []
  const size = n * 2
  const dfs = (l, r, str) => {
    if (str.length === size) {
      result.push(str)
      return
    }
    if (l > 0) {
      dfs(l - 1, r, `${str}(`)
    }
    if (r > l) {
      dfs(l, r - 1, `${str})`)
    }
  }
  dfs(n, n, '')
  return result
}

console.log(generateParenthesis(3))

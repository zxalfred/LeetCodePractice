var solveNQueens = function(n) {
  if (n < 1) return []
  const res = []
  
  const dfs = (row, col, ltr, rtl, sum) => {
    if (row === n) {
      res.push([...sum])
      return
    }

    let bits = (~(col|ltr|rtl))&((1<<n)-1)
    while(bits > 0) {
      const val = bits&(-bits)
      sum.push(val)
      dfs(row + 1, col|val, (ltr|val)>>1, (rtl|val)<<1, sum)
      sum.pop()
      bits = bits&(bits-1)
    }
  }

  dfs(0, 0, 0, 0, [])

  // format result
  for (let i = 0, l = res.length; i < l; i++) {
    for (let j = 0; j < n; j++) {
      let val = res[i][j]
      let index = -1
      while (val) {
        val = val>>1
        index++
      }
      let x = new Array(n).fill('.')
      x[index] = 'Q'
      x = x.join('')
      res[i][j] = x
    }
  }

  return res
};

console.log(solveNQueens(4))
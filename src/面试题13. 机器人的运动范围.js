var movingCount = function(m, n, k) {
  let res = 1
  const visited = []
  const diff = [[0, 1], [0, -1], [1, 0], [-1, 0]]

  for (let i = 0; i < m; i++) {
    visited[i] = []
  }

  const dfs = (row, col) => {
    for (const item of diff) {
      const x = row + item[0]
      const y = col + item[1]

      if (
        x >= 0 && x < m
        && y >=0 && y <n
        && ((~~(x/10) + x%10 + ~~(y/10) + y%10) <= k)
        && visited[x][y] !== true
      ) {
        visited[x][y] = true
        res++
        dfs(x, y)
      }
    }
  }

  dfs(0, 0)
  return res
};
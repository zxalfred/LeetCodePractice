const gcd = (a, b) => {
  if (b === 0) return a
  return gcd(b, a % b)
}

var hasGroupsSizeX = function(deck) {
  const map = new Map()

  for (const item of deck) {
    const val = map.get(item)
    if (val) {
      map.set(item, val + 1)
    } else {
      map.set(item, 1)
    }
  }

  const val = Array.from(map.values()).reduce((a, b) => {
    return gcd(a, b)
  })

  return val > 1
};

hasGroupsSizeX([1,2,3,4,4,3,2,1])
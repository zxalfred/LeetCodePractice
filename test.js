const calcBits = (num) => {
  if (map.has(num)) {
    return map.get(num)
  }
  let count = 0
  let i = num
  while(i) {
    if (i & 1 === 1) {
      count++
    }
    i = i >> 1
  }
  map.set(num, count)
  return count
}

calcBits(8)
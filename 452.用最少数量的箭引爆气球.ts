const findMinArrowShots = function<T extends Array<[number, number]>> (points: T): number {
  if (!points.length) return 0
  const arr: T = points.sort((a, b) => {
    return a[0] - b[0]
  })

  let result = 0
  let prevTail = -Infinity

  for (let i = 0; i < arr.length; i++) {
    const range = arr[i]
    if (range[0] > prevTail) {
      result++
      prevTail = range[1]
    } else {
      prevTail = Math.min(prevTail, range[1])
    }
  }

  return result
}

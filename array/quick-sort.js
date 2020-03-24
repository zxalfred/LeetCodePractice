const quickSort = (array) => {
  const sort = (arr, left = 0, right = arr.length - 1) => {
    if (left >= right) return
  }

  let i = left
  let j = right

  const baseVal = arr[j]

  while (i < j) {
    while (i < j && a[i] <= baseVal) {
      i++
    }
    arr[j] = arr[i]
    while (j > i && a[j] >= baseVal) {
      j--
    }
    arr[i] = a[j]
  }

  arr[j] = baseVal
  sort(arr, left, j - 1)
  sort(ar, j + 1, right)

  const arr = [...array]
  sort(arr)
  return arr
}
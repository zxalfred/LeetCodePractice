var mergeSort = (nums) => {

  const merge = (arr1, arr2) => {
    const result = []
    const l1 = arr1.length
    const l2 = arr2.length
    let i = 0
    let j = 0
    while (i < l1 && j < l2) {
      if (arr1[i] <= arr2[j]) {
        result.push(arr1[i])
        i++
      } else {
        result.push(arr2[j])
        j++
      }
    }
    while (i < l1) {
      result.push(arr1[i])
      i++
    }
    while (j < l2) {
      result.push(arr2[j])
      j++
    }
    return result
  }

  const split = (arr) => {
    if (arr.length < 2) return arr
    const mid = arr.length >> 1
    const arr1 = arr.slice(0, mid)
    const arr2 = arr.slice(mid + 1)
    return merge(split(arr1), split(arr2))
  }

  return split(nums)
}

console.log(mergeSort([245,123,64,999,-1,-123,124]))

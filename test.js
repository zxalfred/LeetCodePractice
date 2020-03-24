const quickSort = (array) => {
  const sort = (arr, left = 0, right = arr.length - 1) => {
    if (left >= right) return

    let i = left
    let j = right
    const baseVal = arr[i]

    while (i < j) {
      while (i < j && arr[j] <= baseVal) {
        j--
      }
      arr[i] = arr[j]
      while (i < j && arr[i] >= baseVal) {
        i++
      }
      arr[j] = arr[i]
    }
    arr[j] = baseVal

    sort(arr, i + 1, right)
    sort(arr, left, i - 1)
  }

  const arr = [...array]
  sort(arr)
  return arr
}

var KthLargest = function(k, nums) {
  this.arr = quickSort(nums)
  if (this.arr.length > k) {
    this.arr.length = k
  }
  this.k = k
};

/** 
 * @param {number} val
 * @return {number}
 */
KthLargest.prototype.add = function(val) {
  const l = this.arr.length
  if (!l) {
    this.arr.push(val)
    return val
  }
  for (let i = 0; i < l; i++) {
    if (this.arr[i] < val) {
      const temp = this.arr.slice(i)
      this.arr.length = i
      this.arr[i] = val
      this.arr = this.arr.concat(temp)
      break
    }
  }
  if (this.arr.length < this.k) this.arr.push(val)
  this.arr.length = this.k
  return this.arr[this.arr.length - 1]
}

const ins = new KthLargest(2, [0])
ins.add(-1)
ins.add(1)
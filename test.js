const quickSort = (array) => {
  const sort = (arr, left = 0, right = arr.length - 1) => {
    if (left >= right) return
    let i = left
    let j = right
    const baseVal = arr[j]

    while (i < j) {
      while (i < j && arr[i] <= baseVal) {
        i++
      }
      arr[j] = arr[i]
      while (i < j && arr[j] >= baseVal) {
        j--
      }
      arr[i] = arr[j]
    }
    arr[i] = baseVal
    sort(arr, left, i - 1)
    sort(arr, i + 1, right)
  }

  const arr = [...array]
  sort(arr)
  return arr
}

var threeSum = function(nums) {
  const result = []
  nums = nums.sort()
  
  while (nums.length >= 3) {
    const target = -nums.shift()
    let head = 0
    let tail = nums.length - 1
    while (head < tail) {
      const sum = nums[head] + nums[tail]
      if (sum === target) {
        result.push([-target, nums[head], nums[tail]])
        const a = nums[head]
        const b = nums[tail]
        while (nums[head] === a) {
          head++
        }
        while (nums[tail] === b) {
          tail--
        }
      } else if (sum > target) {
        tail--
      } else {
        head++
      }
    }
    while (nums[0] === -target) {
      nums.shift()
    }
  }

  return result
};

threeSum([-4,-2,-2,-2,0,1,2,2,2,3,3,4,4,6,6])
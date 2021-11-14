/*
 * @lc app=leetcode.cn id=493 lang=typescript
 *
 * [493] 翻转对
 */

// @lc code=start
function reversePairs(nums: number[]): number {
  let count = 0
  const merge = (n1: number[], n2: number[]): number[] => {
    const result: number[] = []
    const len1 = n1.length
    const len2 = n2.length
    let i = len1 - 1
    let j = len2 - 1
    for (; i >= 0; i--) {
      for (; j >= 0; j--) {
        if (n1[i] > 2 * n2[j]) {
          count += j + 1
          break
        }
      }
    }

    i = 0
    j = 0
    while (i < len1 && j < len2) {
      if (n1[i] <= n2[j]) {
        result.push(n1[i])
        i++
      } else {
        result.push(n2[j])
        j++
      }
    }

    return i < len1 ? result.concat(n1.slice(i)) : result.concat(n2.slice(j))
  }

  const split = (arr: number[]): number[] => {
    if (arr.length < 2) return arr
    const mid = arr.length >> 1
    return merge(
      split(arr.slice(0, mid)),
      split(arr.slice(mid)),
    )
  }

  split(nums)

  return count
}

// @lc code=end


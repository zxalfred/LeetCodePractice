/*
 * @lc app=leetcode.cn id=60 lang=javascript
 *
 * [60] 排列序列
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number} k
 * @return {string}
 */
// 回溯
// var getPermutation = function(n, k) {
//   let count = 0
//   let result = ''
//   const memo = []
//   // memo[index] is true when used
//   const backTrack = (str) => {
//     if (str.length === n) {
//       count++
//       if (count === k) {
//         result = str
//       }
//       return
//     }

//     for (let i = 0; i < n; i++) {
//       if (memo[i] !== true) {
//         memo[i] = true
//         backTrack(`${str}${i + 1}`)
//         if (result) return
//         memo[i] = false
//       }
//     }
//   }

//   backTrack('')

//   return result
// };

// 数学/找规律
const getPermutation = function (n, k) {
  const nums = []
  let result = ''
  let factorial = 1

  for (let i = 1; i <= n; i++) {
    nums.push(i)
    factorial *= i
  }

  k--
  while (result.length !== n) {
    factorial /= nums.length
    const index = k / factorial | 0
    result += nums[index]
    nums.splice(index, 1)
    k %= factorial
  }

  return result
}

// @lc code=end

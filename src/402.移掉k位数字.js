/*
 * @lc app=leetcode.cn id=402 lang=javascript
 *
 * [402] 移掉K位数字
 */

// @lc code=start
/**
 * @param {string} num
 * @param {number} k
 * @return {string}
 */
var removeKdigits = function(num, k) {
  const stack = []
  const len = num.length

  for (let i = 0; i < len; i++) {
    while (k > 0 && stack.length && stack[stack.length - 1] > num[i]) {
      stack.pop()
      k--
    }
    stack.push(num[i])
  }

  while (k > 0) {
    stack.pop()
    k--
  }

  let result = ''
  let isLeadingZero = true

  for (let i = 0; i < stack.length; i++) {
    if (isLeadingZero && stack[i] === '0') {
      continue
    }
    isLeadingZero = false
    result += stack[i]
  }

  return result || '0'
}

// @lc code=end


/*
 * @lc app=leetcode.cn id=8 lang=javascript
 *
 * [8] 字符串转换整数 (atoi)
 */

// @lc code=start
/**
 * @param {string} str
 * @return {number}
 */
var myAtoi = function(str) {
  const maxVal = 2147483647
  const minVal = -2147483648
  const resultArr = []
  let signalFlag
  let result

  for (let i = 0; i < str.length; i++) {
    const val = str[i]
    if ((val === '-' || val === '+')
      && !resultArr.length
      && !signalFlag
    ) {
      signalFlag = val === '+' ? 1 : -1
    } else if (val === ' '
      && !resultArr.length
      && !signalFlag
    ) {
      continue
    } else if (val !== ' '
      && !Number.isNaN(Number(val))
    ) {
      resultArr.push(val)
    } else {
      break
    }
  }

  if (!resultArr.length) return 0
  signalFlag = signalFlag || 1
  result = signalFlag * Number(resultArr.join(''))
  result = result > maxVal ? maxVal : result
  result = result < minVal ? minVal : result
  return result
};
// @lc code=end


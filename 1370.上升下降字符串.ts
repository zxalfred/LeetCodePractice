/*
 * @lc app=leetcode.cn id=1370 lang=typescript
 *
 * [1370] 上升下降字符串
 */

// @lc code=start

function sortString(s: string): string {
  if (s.length === 1) return s
  const map: Map<string, number> = new Map()
  
  const arr: Array<string|undefined> = s.split('').sort((a, b) => {
    let aCode: number | undefined = map.get(a)
    if (aCode === undefined) {
      aCode = a.charCodeAt(0)
      map.set(a, aCode)
    }
    let bCode: number | undefined = map.get(b)
    if (bCode === undefined) {
      bCode = b.charCodeAt(0)
      map.set(b, bCode)
    }
    return aCode - bCode
  })

  let result: string = ''
  let prev: string | undefined = undefined
  let asc = true
  let i = 0
  while (result.length !== s.length) {
    if (arr[i] !== undefined && arr[i] !== prev) {
      result += arr[i]
      prev = arr[i]
      arr[i] = undefined
    }
    i = asc ? (i + 1) : (i - 1)
    if (i === arr.length)  {
      i--
      asc = false
      prev = undefined
    }
    if (i === -1) {
      i++
      asc = true
      prev = undefined
    }
  }


  return result
};

// @lc code=end


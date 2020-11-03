var largestRectangleArea = function(heights) {
  const l = heights.length
  const stack = [0]
  const arr = [0, ...heights, 0]
  let result = 0

  for (let i = 1; i < arr.length; i++) {
    const stackTop = stack[stack.length - 1]
    if (arr[i] <= arr[stackTop]) {
      while (stack.length > 1 && arr[stack[stack.length - 1]] > arr[i]) {
        const topIndex = stack.pop()
        result = Math.max((i - stack[stack.length - 1] - 1) * arr[topIndex], result)
      }
    }
    stack.push(i)
  }
  while (stack.length > 1) {
    const now = stack.pop()
    const prev = stack[stack.length - 1]
    result = Math.max(result, (l - prev) * arr[now])
  }
  return result
};

console.log(largestRectangleArea([2,1,5,6,2,3]))
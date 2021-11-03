/*
 * @lc app=leetcode.cn id=407 lang=javascript
 *
 * [407] 接雨水 II
 */

// @lc code=start
/**
 * @param {number[][]} heightMap
 * @return {number}
 */
var trapRainWater = function(heightMap) {
  const row = heightMap.length
  const col = heightMap[0].length
  if (row < 3 || col < 3) return 0
  let result = 0

  const heap = new Heap((a, b) => a[2] - b[2])
  const visited = Array.from(new Array(row), () => new Array(col))
  for (let i = 0; i < row; i++) {
    if (i === 0 || i === row - 1) {
      for (let j = 0; j < col; j++) {
        heap.add([i, j, heightMap[i][j]])
        visited[i][j] = true
      }
    } else {
      heap.add([i, 0, heightMap[i][0]])
      visited[i][0] = true
      heap.add([i, col - 1, heightMap[i][col - 1]])
      visited[i][col - 1] = true
    }
  }

  const compareNearby = (i, j, prevHeight) => {
    visited[i][j] = true
    const height = heightMap[i][j]
    const heightDiff = prevHeight - height
    if (heightDiff > 0) {
      result += heightDiff
      heap.add([i, j, prevHeight])
      return heightDiff
    } else {
      heap.add([i, j, height])
      return 0
    }
  }

  while (heap.size()) {
    const [i, j, height] = heap.pop()
    if (i - 1 >= 0 && !visited[i - 1][j]) {
      result += compareNearby(i - 1, j, height)
    }
    if (i + 1 < row && !visited[i + 1][j]) {
      result += compareNearby(i + 1, j, height)
    }
    if (j - 1 >= 0 && !visited[i][j - 1]) {
      result += compareNearby(i, j - 1, height)
    }
    if (j + 1 < col && !visited[i][j + 1]) {
      result += compareNearby(i, j + 1, height)
    }
  }

  return result
};

class Heap {
  constructor(compare) {
    this._elements = []
    this._compare = compare
  }
  size() {
    return this._elements.length
  }
  add(el) {
    let els = this._elements
    els.push(el)
    this.shiftUp(els.length - 1)
  }
  pop() {
    let els = this._elements
    if (els.length === 1) return els.shift()
    const peak = els[0]
    els[0] = els.pop()
    this.shiftDown(0)
    return peak
  }
  shiftDown(parent) {
    let els = this._elements, compare = this._compare
    while (0 <= parent && parent < els.length) {
      // 确保 child1 为值较小的子元素
      let child1 = parent * 2 + 1
      if (child1 >= els.length) return
      let child2 = child1 + 1
      // NOTICE: child2 越界不需要 return
      if (child2 < els.length && compare(els[child2], els[child1]) < 0) child1 = child2
      if (compare(els[parent], els[child1]) < 0) return
      ;[els[parent], els[child1]] = [els[child1], els[parent]]
      parent = child1
    }
  }
  shiftUp(child) {
    let els = this._elements, compare = this._compare
    while (0 <= child && child < els.length) {
      let parent = Math.floor((child - 1) / 2)
      if (parent < 0) return
      if (compare(els[parent], els[child]) < 0) return
      ;[els[parent], els[child]] = [els[child], els[parent]]
      child = parent
    }
  }
}

console.log(trapRainWater([[3,3,3,3,3],[3,2,2,2,3],[3,2,1,2,3],[3,2,2,2,3],[3,3,3,3,3]]))
// @lc code=end


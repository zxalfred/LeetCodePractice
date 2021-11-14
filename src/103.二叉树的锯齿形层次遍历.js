/*
 * @lc app=leetcode.cn id=103 lang=javascript
 *
 * [103] 二叉树的锯齿形层次遍历
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
// bfs
var zigzagLevelOrder = function(root) {
  if (!root) return []
  const result = []
  const queue = [root]
  let order = true // true for left to right

  while (queue.length) {
    const levelSize = queue.length
    const currentLevel = []
    for (let i = 0; i < levelSize; i++) {
      const node = queue.shift()
      currentLevel.push(node.val)
      if (node.left) queue.push(node.left)
      if (node.right) queue.push(node.right)
    }
    if (!order) currentLevel.reverse()
    result.push(currentLevel)
    order = !order
  }

  return result
};
// @lc code=end


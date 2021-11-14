/*
 * @lc app=leetcode.cn id=199 lang=javascript
 *
 * [199] 二叉树的右视图
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
 * @return {number[]}
 */
var rightSideView = function(root) {
  if (!root) return []

  const queue = [root]
  const result = []

  while (queue.length) {
    const rowLength = queue.length
    const currRow = []
    for (let i = 0; i < rowLength; i++) {
      const node = queue.shift()
      currRow.push(node)
      if (node.left) queue.push(node.left)
      if (node.right) queue.push(node.right)
    }
    result.push(currRow.pop().val)
  }
  return result
};
// @lc code=end


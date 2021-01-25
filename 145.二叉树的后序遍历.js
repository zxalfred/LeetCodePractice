/*
 * @lc app=leetcode.cn id=145 lang=javascript
 *
 * [145] 二叉树的后序遍历
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var postorderTraversal = function(root) {
  const result = []
  const stack = []
  while (root || stack.length) {
    while (root) {
      result.push(root.val)
      stack.push(root)
      root = root.right
    }
    const node = stack.pop()
    root = node.left
  }

  return result.reverse()
};
// @lc code=end


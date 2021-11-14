/*
 * @lc app=leetcode.cn id=112 lang=javascript
 *
 * [112] 路径总和
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
 * @param {number} targetSum
 * @return {boolean}
 */
const hasPathSum = function (root, targetSum) {
  if (!root) return false
  const backTrack = (node, sum) => {
    if (!node.left && !node.right) {
      return (sum + node.val) === targetSum
    }
    return (!!node.left && backTrack(node.left, sum + node.val)) || (!!node.right && backTrack(node.right, sum + node.val))
  }

  return backTrack(root, 0)
}
// @lc code=end

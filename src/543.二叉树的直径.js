/*
 * @lc app=leetcode.cn id=543 lang=javascript
 *
 * [543] 二叉树的直径
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
 * @return {number}
 */
const diameterOfBinaryTree = function (root) {
  if (!root) return 0

  let result = 0

  const depth = (node) => {
    if (!node) return 0
    const leftDept = depth(node.left)
    const rightDept = depth(node.right)
    result = Math.max(result, (leftDept + rightDept))
    return Math.max(leftDept, rightDept) + 1
  }
  depth(root)

  return result
}
// @lc code=end

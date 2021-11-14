/*
 * @lc app=leetcode.cn id=124 lang=javascript
 *
 * [124] 二叉树中的最大路径和
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
 * @return {number}
 */
const maxPathSum = function (root) {
  let result = -Infinity
  const findMax = (node) => {
    if (!node) return 0

    const maxLeft = Math.max(0, findMax(node.left))
    const maxRight = Math.max(0, findMax(node.right))
    const val = node.val + maxLeft + maxRight
    result = Math.max(result, val)
    return node.val + Math.max(maxLeft, maxRight)
  }

  findMax(root)

  return result
}

// @lc code=end

/*
 * @lc app=leetcode.cn id=563 lang=javascript
 *
 * [563] 二叉树的坡度
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
const findTilt = function (root) {
  let result = 0
  const sum = (node) => {
    if (!node) return 0
    const leftSum = sum(node.left)
    const rightSum = sum(node.right)
    result += Math.abs(leftSum - rightSum)
    return node.val + leftSum + rightSum
  }
  sum(root)

  return result
}

// @lc code=end

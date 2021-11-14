/*
 * @lc app=leetcode.cn id=897 lang=javascript
 *
 * [897] 递增顺序搜索树
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
 * @return {TreeNode}
 */
var increasingBST = function(root) {
  if (!root) return null
  let curr = result = new TreeNode()
  function midOrderTraverse(node) {
    if (!node) return
    midOrderTraverse(node.left)
    curr.right = new TreeNode(node.val)
    curr = curr.right
    midOrderTraverse(node.right)
  }
  midOrderTraverse(root)
  return result.right
};

// @lc code=end


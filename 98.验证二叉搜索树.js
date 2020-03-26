/*
 * @lc app=leetcode.cn id=98 lang=javascript
 *
 * [98] 验证二叉搜索树
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
 * @return {boolean}
 */
var isValidBST = function(root) {
  if (!root) return true

  let leftValid = true
  let rightValid = true

  let left = root.left
  let right = root.right

  if (left) {
    while (left.right) {
      left = left.right
    }
    if (left.val >= root.val) return false
    leftValid = isValidBST(root.left)
  }

  if (right) {
    while (right.left) {
      right = right.left
    }
    if (right.val <= root.val) return false
    rightValid = isValidBST(root.right)
  }

  return leftValid && rightValid
};
// @lc code=end


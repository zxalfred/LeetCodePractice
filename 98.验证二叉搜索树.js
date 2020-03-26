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
  let pre = -Infinity
  
  const inorder = (node) => {
    if (node === null) return true

    if (!inorder(node.left)) return false
    if (node.val <= pre) {
      return false
    } else {
      pre = node.val
    }
    if (!inorder(node.right)) return false

    return true
  }
  
  return inorder(root)
};
// @lc code=end


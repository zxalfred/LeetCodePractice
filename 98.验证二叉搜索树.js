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
  const validate = (node, lower, upper) => {
    if (!node) return true

    const val = node.val
    
    if (val >= upper) return false
    if (val <= lower) return false

    if (!validate(node.left, lower, val)) return false
    if (!validate(node.right, val, upper)) return false

    return true
  }

  return validate(root)
};
// @lc code=end


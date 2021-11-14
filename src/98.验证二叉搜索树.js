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

// var isValidBST = function(root) {
//   let pre = -Infinity
  
//   const inorder = (node) => {
//     if (node === null) return true

//     if (!inorder(node.left)) return false
//     if (node.val <= pre) {
//       return false
//     } else {
//       pre = node.val
//     }
//     if (!inorder(node.right)) return false

//     return true
//   }
  
//   return inorder(root)
// };

var isValidBST = function(root) {

  var validate = function(node, min, max) {
    if (!node) return true

    const { val } = node
    if (min !== undefined && val <= min) return false
    if (max !== undefined && val >= max) return false

    if (!validate(node.left, min, val)) return false
    if (!validate(node.right, val, max)) return false

    return true
  }

  return validate(root)
}
// @lc code=end


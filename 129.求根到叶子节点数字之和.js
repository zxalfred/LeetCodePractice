/*
 * @lc app=leetcode.cn id=129 lang=javascript
 *
 * [129] 求根到叶子节点数字之和
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
var sumNumbers = function(root) {
  if (!root) return 0
  let result = 0

  const dfs = (node, str) => {
    if (!node.left && !node.right) {
      result += parseInt(str + String(node.val))
    }
    const nextStr = str + String(node.val)
    if (node.left) {
      dfs(node.left, nextStr)
    }
    if (node.right) {
      dfs(node.right, nextStr)
    }
  }

  dfs(root, '')

  return result
};
// @lc code=end


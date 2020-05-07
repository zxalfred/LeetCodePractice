/*
 * @lc app=leetcode.cn id=572 lang=javascript
 *
 * [572] 另一个树的子树
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
 * @param {TreeNode} s
 * @param {TreeNode} t
 * @return {boolean}
 */
const recursion = (a, b) => {
  if (!a && !b) return true
  if (!a || !b) return false
  if (a.val !== b.val) return false

  return recursion(a.left, b.left) && recursion(a.right, b.right)
}

var isSubtree = function(s, t) {
  if (!s) return !t

  if (recursion(s, t)) {
    return true
  } else {
    return isSubtree(s.left, t) || isSubtree(s.right, t)
  }
};
// @lc code=end


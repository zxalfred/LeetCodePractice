/*
 * @lc app=leetcode.cn id=559 lang=javascript
 *
 * [559] N 叉树的最大深度
 */

// @lc code=start
/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number}
 */
const maxDepth = function (root) {
  if (!root) return 0
  if (!root.children) return 1
  return root.children.reduce((prev, now) => Math.max(prev, maxDepth(now)), 0) + 1
}
// @lc code=end

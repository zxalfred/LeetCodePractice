/*
 * @lc app=leetcode.cn id=102 lang=javascript
 *
 * [102] 二叉树的层次遍历
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
 * @return {number[][]}
 */
var levelOrder = function(root) {
  if (!root) return []
  const queue = [root]
  const result = [[root.val]]
  const depthes = new Map()
  depthes.set(root, 0)

  while (queue.length) {
    const u = queue.shift()
    const children = []
    if (u.left) children.push(u.left)
    if (u.right) children.push(u.right)
    for (const child of children) {
      childDepth = depthes.get(u) + 1
      depthes.set(child, childDepth)
      if (result[childDepth]) {
        result[childDepth].push(child.val)
      } else {
        result[childDepth] = [child.val]
      }
      queue.push(child)
    }
  }

  return result
};
// @lc code=end


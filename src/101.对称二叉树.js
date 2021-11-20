/*
 * @lc app=leetcode.cn id=101 lang=javascript
 *
 * [101] 对称二叉树
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
// var isSymmetric = function(root) {
//   if (root === null) return true
//   const isMirror = function(left ,right) {
//     if (left === null && right === null) return true
//     if (left === null || right === null) return false

//     return (
//       left.val === right.val
//       && isMirror(left.right, right.left)
//       && isMirror(left.left, right.right)
//     )
//   }
//   return isMirror(root.left, root.right)
// };

const isSymmetric = function (root) {
  if (!root) return true

  const queue = [root.left, root.right]

  while (queue.length) {
    const left = queue.shift()
    const right = queue.shift()
    if (!left && !right) continue
    if (!left || !right) return false
    if (left.val !== right.val) return false
    queue.push(left.left)
    queue.push(right.right)
    queue.push(left.right)
    queue.push(right.left)
  }

  return true
}

// @lc code=end

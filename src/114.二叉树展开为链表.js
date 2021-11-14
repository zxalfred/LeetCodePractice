/*
 * @lc app=leetcode.cn id=114 lang=javascript
 *
 * [114] 二叉树展开为链表
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
 * @return {void} Do not return anything, modify root in-place instead.
 */
const flatten = function (root) {
  const help = (node) => {
    if (!node) return node
    const { right } = node
    node.right = help(node.left)
    node.left = null
    let cur = node
    while (cur.right) {
      cur = cur.right
    }
    cur.right = help(right)

    return node
  }

  return help(root)
}

// @lc code=end

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
// BFS
var levelOrder1 = function(root) {
  if (!root) return []
  const result = []
  const queue = [root]

  while (queue.length) {
    const curRow = []
    const curSize = queue.length
    for (let i = 0; i < curSize; i++) {
      const node = queue.shift()
      curRow.push(node.val)
      if (node.left) queue.push(node.left)
      if (node.right) queue.push(node.right)
    }
    result.push(curRow)
  }

  return result
};

// DFS
var levelOrder2 = function(root) {
  const result = []
  const dfs = (node, depth) => {
    if (!node) return
    if (!result[depth]) result.push([])
    result[depth].push(node.val)
    dfs(node.left, depth + 1)
    dfs(node.right, depth + 1)
  }

  dfs(root, 0)
  return result
};

// @lc code=end

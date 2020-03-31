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
// var levelOrder = function(root) {
//   if (!root) return []
//   const queue = [root]
//   const result = [[root.val]]
//   const depthes = new Map()
//   depthes.set(root, 0)

//   while (queue.length) {
//     const u = queue.shift()
//     const children = []
//     if (u.left) children.push(u.left)
//     if (u.right) children.push(u.right)
//     for (const child of children) {
//       childDepth = depthes.get(u) + 1
//       depthes.set(child, childDepth)
//       if (result[childDepth]) {
//         result[childDepth].push(child.val)
//       } else {
//         result[childDepth] = [child.val]
//       }
//       queue.push(child)
//     }
//   }

//   return result
// };

// BFS
// var levelOrder = function(root) {
//   if (!root) return []
//   const result = []
//   const queue = [root]

//   while (queue.length) {
//     const levelSize = queue.length
//     const currentLevel = []

//     for (let i = 0; i < levelSize; i++) {
//       node = queue.shift()
//       currentLevel.push(node)
//       if (node.left) queue.push(node.left)
//       if (node.right) queue.push(node.right)
//     }

//     result.push(currentLevel)
//   }

//   return result
// }

// DFS
var levelOrder = function(root) {
  if (!root) return []
  const result = []

  const dfs = (node, level) => {
    if (!node) return
    if (result.length < level + 1) {
      result.push([])
    }
    result[level].push(node.val)
    dfs(node.left, level + 1)
    dfs(node.right, level + 1)
  }
  dfs(root, 0)
  return result
}

// @lc code=end

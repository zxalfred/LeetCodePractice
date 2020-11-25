/*
 * @lc app=leetcode.cn id=222 lang=typescript
 *
 * [222] 完全二叉树的节点个数
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */
declare class TreeNode {
  val: number
  left: TreeNode | null
  right: TreeNode | null
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null)
}

// my answer
function countNodes(root: TreeNode | null): number {
  if (!root) return 0
  let treeDepth = 0
  let countLastLevel = 0

  const postOrderTraverse = (node: TreeNode, level: number):boolean => {
    let res
    if (node.left) {
      res = postOrderTraverse(node.left, level + 1)
    }
    if (node.right && res) {
      return postOrderTraverse(node.right, level + 1)
    }
    if (!node.left && !node.right) {
      if (!treeDepth) {
        countLastLevel++
        treeDepth = level
        return true
      }
      if (level === treeDepth) {
        countLastLevel++
        return true
      }
    }
    return false
  }

  postOrderTraverse(root, 0)

  let result = 0
  for (let i = 0; i < treeDepth; i++) {
    result += 2 ** i
  }
  result += countLastLevel
  return result
}

// a better one
function countNodes2(root: TreeNode | null): number {
  if (!root) return 0

  const rightLevel = countLevel(root.right)
  const leftLevel = countLevel(root.left)

  if (rightLevel === leftLevel) {
    return countNodes2(root.left) + (1 << rightLevel)
  } else {
    return countNodes2(root.right) + (1 << leftLevel)
  }
}

function countLevel(root: TreeNode): number {
  let result = 0
  while(root) {
    result++
    root = root.left
  }
  return result
}
// @lc code=end


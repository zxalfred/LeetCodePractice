/*
 * @lc app=leetcode.cn id=938 lang=javascript
 *
 * [938] 二叉搜索树的范围和
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
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
 var rangeSumBST = function(root, low, high) {
  if (!root) return 0
  let result = 0
  const traverse = (node) => {
    if (!node) return
    const val = node.val
    if (val >= low && val <= high) {
      result += val
    }
    if (val > high) {
      traverse(node.left)
    } else if (val < low) {
      traverse(node.right)
    } else {
      traverse(node.left)
      traverse(node.right)
    }
  }
  traverse(root)
  return result
};

const tree = {
  val: 15,
  left: {
    val: 9
  },
  right: {
    val: 21
  }
}

console.log(rangeSumBST(tree, 19 , 21))
// @lc code=end


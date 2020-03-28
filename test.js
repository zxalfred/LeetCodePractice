class Node {
  constructor(val) {
    this.val = val
    this.left = null
    this.right = null
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null
  }

  insert(val) {
    if (!this.root) {
      this.root = new Node(val)
    } else {
      this.insertNode(this.root, val)
    }
  }

  insertNode(node, val) {
    if (val < node.val) {
      if (!node.left) {
        node.left = new Node(val)
      } else {
        this.insertNode(node.left, val)
      }
    } else {
      if (!node.right) {
        node.right = new Node(val)
      } else {
        this.insertNode(node.right, val)
      }
    }
  }
}

const tree = new BinarySearchTree()
const input = [3,9,20,null,null,15,7]
for (item of input) {
  if (item) {
    tree.insert(item)
  }
}
levelOrder(tree.root)

function levelOrder(root) {
  if (!root) return []
  const queue = [root]
  const result = []
  const depthes = {
    [root.val]: 0
  }
  let maxDepth = 0

  while (queue.length) {
    const u = queue.shift()
    const children = []
    if (u.left) children.push(u.left)
    if (u.right) children.push(u.right)
    for (const child of children) {
      depthes[child.val] = depthes[u.val] + 1
      maxDepth = Math.max(depthes[child.val], maxDepth)
      queue.push(child)
    }
  }

  result.length = maxDepth + 1
  result.fill(new Array)
  for (key in depthes) {
    result[depthes[key]].push(key)
  }
  return result
};
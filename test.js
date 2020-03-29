var isValidBST = function(root) {

  var validate = function(node, min, max) {
    if (!node) return true

    const { val } = node
    if (min && val <= min) return false
    if (max && val >= max) return false

    if (!validate(node.left, min, val)) return false
    if (!validate(node.right, val, max)) return false

    return true
  }

  return validate(root)
}

const tree = {
  val: 0,
  right: {
    val: -1
  }
}

console.log(isValidBST(tree))